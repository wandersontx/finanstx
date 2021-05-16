import React, { createContext, useState, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [load, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser) {
                //converterndo para JSON
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }
        loadStorage();
    },[]);


    async function signup(email, senha, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo: 0,
                nome: nome,
            })
            .then( () => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email
                };
                setUser(data);
                storageUser(data);
              
            }).catch((error) => {
                alert(error)
            });
        })
    }

    async function signIn(email, senha){
        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                };
                setUser(data);
                storageUser(data);
            })
        })
        .catch((error) => {
                alert(error)
        });

    }

    async function storageUser(data){
        // JSON.stringify converte json para string
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        });
    }

    return(
        //!!user converter para boolean..caso tenha algum dado ficará com true, senao fica como false
        <AuthContext.Provider value={{ signed: !!user ,user, load, signup, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
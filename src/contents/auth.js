import React, { createContext, useState } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null)


    async function signup(email, senha, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child('uid').set({
                saldo: 0,
                nome: nome,
            })
            .then( () => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email
                }
                setUser(data);
            });
        })
    }

    return(
        //!!user converter para boolean..caso tenha algum dado ficará com true, senao fica como false
        <AuthContext.Provider value={{ signed: !!user ,user, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
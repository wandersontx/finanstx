import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import { 
  Container, Nome, Newlink, NewText, Logout, LogoutText
 } from './styles';
 import { AuthContext } from '../../contents/auth';

export default function Profile() {

  const {user, signOut} = useContext(AuthContext);
  const navigation = useNavigation();

 return (
   <Container>
     <Header />
       <Nome>{user && user.nome}</Nome>

       <Newlink onPress={() =>  navigation.navigate('New') }>
         <NewText>
           Registrar gastos
         </NewText>
       </Newlink>
       <Logout onPress={()=> signOut()}>
         <LogoutText>
           Sair
         </LogoutText>
       </Logout>
   </Container>

  );
}
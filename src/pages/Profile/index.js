import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, Nome, Newlink, NewText, Logout, LogoutText
 } from './styles';
 import { AuthContext } from '../../contents/auth';

export default function Profile() {

  const {user, signOut} = useContext(AuthContext);
  const navigation = useNavigation();

 return (
   <Container>
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
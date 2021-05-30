import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contents/auth';
import Header from '../../components/Header';
import { Background, Container, Nome, Saldo, Title } from './styles';


export default function Home() {

const { user } = useContext(AuthContext);
 return (
    <Background>
      <Header />
      <Container>
        <Nome>Wanderson</Nome>
        <Saldo>R$ 129,90</Saldo>
      </Container>

      <Title>Últimas movimentações</Title>
    </Background>
  );
}
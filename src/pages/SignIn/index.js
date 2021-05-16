import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contents/auth';

import { 
  Background, Container, Logo, AreaInput, Input,
  SubmitButton, SubmitText, Link, LinkText,
} from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { user } = useContext(AuthContext);

  const navigation = useNavigation();  


 return (
   <Background>
      <Container>
        <Logo source={require('../../assets/img/Logo.png')} />

        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={ (texto) => setEmail(texto) }
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={senha}
            onChangeText={ (texto) => setSenha(texto) }
          />
        </AreaInput>

        <SubmitButton onPress={() => console.log(user)}>
          <SubmitText>
            Acessar
          </SubmitText>
        </SubmitButton>

        <Link onPress={ () => navigation.navigate('SignUp') }>
          <LinkText>
            Criar uma conta
          </LinkText>
        </Link>
      </Container>
   </Background>
  );
}
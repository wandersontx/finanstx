import React, {useState} from 'react';

import { 
  Background, Container, Logo, AreaInput, Input,
  SubmitButton, SubmitText, Link, LinkText,
} from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


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

        <SubmitButton>
          <SubmitText>
            Acessar
          </SubmitText>
        </SubmitButton>

        <Link>
          <LinkText>
            Criar uma conta
          </LinkText>
        </Link>
      </Container>
   </Background>
  );
}
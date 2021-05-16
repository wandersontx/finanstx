import React, {useState} from 'react';

import { 
  Background, Container, Logo, AreaInput, Input,
  SubmitButton, SubmitText,
} from '../SignIn/styles';

export default function SignIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


 return (
   <Background>
      <Container>

        <AreaInput>
          <Input 
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={ (texto) => setNome(texto) }
          />
        </AreaInput>

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
            Cadastrar
          </SubmitText>
        </SubmitButton>
 
      </Container>
   </Background>
  );
}
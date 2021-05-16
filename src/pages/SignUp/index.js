import React, {useState, useContext} from 'react';

import { 
  Background, Container, Logo, AreaInput, Input,
  SubmitButton, SubmitText,
} from '../SignIn/styles';
import { AuthContext } from '../../contents/auth';

export default function SignIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  //pegando a função do contexto(provider)
  const { signup } = useContext(AuthContext);

  function handleSignUp(){
    signup(email, senha, nome);
  }


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

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>
            Cadastrar
          </SubmitText>
        </SubmitButton>
 
      </Container>
   </Background>
  );
}
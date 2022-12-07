import React, { useState } from 'react';
import { Button } from 'react-native';
import { ScreenOptions } from 'src';
import { Input } from 'src/common';
import { PageContainer } from 'src/styles/globalStyles';
import { Container, Title } from './styles';

const LoginPage = ({ navigation }: ScreenOptions) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageContainer>
      <Container>
        <Title>Login to proceed</Title>
        <Input value={email} onChange={(email) => setEmail(email)} placeholder="Email" />
        <Input
          value={password}
          onChange={(password) => setPassword(password)}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Login" onPress={() => navigation.push('Home')} />
      </Container>
    </PageContainer>
  );
};

export default LoginPage;
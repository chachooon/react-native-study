import React from 'react';
import styled from '@emotion/native';
import { isLoggedInVar } from '~/apollo';

export const LoginScreen = () => {
  const onLoginPress = () => {
    isLoggedInVar(true);
  };

  return (
    <Container>
      <Form>
        <Input placeholder="이메일을 입력해주세요" />
        <Input secureTextEntry placeholder="비밀번호를 입력해주세요" />
        <Login onPress={onLoginPress}>
          <LoginText>Login</LoginText>
        </Login>
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`;

const Form = styled.View`
  width: 100%;
`;

const Input = styled.TextInput`
  border: solid 1px rgba(0, 0, 0, 0.23);
  padding: 16px;
  margin-bottom: 16px;
`;

const Login = styled.TouchableOpacity`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.23);
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.Text``;

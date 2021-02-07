import React from 'react';
import {StatusBar} from 'react-native';
import styled from '@emotion/native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Logo source={require('~/assets/images/logo.jpg')} />
        <LogoText source={require('~/assets/images/logo_text.jpg')} />
      </Container>
    </>
  );
};

export default App;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const LogoText = styled.Image`
  width: 200px;
  height: 60px;
`;

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Image} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('~/assets/images/logo.jpg')}
        />
        <Image
          style={styles.logoText}
          source={require('~/assets/images/logo_text.jpg')}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    width: 200,
    height: 60,
  },
});

export default App;

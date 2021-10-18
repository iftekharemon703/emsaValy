import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
      return (
            <ImageBackground 
                  blurRadius={5}
                  style={styles.background}
                  source={require("../assets/background.jpg")}
            >
                  <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                        <Text style={styles.tagline}>Sell Your Digital Product</Text>
                  </View>
                  <View style={styles.btnContainer}>
                        <AppButton title="Login" />
                        <AppButton title="Register" color="secondary" />
                  </View>
            </ImageBackground>
      );
}

const styles = StyleSheet.create({
      background: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: 'center'
      },
      logo: {
            width: 100,
            height: 100,
      },
      logoContainer: {
            position: "absolute",
            top: 70,
            alignItems: 'center'
      },
      tagline: {
            fontSize: 24,
            fontWeight: '600',
            paddingVertical: 10
      },
      btnContainer: {
            width: '100%',
            padding: 20
      }
})

export default WelcomeScreen;
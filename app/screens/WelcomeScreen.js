import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
      return (
            <ImageBackground 
                  style={styles.background}
                  source={require("../assets/background.jpg")}
            >
                  <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                        <Text>Sell Your Digital Product</Text>
                  </View>
                  <View style={styles.loginBtn}></View>
                  <View style={styles.registerBtn}></View>
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
      loginBtn: {
            height: 70,
            width: "100%",
            backgroundColor: colors.primary
      },
      registerBtn: {
            height: 70,
            width: "100%",
            backgroundColor: colors.secondary
      }
})

export default WelcomeScreen;
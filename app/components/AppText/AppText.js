import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

function AppText({children}) {
      return (
            <Text style={styles.text}>{children}</Text>
      );
}

const styles = StyleSheet.create({
     text: {
           fontSize: Platform.OS === 'android' ? 18 : 20,
           fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Aveniar',
     } 
})

export default AppText;

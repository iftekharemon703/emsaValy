import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
     text: {
           fontSize: Platform.OS === 'android' ? '18' : '20',
           fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Aveniar',
     }
})

export default styles;
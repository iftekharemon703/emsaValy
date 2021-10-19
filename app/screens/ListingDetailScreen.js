import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';

function ListingDetailScreen(props) {
      return (
            <View>
                  <Image style={styles.image} source={require('../assets/jacket-red.jpg')} />
                  <View style={styles.detailContainer}>
                        <AppText style={styles.title}>Red jacket for sell</AppText>
                        <AppText style={styles.price}>$100</AppText>
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      image: {
            width: '100%',
            height: 300
      },
      detailContainer: {
            padding: 20,
      },
      title: {
            fontSize: 24,
            fontWeight: 'bold'
      },
      price: {
            color: colors.secondary,
            fontSize: 20,
            marginVertical: 10
      }
})

export default ListingDetailScreen;
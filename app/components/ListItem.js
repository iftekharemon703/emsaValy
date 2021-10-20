import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText/AppText';

function ListItem({title , subTitle, image, onPress, renderRightActions}) {
      return (
            <Swipeable renderRightActions={renderRightActions}>
                  <TouchableHighlight
                        onPress={ onPress }
                        underlayColor={colors.light}
                  >
                        <View style={styles.container}>
                              <Image style={styles.image} source={image} />
                              <View style={styles.detail}>
                                    <AppText style={styles.title}>{title}</AppText>
                                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                              </View>
                        </View>
                  </TouchableHighlight>
            </Swipeable>
      );
}

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
            padding: 10
      },
      image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            marginRight: 10
      },
      detail: {
            justifyContent: 'center',
      },
      title: {
            fontWeight: '700',
            marginBottom: 5,
      },
      subTitle: {
            color: colors.medium
      }
})

export default ListItem;
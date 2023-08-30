import {View, Text, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import {SCREEN_WIDTH, scaleHeight, scaleWidth} from '../helpers/Measurement';

interface PlaceToVisitCardPropsType {
  imageUrl: string;
  title: string;
  subTitle: string;
  idx: number;
}
const PlaceToVisitCard: FC<PlaceToVisitCardPropsType> = ({imageUrl, title, subTitle, idx}) => {
  return (
    <View
      style={[
        styles.card,
        {
          marginRight: idx % 2 == 0 ? scaleWidth(8) : 0,
          marginLeft: idx % 2 == 0 ? scaleWidth(32) : 0,
        },
      ]}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.textW}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subW}>
          <Image source={require('../assets/locationIcon.png')} style={styles.subI} />
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(PlaceToVisitCard);

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginBottom: scaleHeight(10),
  },
  image: {
    width: (SCREEN_WIDTH - 96) / 2,
    height: scaleHeight(120),
    borderRadius: 15,
  },
  textW: {
    marginVertical: scaleHeight(12),
    marginHorizontal: scaleWidth(6),
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
  },
  subW: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(4),
  },
  subI: {
    width: 10,
    height: 10,
    marginRight: scaleWidth(6),
  },
  subTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.5)',
  },
});

import {View, Text, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {scaleHeight, scaleWidth} from '../helpers/Measurement';

interface InfoCardPropsType {
  icon: ImageSourcePropType;
  text: string;
}
const InfoCard: FC<InfoCardPropsType> = ({icon, text}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={icon} style={styles.wrapperI} />
      <Text style={styles.wrapperT}>{text}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperI: {
    width: scaleHeight(40),
    height: scaleHeight(40),
  },
  wrapperT: {
    fontSize: 12,
    color: '#000',
    flex: 1,
    marginLeft: scaleWidth(10),
  },
});

import React, {FC} from 'react';
import {View, Text, StyleSheet, TextStyle} from 'react-native';

interface TitleProspType {
  title: string;
  style?: TextStyle;
}
const Title: FC<TitleProspType> = ({title, style}) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#4681A3',
    fontWeight: 'bold',
  },
});

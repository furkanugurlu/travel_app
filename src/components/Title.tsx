import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = (props: any) => {
  return <Text style={styles.title}>{props.text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
});

import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/RootNavigation';
import {scaleHeight} from '../../helpers/Measurement';

interface GalleryPropsType extends NativeStackScreenProps<HomeStackParamList, 'Gallery'> {}

const Gallery: FC<GalleryPropsType> = ({navigation, route}) => {
  const {images} = route?.params;
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginBottom: scaleHeight(20)}}
          data={images}
          keyExtractor={(_, i) => `img-${i}`}
          renderItem={({item}: any) => <Image source={{uri: item}} style={styles.image} />}
        />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIconW}>
          <Image source={require('../../assets/back.png')} style={styles.backI} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(Gallery);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaleHeight(32),
  },
  image: {
    width: '100%',
    height: scaleHeight(400),
    borderRadius: 20,
    marginTop: scaleHeight(14),
  },
  backIconW: {
    position: 'absolute',
    margin: scaleHeight(20),
  },
  backI: {
    width: 40,
    height: 40,
  },
});

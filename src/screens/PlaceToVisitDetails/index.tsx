import {View, Text, StyleSheet, ImageBackground, Image, Pressable} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/RootNavigation';
import {SCREEN_HEIGHT, scaleHeight, scaleWidth} from '../../helpers/Measurement';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';

interface PlaceToVisitDetailsPropsType extends NativeStackScreenProps<HomeStackParamList, 'Details'> {}

const PlaceToVisitDetails: FC<PlaceToVisitDetailsPropsType> = ({navigation, route}) => {
  const {item} = route?.params;
  const mainImage = item.images.length ? item?.images[0] : null;

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{borderRadius: 20}} source={{uri: mainImage}} style={styles.mainImage}>
        <View style={styles.headerW}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/back.png')} style={styles.icon} />
          </Pressable>
          <Pressable>
            <Image source={require('../../assets/share.png')} style={styles.icon} />
          </Pressable>
        </View>
        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {Array.isArray(item?.images)
            ? item?.images?.slice(0, 3).map((image: any) => {
                return <Image key={image} source={{uri: image}} style={styles.footerI} />;
              })
            : null}
        </Pressable>
      </ImageBackground>

      <View style={styles.contextW}>
        <View style={styles.contextHeaderW}>
          <Title style={styles.title} title={item.name} />
          <Text style={styles.city}>{item?.city}</Text>
        </View>
        <Title style={styles.price} title={item?.entry_price} />
      </View>

      <View style={styles.infoCardW}>
        <InfoCard icon={require('../../assets/location_circle.png')} text={item?.address} />
        <InfoCard icon={require('../../assets/schedule.png')} text={`OPEN \n${item?.opening_time} - ${item?.closing_time}`} />
      </View>
    </View>
  );
};

export default React.memo(PlaceToVisitDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: 'white',
  },
  mainImage: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: scaleHeight(20),
    alignItems: 'center',
  },
  headerW: {
    width: '100%',
    paddingHorizontal: scaleWidth(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 42,
    height: 42,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256, 256,256, 0.35)',
    marginHorizontal: scaleWidth(16),
  },
  footerI: {
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 10,
    marginHorizontal: scaleWidth(8),
  },

  contextW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleHeight(20),
  },
  contextHeaderW: {},
  title: {
    color: '#000',
  },
  city: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: scaleHeight(10),
  },
  price: {
    color: '#000',
  },
  infoCardW: {
    marginTop: scaleHeight(30),
    gap: 10,
  },
});

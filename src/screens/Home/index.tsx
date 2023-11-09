import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Title from '../../components/Title';
import {scaleHeight} from '../../helpers/Measurement';
import Categories from '../../components/Categories';
import PlaceToVisitCard from '../../components/PlaceToVisitCard';

import placetovisitData from '../../data/placetovisit.json';
import categoriesData from '../../data/categories.json';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/RootNavigation';

interface HomePropsType extends NativeStackScreenProps<HomeStackParamList, 'Home'> {}

const Home: FC<HomePropsType> = ({navigation}) => {
  const [selectedC, setSelectedC] = useState<string>('Tümü');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(placetovisitData);
  }, []);

  useEffect(() => {
    if (selectedC == 'Tümü') {
      setData(placetovisitData);
    } else {
      const filteredData = placetovisitData?.filter(item => item.categories.includes(selectedC));

      setData(filteredData);
    }
  }, [selectedC]);

  const goToDetailPage = (item: any) => {
    navigation.navigate('Details', {item});
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={<Text style={styles.emptyT}>Bu kategoride herhangi bir mekan kayıtlı değil</Text>}
        keyExtractor={(_, index) => `item-${index}`}
        numColumns={2}
        style={{flexGrow: 1}}
        ListHeaderComponent={
          <>
            <View
              style={{
                margin: scaleHeight(32),
              }}>
              <Title title="Nereye" style={{fontWeight: 'normal'}} />
              <Title title="gitmek istersin?" />
              <Title title="Turistik yerleri keşfedin" style={styles.subTitle} />
            </View>
            <Categories selected={selectedC} setSelected={setSelectedC} categories={['Tümü', ...categoriesData]} />
          </>
        }
        data={data}
        renderItem={({item, index}) => (
          <PlaceToVisitCard onPress={() => goToDetailPage(item)} idx={index} key={item.id} imageUrl={item.images.length ? item.images[0] : null} title={item.name} subTitle={item.city} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subTitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: scaleHeight(40),
  },
  emptyT: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
    marginTop: scaleHeight(10),
  },
});

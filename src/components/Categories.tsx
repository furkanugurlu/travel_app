import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scaleHeight, scaleWidth} from '../helpers/Measurement';

interface CategoriesPropsType {
  categories: string[];
  selected: string;
  setSelected: (i: string) => void;
}

const Categories: FC<CategoriesPropsType> = ({categories, setSelected, selected}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => `item-${index}`}
      data={categories}
      renderItem={({item, index}) => {
        const isSelected = selected == item;
        return (
          <TouchableOpacity onPress={() => setSelected(item)} style={[styles.itemWrapper, isSelected ? styles.selectedItemWrapper : {}, index == 0 ? {marginLeft: scaleWidth(32)} : {}]}>
            <Text style={[styles.item, isSelected ? styles.selected : {}]}>{item}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    marginBottom: scaleHeight(14),
    marginRight: scaleHeight(17),
  },
  selectedItemWrapper: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
  item: {
    fontSize: 12,
    color: '#000',
    opacity: 0.5,
    fontWeight: 'bold',
    paddingVertical: scaleHeight(3),
  },
  selected: {
    opacity: 1,
  },
});

export default React.memo(Categories);

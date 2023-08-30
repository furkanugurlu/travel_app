import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const SCALE_FACTOR_HORIZONTAL = SCREEN_WIDTH / 390;
const SCALE_FACTOR_VERTICAL = SCREEN_HEIGHT / 844;

export const scaleWidth = (width: number) => {
  return width * SCALE_FACTOR_HORIZONTAL;
};

export const scaleHeight = (height: number) => {
  return height * SCALE_FACTOR_VERTICAL;
};

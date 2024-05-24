import {Text, Pressable} from 'react-native';
import React from 'react';
import {colors, globalStyles} from '../../config/theme/app_themes';

type Props = {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blacktext?: boolean;
  onPress: () => void;
};
export const CalculatorBotton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blacktext = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80, //180 = 80(tamaño del btn) + 10(margin) * 2(margin de los dos lados)
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText, //spreed de styles
          color: blacktext ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

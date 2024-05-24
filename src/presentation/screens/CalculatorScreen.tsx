import {Text, View} from 'react-native';
import React from 'react';
import {colors, globalStyles} from '../../config/theme/app_themes';
import {CalculatorBotton} from '../components/CalculatorBotton';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton
          onPress={() => console.log('C')}
          label="C"
          color={colors.lightGray}
          blacktext
        />
        <CalculatorBotton
          onPress={() => console.log('+/-')}
          label="+/-"
          color={colors.lightGray}
          blacktext
        />
        <CalculatorBotton
          onPress={() => console.log('DEL')}
          label="DEL"
          color={colors.lightGray}
          blacktext
        />
        <CalculatorBotton
          onPress={() => console.log('÷')}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => console.log('7')} label="7" />
        <CalculatorBotton onPress={() => console.log('8')} label="8" />
        <CalculatorBotton onPress={() => console.log('9')} label="9" />
        <CalculatorBotton
          onPress={() => console.log('×')}
          label="×"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => console.log('4')} label="4" />
        <CalculatorBotton onPress={() => console.log('5')} label="5" />
        <CalculatorBotton onPress={() => console.log('6')} label="6" />
        <CalculatorBotton
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => console.log('1')} label="1" />
        <CalculatorBotton onPress={() => console.log('2')} label="2" />
        <CalculatorBotton onPress={() => console.log('3')} label="3" />
        <CalculatorBotton
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton
          onPress={() => console.log('0')}
          label="0"
          doubleSize
        />
        <CalculatorBotton onPress={() => console.log('.')} label="." />
        <CalculatorBotton
          onPress={() => console.log('=')}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

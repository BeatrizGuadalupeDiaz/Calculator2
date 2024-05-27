import {Text, View} from 'react-native';
import React from 'react';
import {colors, globalStyles} from '../../config/theme/app_themes';
import {CalculatorBotton} from '../components/CalculatorBotton';
import {useCalculator} from '../hooks/useCalculator';
export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    formula,
    bildNumber,
    clean,
    deleteOperation,
    toggleSing,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {number}
        </Text>
        <Text style={globalStyles.subResult}>
          {previousNumber === '0' ? '' : previousNumber}
        </Text>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton
          onPress={clean}
          label="C"
          color={colors.lightGray}
          blacktext
        />
        <CalculatorBotton
          onPress={toggleSing}
          label="+/-"
          color={colors.lightGray}
          blacktext
        />
        <CalculatorBotton
          onPress={deleteOperation}
          label="DEL"
          color={colors.lightGray}
          blacktext
        />
        <CalculatorBotton
          onPress={divideOperation}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => bildNumber('7')} label="7" />
        <CalculatorBotton onPress={() => bildNumber('8')} label="8" />
        <CalculatorBotton onPress={() => bildNumber('9')} label="9" />
        <CalculatorBotton
          onPress={multiplyOperation}
          label="×"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => bildNumber('4')} label="4" />
        <CalculatorBotton onPress={() => bildNumber('5')} label="5" />
        <CalculatorBotton onPress={() => bildNumber('6')} label="6" />
        <CalculatorBotton
          onPress={substractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => bildNumber('1')} label="1" />
        <CalculatorBotton onPress={() => bildNumber('2')} label="2" />
        <CalculatorBotton onPress={() => bildNumber('3')} label="3" />
        <CalculatorBotton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton
          onPress={() => bildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorBotton onPress={() => bildNumber('.')} label="." />
        <CalculatorBotton
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

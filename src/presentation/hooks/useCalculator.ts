import React from 'react';

enum Operator {
  add,
  substract,
  multiply,
  divide,
}
export const useCalculator = () => {
  const [number, setNumber] = React.useState('0');
  const [previousNumber, setPreviousNumber] = React.useState('0');

  const lastOperation = React.useRef<Operator>();
  const clean = () => {
    setNumber('0');
  };
  const deleteOperation = () => {
    let currentSing = '';
    let temporaryNumber = number;

    if (number.includes('-')) {
      currentSing = '-';
      temporaryNumber = number.substring(1);
    }
    if (temporaryNumber.length > 1) {
      return setNumber(currentSing + temporaryNumber.slice(0, -1));
    }
    setNumber('0');
  };
  const toggleSing = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };
  const bildNumber = (numberString: string) => {
    if (numberString === '.' && number.includes('.')) {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      //curso option
      /* if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      } */
      if (number === '0' && numberString.includes('0')) {
        return;
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
    }
    return setNumber(number + numberString);
  };
  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };
  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };
  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };
  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        throw new Error('Operation not found');
    }
    setPreviousNumber('0');
  };
  return {
    //properties
    number,
    previousNumber,
    //methods
    bildNumber,
    clean,
    deleteOperation,
    toggleSing,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    calculateResult,
  };
};

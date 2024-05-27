import React from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = React.useState('');

  const [number, setNumber] = React.useState('0');
  const [previousNumber, setPreviousNumber] = React.useState('0');

  const lastOperation = React.useRef<Operator>();

  React.useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  React.useEffect(() => {
    const subResult = calculateSubResult();
    setPreviousNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
    lastOperation.current = undefined;
    setFormula('');
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
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };
  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
    setPreviousNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue); //NaN

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  };
  return {
    //properties
    number,
    previousNumber,
    formula,
    //methods
    bildNumber,
    toggleSing,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  };
};

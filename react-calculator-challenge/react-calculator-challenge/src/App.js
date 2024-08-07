import Input from "./components/Input";
import Button from './components/Button'
import Title from './components/Title';

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
//Estados
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

//Funções
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber)); 
      setCurrentNumber('0');
      setOperation('+');

    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleRemNumbers = () => {
    
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber)); 
      setCurrentNumber('0');
      setOperation('-');

    } else {
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setOperation('');
    }
  }

  const handleMultiplyNumbers = () => {
    
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber)); 
      setCurrentNumber('0');
      setOperation('*');

    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  }

  const handleDivideNumbers = () => {
    
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber)); 
      setCurrentNumber('0');
      setOperation('/');

    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation('');
    }
  }

  const handleNumbersPercentage = () => {
    
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber)); 
      setCurrentNumber('0');
      setOperation('%');

    } else {
      const percent = `${(Number(firstNumber) / 100) * Number(currentNumber)}`;
      setCurrentNumber(String(percent));
      setOperation('');
    }
  }

  const handleNumbersSquareRoot = () => {
    // Calcula a raiz quadrada do currentNumber
    const num = Number(currentNumber);
    
    // Verifica se o número é não-negativo
    if (num < 0) {
      setCurrentNumber('Error');
    } else {
      const sqrt = Math.sqrt(num);
      setCurrentNumber(String(sqrt)); 
    }
    
    setOperation('');
  };

  //Comportamentos ao utilizar o '='
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRemNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        case '%':
          handleNumbersPercentage();
          break;
        case '√':
          handleNumbersSquareRoot();
          break;
        default:
          break;
      }
    
    } 
  }

  return (
    <Container>
      <Content>
        <Title />
        < Input value={currentNumber} />
        <Row>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="√" onClick={handleNumbersSquareRoot}/>
          <Button label="π" onClick={() => handleAddNumber('3.14159265359')}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="%" onClick={handleNumbersPercentage}/>
          <Button label="/" onClick={handleDivideNumbers}/>
          <Button label="*" onClick={handleMultiplyNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleRemNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;

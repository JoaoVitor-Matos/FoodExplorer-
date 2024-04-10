import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { CustomContainer } from "./styles";

export function NumberPicker({ number, setNumber }) {
  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <CustomContainer>
      <button onClick={decrementNumber}><FiMinus /></button>
      <span>{number < 10 ? `0${number}` : number}</span>
      <button onClick={incrementNumber}><FiPlus /></button>
    </CustomContainer>
  );
}

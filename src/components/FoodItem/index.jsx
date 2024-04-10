import React from "react";
import { FiPlus, FiX } from "react-icons/fi";
import styled from "styled-components";

const StyledContainer = styled.div`
  /* Adicione estilos aqui conforme necessário */
`;

export function FoodItem({ isNew, value, onClick, ...rest }) {
  return (
    <StyledContainer isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </StyledContainer>
  );
}

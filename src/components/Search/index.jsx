import React from "react";
import { FiSearch } from "react-icons/fi";
import { CustomContainer } from "./styles";
import { Input } from "../../components/Input";

export function Search({ setSearch, isDisabled }) {
  return (
    <CustomContainer>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
        disabled={isDisabled}
        onChange={(e) => setSearch(e.target.value)}
      />
    </CustomContainer>
  );
}

import React, { useState } from "react";
import { Input, InputWrapper, SearchButton } from "./SearchInput.style";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const openSearchPage = () => {
    window.open(`/ara/?q=${value}`, "_self");
  };
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Yemek tarifi ara"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            openSearchPage();
          }
        }}
      />
      <SearchButton type="button" onClick={() => openSearchPage()}>
        <FaSearch size={30} />
      </SearchButton>
    </InputWrapper>
  );
};

export default SearchInput;

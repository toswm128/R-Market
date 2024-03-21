import React, { useState } from "react";
import searchIcon from "assets/icon/search-icon.svg";
import { SearchFormItem } from "./StyledSearchForm";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <SearchFormItem.Container onSubmit={handleSearch}>
      <div className="input_wrapper">
        <SearchFormItem.Input
          type="text"
          value={searchText}
          onChange={handleChangeSearchText}
        />
      </div>
      <div className="button_wrapper">
        <SearchFormItem.Button>
          <SearchFormItem.Icon src={searchIcon} alt="" />
        </SearchFormItem.Button>
      </div>
    </SearchFormItem.Container>
  );
};

export default SearchForm;

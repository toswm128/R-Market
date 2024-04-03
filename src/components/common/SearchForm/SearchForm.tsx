import React from "react";
import searchIcon from "assets/icon/search_icon.svg";
import { SearchFormItem } from "./StyledSearchForm";
import useHeaderSearch from "hooks/useHeaderSearch";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [searchText, setSearchText] = useHeaderSearch("");
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchText && navigate("/search/" + searchText);
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

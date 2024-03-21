import React from "react";
import SearchForm from "../SearchForm";
import { HeaderItem } from "./StyledHeader";
import cartIcon from "assets/icon/cart_icon.svg";
import listCheck from "assets/icon/list_check_icon.svg";

const Header = () => {
  return (
    <HeaderItem.Container>
      <div className="title">
        <div className="item_wrapper">RMarket</div>
      </div>
      <div className="search_form">
        <SearchForm />
      </div>
      <div className="nav_wrapper">
        <div className="item_wrapper">
          <HeaderItem.Icon src={cartIcon} alt="" />
          장바구니
        </div>
        <div className="item_wrapper">
          <HeaderItem.Icon src={listCheck} alt="" />
          구매목록
        </div>
      </div>
    </HeaderItem.Container>
  );
};

export default Header;

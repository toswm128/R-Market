import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderContainer>
      <div>헤더</div>
      <div>검색창</div>
      <div>장바구니</div>
      <div>구매목록</div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Header;

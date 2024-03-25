import Header from "components/common/Header/Header";
import MainProductList from "components/Main/MainProductList";
import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <MainPageItem.Container>
      <Header />

      <MainProductList />
    </MainPageItem.Container>
  );
};

const MainPageItem = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
};

export default MainPage;

import styled from "@emotion/styled";

const GoodsCardItem = {
  Container: styled.div`
    padding: 8px;
    width: 300px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    }

    img {
      width: 100%;
      min-height: 200px;
      max-height: 200px;
      object-fit: cover;
    }
  `,
  Title: styled.h1`
    margin: 0%;
    font-size: 1.25rem;
    font-weight: normal;
  `,
  Description: styled.span`
    font-size: 0.8rem;
    color: rgb(100, 100, 100);
  `,
  PriceWrap: styled.div`
    display: flex;
    flex-direction: column;
    .discount_wrap {
      display: flex;
      gap: 4px;
    }
    .discount_Percentage {
      font-size: 0.65rem;
    }
    del {
      font-size: 0.8rem;
      color: rgb(100, 100, 100);
    }
    .price {
      margin-top: 8px;
      font-weight: bold;
      font-size: 1.2rem;
      color: #d63f0d;
    }
  `,
};

export default GoodsCardItem;

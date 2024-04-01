import styled from "@emotion/styled";

const ProductDetailItem = {
  Container: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50vw 50vw;
  `,
  Main: styled.main`
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  ProductInfo: styled.section`
    .brand {
      font-size: 0.9rem;
    }
    .title {
      font-size: 1.8rem;
      margin: 0;
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #ccc;
    }

    .discount_wrap {
      display: flex;
      gap: 0.5rem;
      del {
        color: rgb(100, 100, 100);
      }
    }
    .price {
      font-weight: bold;
      font-size: 1.6rem;
      color: #d63f0d;

      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #ccc;
    }
  `,
  ProductButtonWrap: styled.div`
    display: flex;
    height: 42px;
    gap: 3px;
    button {
      flex: 1;
      cursor: pointer;
      font-size: 1rem;
    }
    .buy {
      color: white;
      border: none;
      background-color: #425731;
      &:hover {
        background-color: #3b4e2c;
      }
    }
    .cart {
      background-color: white;
      border: 3px solid #425731;
      color: #425731;
      &:hover {
        border: 3px solid #3b4e2c;
        color: #3b4e2c;
      }
    }
  `,
};

export default ProductDetailItem;

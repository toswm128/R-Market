import styled from "@emotion/styled";

export const HeaderItem = {
  Container: styled.header`
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: space-around;
    gap: 16px;
    align-items: center;
    box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 8px 0;

    .item_wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      a {
        color: black;
        text-decoration: none;
      }
      gap: 2px;
    }

    .search_form {
      flex: 4;
    }

    .title {
      flex: 3;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav_wrapper {
      display: flex;
      justify-content: center;
      gap: 16px;
      font-size: 0.8rem;
      align-items: center;
      flex: 3;
    }
  `,
  Icon: styled.img`
    width: 29px;
    height: 29px;
  `,
};

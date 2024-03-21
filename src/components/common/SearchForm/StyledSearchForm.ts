import styled from "@emotion/styled";

export const SearchFormItem = {
  Container: styled.form`
    width: 100%;
    display: flex;
    border: 2px solid #2a5705;
    padding: 4px;
    border-radius: 10px;
    box-shadow: 5px 4px 10px 0px rgba(42, 87, 5, 0.2);
    transition: all 0.2s ease-in-out;

    &:focus-within {
      border-color: #6a9645;
      box-shadow: 5px 4px 10px 0px rgba(42, 87, 5, 0.4);
    }

    .input_wrapper {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  Input: styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.2rem;
  `,
  Button: styled.button`
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  `,
  Icon: styled.img`
    width: 24px;
    height: 24px;
  `,
};

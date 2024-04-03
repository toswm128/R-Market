import styled from "@emotion/styled";

const SearchProductListItem = {
  Container: styled.div`
    max-width: 1260px;
    min-width: 1260px;
    margin: 0 auto;
  `,

  ListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    .search_text {
      padding: 0 8px;
    }
  `,
  Error: styled.div`
    width: 100%;
    text-align: center;

    margin: 62px 0;
  `,
};

export default SearchProductListItem;

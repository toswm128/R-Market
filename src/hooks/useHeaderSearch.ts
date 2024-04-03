import { useState } from "react";

const useHeaderSearch = (initialState?: string) => {
  return useState(initialState);
};

export default useHeaderSearch;

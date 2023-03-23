import React from "react";
import * as S from "./styles/FilterStyles";

function Filter(props) {
  const filterTemplate = props.data.map(function (item) {
    return (
      <S.FilerItem key={item.id}>
        {item.text}
      </S.FilerItem>
    );
  });

  return <React.Fragment>{filterTemplate}</React.Fragment>;
}

export default Filter;

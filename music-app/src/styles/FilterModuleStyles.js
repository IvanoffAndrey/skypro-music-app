import styled from "styled-components";

const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  position: relative;
`;

const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

const FilterButton = styled.div`
  color: ${(props) => (props.active ? "#b672ff" : props.textColor)};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: ${(props) => ("1px solid" + (props.active ? "#b672ff" : props.borderColor))};
  border-radius: 60px;
  padding: 6px 20px;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FilterMenu = styled.div`
  position: absolute;
  top: 49px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px;
  gap: 10px;
  background: #313131;
  border-radius: 12px;
`;

const FilterMenuAuthors = styled(FilterMenu)`
  left: 92px;
`;

const FilterMenuYears = styled(FilterMenu)`
  left: 246px;
`;

const FilterMenuGenres = styled(FilterMenu)`
  left: 400px;
`;

export {
  CenterblockFilter,
  FilterTitle,
  FilterButton,
  FilterMenuAuthors,
  FilterMenuYears,
  FilterMenuGenres,
};

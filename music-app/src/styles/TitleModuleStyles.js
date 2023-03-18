import styled from "styled-components";

const ContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const TitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;

const Col01 = styled(TitleCol)`
  width: 447px;
`;

const Col02 = styled(TitleCol)`
  width: 321px;
`;

const Col03 = styled(TitleCol)`
  width: 245px;
`;

const Col04 = styled(TitleCol)`
  width: 60px;
  text-align: end;
`;

const TitleImg = styled.img`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export { ContentTitle, TitleCol, Col01, Col02, Col03, Col04, TitleImg };

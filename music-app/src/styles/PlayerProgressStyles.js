import styled from "styled-components";

const PlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: ${((props) => props.backgroundColor)};
  :hover {
    height: 8px;
  }
`;

export { PlayerProgress };

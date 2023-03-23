import iconWatch from "./assets/img/icon/watch.svg";
import * as S from "./styles/TitleModuleStyles";

function TitleModule() {
  return (
    <S.ContentTitle>
      <S.Col01>Трек</S.Col01>
      <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
      <S.Col03>АЛЬБОМ</S.Col03>
      <S.Col04>
        <S.TitleImg src={iconWatch} alt="watch" />
      </S.Col04>
    </S.ContentTitle>
  );
}

export default TitleModule;

import * as S from "../styles/FilterModuleStyles";
import Filter from "./filter";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const { useState } = React;

const authors = [
  {
    id: 1,
    text: "Michael Jackson",
  },
  {
    id: 2,
    text: "Frank Sinatra",
  },
  {
    id: 3,
    text: "Calvin Harris",
  },
  {
    id: 4,
    text: "Zhu",
  },
  {
    id: 5,
    text: "Arctic Monkeys",
  },
];

const years = [
  {
    text: "2007",
  },
  {
    text: "1960",
  },
  {
    text: "2015",
  },
  {
    text: "2005",
  },
  {
    text: "2010",
  },
];

const genres = [
  {
    text: "Поп",
  },
  {
    text: "Рок",
  },
  {
    text: "Джаз",
  },
];

function FilterModule() {
  const [visibleFilterAuthor, setVisibleFilterAuthor] = useState(false);
  const [filterAuthor, setFilterAuthor] = useState(false);
  const toggleVisibilityAuthor = () => {
    setVisibleFilterAuthor(!visibleFilterAuthor);
    setVisibleFilterYear(false);
    setVisibleFilterGenre(false);

    setFilterAuthor(true);
    setFilterYear(false);
    setFilterGenre(false);
  };
  const [visibleFilterYear, setVisibleFilterYear] = useState(false);
  const [filterYear, setFilterYear] = useState(false);
  const toggleVisibilityYear = () => {
    setVisibleFilterYear(!visibleFilterYear);
    setVisibleFilterAuthor(false);
    setVisibleFilterGenre(false);

    setFilterYear(true);
    setFilterAuthor(false);
    setFilterGenre(false);
  };
  const [visibleFilterGenre, setVisibleFilterGenre] = useState(false);
  const [filterGenre, setFilterGenre] = useState(false);
  const toggleVisibilityGenre = () => {
    setVisibleFilterGenre(!visibleFilterGenre);
    setVisibleFilterAuthor(false);
    setVisibleFilterYear(false);

    setFilterGenre(true);
    setFilterAuthor(false);
    setFilterYear(false);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <S.CenterblockFilter>
      <S.FilterTitle style={{ color: theme.color }}>Искать по:</S.FilterTitle>
      <S.FilterButton
        active={filterAuthor}
        onClick={toggleVisibilityAuthor}
        textColor={theme.color}
        borderColor={theme.filterButtonBorder}
      >
        исполнителю
      </S.FilterButton>
      <S.FilterButton
        active={filterYear}
        onClick={toggleVisibilityYear}
        textColor={theme.color}
        borderColor={theme.filterButtonBorder}
      >
        году выпуска
      </S.FilterButton>
      <S.FilterButton
        active={filterGenre}
        onClick={toggleVisibilityGenre}
        textColor={theme.color}
        borderColor={theme.filterButtonBorder}
      >
        жанру
      </S.FilterButton>

      {visibleFilterAuthor && (
        <S.FilterMenuAuthors>
          <Filter data={authors} />
        </S.FilterMenuAuthors>
      )}
      {visibleFilterYear && (
        <S.FilterMenuYears>
          <Filter data={years} />
        </S.FilterMenuYears>
      )}
      {visibleFilterGenre && (
        <S.FilterMenuGenres>
          <Filter data={genres} />
        </S.FilterMenuGenres>
      )}
    </S.CenterblockFilter>
  );
}

export default FilterModule;

import SearchModule from "./SearchModule";
import FilterModule from "./FilterModule";
import TitleModule from "./TitleModule";
import ContentModule from "./ContentModule";

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <SearchModule />
      <FilterModule />
      <TitleModule />
      <ContentModule />
    </div>
  );
}

export default CenterBlock;

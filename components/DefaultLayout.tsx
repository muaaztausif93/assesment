import SearchBar from "./SearchBar";
import TopTenVisitedProfiles from "./TopTenVisitedProfiles";

const DefaultLayout = (props: any) => {
    return (
      <div className="layout">
        <SearchBar />
        {props.children}
        <TopTenVisitedProfiles />
      </div>
    );
  }

  export default DefaultLayout;
import { Button, Col, Row, Spin } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "../../components/CharacterCard";
import DefaultLayout from "../../components/DefaultLayout";
import HeadTitle from "../../components/HeadTitle";
import CustomPagination from "../../components/Pagination";
import { API_BASE_URL } from "../../constants";
import { charactersAction, selectCharactersState } from "../../store/store";

const SearchResults = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage]: any = useState(1);
  const [pageInfo, setPageInfo]: any = useState({});
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const charactersState = useSelector(selectCharactersState);
  const { searchValue } = charactersState;

  const router = useRouter();

  const { query }: any = router;

  const dispatch = useDispatch();

  const getFilteredCharacters = async (page = 1) => {
    try {
      setLoading(true);
      const { data }: any = await axios.get(
        `${API_BASE_URL}/character?page=${page}&name=${query?.q || ""}`
      );
      const { results, info } = data;
      setPageInfo(info);
      setFilteredCharacters(results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setFilteredCharacters([]);
    }
  };

  useEffect(() => {
    getFilteredCharacters();
  }, [searchValue]);

  useEffect(() => {
    return () => {
      dispatch(charactersAction.setSearchValue("" as any));
    };
  }, []);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    getFilteredCharacters(page);
  };

  const handleCardNameClick = (character: any) => {
    dispatch(charactersAction.addProfileToVisited(character));
    dispatch(charactersAction.setProfileForDetail(character));
    router.push(`/profile/${character.id}`);
  };

  return (
    <DefaultLayout>
      <HeadTitle
        title={searchValue ? `${searchValue} related characters` : "characters"}
      />
      <div style={{ padding: "2rem 0px" }}>
        <main>
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <Link
                href={{
                  pathname: "/",
                }}
              >
                <Button>Back To Homepage</Button>
              </Link>
            </Col>
          </Row>
          {loading ? (
            <Spin />
          ) : (
            <>
              {filteredCharacters.length ? (
                <>
                  <Row gutter={[20, 20]}>
                    {filteredCharacters.map((character: any) => {
                      return (
                        <Col key={character.id} className="gutter-row" span={6}>
                          <CharacterCard character={character} onClickCallBack={handleCardNameClick}/>
                        </Col>
                      );
                    })}
                  </Row>
                  <CustomPagination
                    count={pageInfo.count}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                  />
                </>
              ) : (
                <Row>
                  <Col>No record found</Col>
                </Row>
              )}
            </>
          )}
        </main>
      </div>
    </DefaultLayout>
  );
};

export default SearchResults;

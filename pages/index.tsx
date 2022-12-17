import { Col, Pagination, Row } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import DefaultLayout from "../components/DefaultLayout";
import HeadTitle from "../components/HeadTitle";
import CustomPagination from "../components/Pagination";
import { API_BASE_URL } from "../constants";
import { charactersAction, selectCharactersState } from "../store/store";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [currentPage, setCurrentPage]: any = useState(1);
  const [pageInfo, setPageInfo]: any = useState({});
  const router = useRouter();
  const charactersState = useSelector(selectCharactersState);

  const dispatch = useDispatch();

  const getAllCharacters = async (page = 1) => {
    const { data }: any = await axios.get(
      `${API_BASE_URL}/character?page=${page}`
    );
    const { info, results } = data;
    setPageInfo(info);
    dispatch(charactersAction.setCharacters(results));
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  const handleCardNameClick = (character: any) => {
    dispatch(charactersAction.addProfileToVisited(character));
    dispatch(charactersAction.setProfileForDetail(character));
    router.push(`/profile/${character.id}`);
  };

  const { characters } = charactersState;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    getAllCharacters(page);
  };

  return (
    <DefaultLayout>
       <HeadTitle
        title="characters app"
      />
      <div className={styles.container}>
        <div>
          <Row gutter={[20, 20]}>
            {characters.map((character: any) => {
              return (
                <Col key={character.id} className="gutter-row" span={6}>
                  <CharacterCard
                    character={character}
                    onClickCallBack={handleCardNameClick}
                  />
                </Col>
              );
            })}
          </Row>
          <CustomPagination
            count={pageInfo.count}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

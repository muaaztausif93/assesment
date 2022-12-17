import { Col, Input, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { charactersAction } from "../store/store";

const { Search } = Input;

const SearchBar = () => {
  const [searchValue, setSearchValue] =  useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const { query }: any = router;

  const handleSearch = (value: string) => {
    setSearchValue(value);
    router.push(`/search?q=${value}`);
  };

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    dispatch(charactersAction.setSearchValue(query?.q));
    setSearchValue(query?.q);
  }, [query?.q]);

  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "55px",
        background: "slategray",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      <Col>
        <Search
          placeholder="input search text"
          allowClear={true}
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          onChange={handleChange}
          value={searchValue}
        />
      </Col>
    </Row>
  );
};

export default SearchBar;

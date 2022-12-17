import { Button, Card, Col, Row, Space, Typography } from "antd";
import ProfileStatus from "./ProfileStatus";
import { selectCharactersState } from "../store/store";
import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";

const { Meta } = Card;

const TopTenVisitedProfiles = () => {
  const charactersState = useSelector(selectCharactersState);

  const { lastTenVisitedProfiles } = charactersState;

  if(!lastTenVisitedProfiles.length) return <></>;

    return  <Row  gutter={[20, 20]} style={{ marginTop: '20px' }}>
    <Col span={24}>
        <Typography>Top 10 Visited Profiles</Typography>    
    </Col>
    {
      lastTenVisitedProfiles.map((character: any) => {
        return (
          <Col key ={character.id} className="gutter-row" span={6}>
            <CharacterCard character={character} />
          </Col>
          )
      })
    }
     </Row>
};
export default TopTenVisitedProfiles;
import { Button, Card, Col, Row, Space, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import DefaultLayout from "../../components/DefaultLayout";
import HeadTitle from "../../components/HeadTitle";
import ProfileStatus from "../../components/ProfileStatus";
import { selectCharactersState } from "../../store/store";

const { Meta } = Card;

const CharacterProfile = () => {
  const charactersState = useSelector(selectCharactersState);
  const { profileForDetail } = charactersState;

  const { id, name, image, status, species, gender, location } =
    profileForDetail;

  return (
    <DefaultLayout>
      <HeadTitle title={`${name}`} />
      <Row
        style={{
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
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
      <Row style={{ justifyContent: "center" }}>
        <Col span={6}>
          <Card key={id} cover={<img alt="example" src={image} />}>
            <Meta
              title={
                <>
                  <Space size="small">
                    <Typography>{name}</Typography>
                    <ProfileStatus status={status} />
                  </Space>
                  <Typography>Species: {species}</Typography>
                  <Typography>Gender: {gender}</Typography>
                  <Typography>Location: {location?.name}</Typography>
                </>
              }
            />
          </Card>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default CharacterProfile;

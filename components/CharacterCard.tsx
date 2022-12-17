import { Button, Card, Space } from "antd";
import { characterInterface } from "../interfaces/characterInterface";
import ProfileStatus from "./ProfileStatus";

const { Meta } = Card;


interface characterCardInterface {
  character: characterInterface,
  onClickCallBack?: any
}

const CharacterCard = ({ character, onClickCallBack }: characterCardInterface) => {
  const { id, name, image, status } = character;

  return (
    <Card key={id} cover={<img alt="example" src={image} />}>
      <Meta
        title={
          <Space size="small">
            <Button
              type={onClickCallBack ? 'link' : 'text'}
              {...(onClickCallBack && {
                onClick: () => onClickCallBack(character),
              })}
            >
              {name}
            </Button>
            <ProfileStatus status={status} />
          </Space>
        }
      />
    </Card>
  );
};

export default CharacterCard;

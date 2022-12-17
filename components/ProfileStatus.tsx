import { Badge } from "antd";
import { useMemo } from "react";

interface profileStatusProps {
  status: string;
}

const ProfileStatus = ({ status }: profileStatusProps) => {

  const memoizedColor = useMemo(() => {
    let color = '';
    switch (status) {
      case "Alive":
        color = "green";
        break;
      case "Dead":
        color = "red";
        break;

      case "unknown":
        color = "grey";
        break;
    }

    return color;
  }, [status]);

  return <Badge color={memoizedColor} />;
};

export default ProfileStatus;

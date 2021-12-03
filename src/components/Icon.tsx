import React from "react";
import getIcon from "../selectors/getIcons";
type IconProps = {
  nameIcon: string;
};
const Icon: React.FC<IconProps> = (props) => {
  return <img src={getIcon(props.nameIcon)} alt={props.nameIcon} />;
};

export default Icon;

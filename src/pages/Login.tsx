import React, { useEffect } from "react";
import logging from "../config/logging";
import IPage from "../interfaces/page";
import Icon from "../components/Login/Icon";

const Login: React.FC<IPage> = ({ name }) => {
  useEffect(() => {
    logging.info(`Loading ${name}`);
  }, [name]);

  return <Icon nameIcon={"elephant"} />;
};

export default Login;

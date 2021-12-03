import React, { useEffect } from "react";
import logging from "../config/logging";
import IPage from "../interfaces/page";

const Login: React.FC<IPage> = ({ name }) => {
  useEffect(() => {
    logging.info(`Loading ${name}`);
  }, [name]);

  return <div>Login</div>;
};

export default Login;

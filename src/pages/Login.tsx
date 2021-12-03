import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logging from "../config/logging";
import IPage from "../interfaces/page";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import Button from "../components/Button";

const Login: React.FC<IPage> = ({ name }) => {
  useEffect(() => {
    logging.info(`Loading ${name}`);
  }, [name]);

  return (
    <div>
      <div>
        <Icon nameIcon={"elephant"} />;
      </div>
      <div>
        <Logo />
        <p>
          Bienvenue sur ORIGAMI ! Connectez-vous en cliquant ci-dessous à l'aide
          de votre compte interne. Pour plus de renseignement contactez votre
          administrateur.
        </p>
        <Link to="/musics">
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Login;

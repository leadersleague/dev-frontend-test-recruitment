import React, { useEffect } from "react";
import logging from "../config/logging";
import IPage from "../interfaces/page";

const SearchAndManage: React.FC<IPage> = ({ name }) => {
  useEffect(() => {
    logging.info(`Loading ${name}`);
  }, [name]);

  return <div>Musics</div>;
};

export default SearchAndManage;

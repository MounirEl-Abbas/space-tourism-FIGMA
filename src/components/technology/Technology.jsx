import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { useAppContext } from "../../context";

const Technology = () => {
  const { currentTechnology, changeTechnology } = useAppContext();
  const [technology, setTechnology] = useState({});

  useEffect(() => {
    const { technology } = data;
    const technologySelected = technology.find(
      tech => tech.name === currentTechnology
    );
    setTechnology(technologySelected);
    console.log(`technology`, technology);
  }, [currentTechnology]);

  return (
    <>
      {Object.keys(technology).length ? (
        <div className="technology-page page">
          <h5 className="subheading-sm">Space Launch 101</h5>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={technology.images.portrait}
            />
            <img src={technology.images.landscape} alt="" />
          </picture>
          <div>
            <ul>
              {data.technology.map(tech => (
                <li onClick={e => changeTechnology(e)} name={tech.name}>
                  {tech.name}
                </li>
              ))}
            </ul>
            <div id="technology-info">
              <h5 className="subheading-sm">The Terminology...</h5>
              <h2 className="subheading-lg">{technology.name}</h2>
              <p className="page-description">{technology.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Technology;

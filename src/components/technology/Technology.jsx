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
        <section>
          <h5>Space Launch 101</h5>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset={technology.images.portrait}
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
            <div>
              <h5>The Technology...</h5>
              <h1>{technology.name}</h1>
              <p>{technology.description}</p>
            </div>
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Technology;

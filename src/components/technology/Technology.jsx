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
  }, [currentTechnology]);

  return (
    <>
      {Object.keys(technology).length ? (
        <div className="technology-page page">
          <header className="page-header">
            <h5>
              <span>03</span>Space Launch 101
            </h5>
          </header>
          <main>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={technology.images.portrait}
              />
              <img id="tech-pic" src={technology.images.landscape} alt="" />
            </picture>
            <section>
              <ul>
                {data.technology.map((tech, index) => (
                  <li
                    className={`${
                      currentTechnology === tech.name
                        ? "current-technology"
                        : ""
                    }`}
                    onClick={e => changeTechnology(e)}
                    name={tech.name}
                    key={index}>
                    {index + 1}
                  </li>
                ))}
              </ul>
              <div className="page-info">
                <h5 className="subheading-bc-b">The Terminology...</h5>
                <h2>{technology.name}</h2>
                <p>{technology.description}</p>
              </div>
            </section>
          </main>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Technology;

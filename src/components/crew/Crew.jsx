import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { useAppContext } from "../../context";

const Crew = () => {
  const { currentCrew, changeCrew } = useAppContext();
  const [crewMember, setCrewMember] = useState({});
  useEffect(() => {
    const { crew } = data;
    const crewSelected = crew.find(member => member.name === currentCrew);
    setCrewMember(crewSelected);
  }, [currentCrew]);

  return (
    <>
      {Object.keys(crewMember).length ? (
        <div className="crew-page page">
          <header className="page-header">
            <h5>
              <span>02</span>Meet your crew
            </h5>
          </header>
          <main>
            <figure>
              <img src={crewMember.images.webp} alt="" />
            </figure>

            <section>
              <ul>
                {data.crew.map((member, index) => (
                  <li
                    className={`${
                      currentCrew === member.name ? "current-crew" : ""
                    }`}
                    onClick={e => changeCrew(e)}
                    name={member.name}
                    key={index}></li>
                ))}
              </ul>
              <div className="page-info">
                <h5 className="subheading-b-w">{crewMember.role}</h5>
                <h2>{crewMember.name}</h2>
                <p>{crewMember.bio}</p>
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

export default Crew;

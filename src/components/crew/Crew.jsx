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
          <h5 className="subheading-sm">Meet your crew</h5>
          <figure>
            <img src={crewMember.images.webp} alt="" />
          </figure>
          <div>
            <ul>
              {data.crew.map(member => {
                console.log(`member`, member);
                return (
                  <li onClick={e => changeCrew(e)} name={member.name}>
                    o
                  </li>
                );
              })}
            </ul>
            <div id="crew-info">
              <h5 className="subheading-lg">{crewMember.role}</h5>
              <h2 className="subheading-lg">{crewMember.name}</h2>
              <p className="page-description">{crewMember.bio}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Crew;

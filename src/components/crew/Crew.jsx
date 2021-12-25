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
        <section>
          <h5>Meet your crew</h5>
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
            <div>
              <h5>{crewMember.role}</h5>
              <h1>{crewMember.name}</h1>
              <p>{crewMember.bio}</p>
            </div>
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Crew;

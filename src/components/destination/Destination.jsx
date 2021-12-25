import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { useAppContext } from "../../context";

const Destination = () => {
  const { currentDestination, changeDestination } = useAppContext();
  const [destination, setDestination] = useState({});

  useEffect(() => {
    const { destinations } = data;
    const destinationSelected = destinations.find(
      destination => destination.name === currentDestination
    );
    setDestination(destinationSelected);
  }, [currentDestination]);

  return (
    <>
      {Object.keys(destination).length ? (
        <section>
          <h5>Pick your destination</h5>
          <figure>
            <img src={destination.images.webp} alt={` ${destination.name}`} />
          </figure>
          <div>
            <div>
              <ul>
                {data.destinations.map(dest => (
                  <li onClick={e => changeDestination(e)} name={dest.name}>
                    {dest.name}
                  </li>
                ))}
              </ul>
            </div>
            <h1>{destination.name}</h1>
            <p>{destination.description}</p>
            <div>
              <div>
                <p>Avg. Distance</p>
                <p>{destination.distance}</p>
              </div>
              <div>
                <p>Est. Travel Time</p>
                <p>{destination.travel}</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Destination;

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
        <div className="destination-page page">
          <header>
            <h5 className="subheading-sm">
              <span>01</span>Pick your destination
            </h5>
            <figure>
              <img src={destination.images.webp} alt={` ${destination.name}`} />
            </figure>
          </header>

          <section>
            <ul>
              {data.destinations.map(dest => (
                <li onClick={e => changeDestination(e)} name={dest.name}>
                  {dest.name}
                </li>
              ))}
            </ul>
            <h2 className="subheading-lg">{destination.name}</h2>
            <p className="page-description">{destination.description}</p>
            <div id="destination-info">
              <article>
                <h5 className="subheading-sm">Avg. Distance</h5>
                <p className="subheading-lg">{destination.distance}</p>
              </article>
              <article>
                <h5 className="subheading-sm">Est. Travel Time</h5>
                <p className="subheading-lg">{destination.travel}</p>
              </article>
            </div>
          </section>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Destination;

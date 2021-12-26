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
          <header className="page-header">
            <h5>
              <span>01</span>Pick your destination
            </h5>
          </header>

          <main>
            <figure>
              <img src={destination.images.webp} alt={` ${destination.name}`} />
            </figure>

            <section>
              <ul className="subheading-bc-b">
                {data.destinations.map(dest => (
                  <li
                    className={`${
                      currentDestination === dest.name
                        ? "current-destination"
                        : ""
                    }`}
                    onClick={e => changeDestination(e)}
                    name={dest.name}>
                    {dest.name}
                  </li>
                ))}
              </ul>
              <div className="page-info">
                <h2>{destination.name}</h2>
                <p>{destination.description}</p>
                <div>
                  <article>
                    <h5 className="subheading-bc-b">Avg.Distance</h5>
                    <p className="subheading-b-w">{destination.distance}</p>
                  </article>
                  <article>
                    <h5 className="subheading-bc-b">Est. Travel Time</h5>
                    <p className="subheading-b-w">{destination.travel}</p>
                  </article>
                </div>
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

export default Destination;

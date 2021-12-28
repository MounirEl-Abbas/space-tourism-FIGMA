import React from "react";
import { useAppContext } from "../../context";

const Home = () => {
  const { changePage } = useAppContext();
  return (
    <section className="home">
      <div>
        <article>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sitback, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </article>
        <div className="btn-container">
          <button name="destination" onClick={e => changePage(e)}>
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

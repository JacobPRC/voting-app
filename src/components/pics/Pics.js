import React, { useEffect, useState, useRef } from "react";

import unsplash from "../../api/unsplash";

const Pics = () => {
  const [pics, setPics] = useState([]);
  const [spans, setSpans] = useState(0);

  const ref = useRef();

  useEffect(() => {
    const fetchPics = async () => {
      const response = await unsplash.get("/search/photos", {
        params: { query: "ice cream" },
      });
      console.log(response.data.results[0].urls.regular);
      setPics(response.data.results);
    };
    fetchPics();
  }, []);
  const renderPics = () =>
    pics.map((pic) => {
      return (
        <div key={pic.id}>
          <img ref={ref} alt={pic.description} src={pic.urls.regular} />
        </div>
      );
    });

  return (
    <div>
      <h1>I SCREAM FOR ICE CREAM!</h1>
      {renderPics()}
    </div>
  );
};

export default Pics;

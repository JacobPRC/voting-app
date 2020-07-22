import React, { useEffect, useState, useRef } from "react";

import unsplash from "../../api/unsplash";

const Pics = () => {
  const [pics, setPics] = useState([]);

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
  const renderPics = pics.map((pic) => {
    console.log(pic.urls.regular, pic.description);
    return (
      <div>
        <img ref={ref} alt={pic.description} src={pic.urls.regular} />
      </div>
    );
  });

  return (
    <div>
      <h1>ICE SCREAM FOR ICE CREAM!</h1>
      {renderPics}
    </div>
  );
};

export default Pics;

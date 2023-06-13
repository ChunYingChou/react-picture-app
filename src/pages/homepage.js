import React, { useState, useEffect } from "react";
import Search from "../components/search";
import axios from "axios";
import Picture from "../components/picture";

const Homepage = () => {
  const [photos, setPhotos] = useState(null);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");

  const initialURL = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}&per_page=15`;

  let searchURL = `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=${input}&page=${page}&per_page=15`;

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    let response = await axios.get(initialURL);
    setPhotos(response.data);
  };

  const searchKeyWord = async () => {
    let response = await axios.get(searchURL);
    setPhotos(response.data.results);
    // console.log(response.data.results);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    setPage(page + 1);

    // 因為JS的closure問題所以page+1
    if (currentSearch === "") {
      newURL = `https://api.unsplash.com/photos/?client_id=${
        process.env.REACT_APP_ACCESS_KEY
      }&page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.unsplash.com/search/photos/?client_id=${
        process.env.REACT_APP_ACCESS_KEY
      }&query=${currentSearch}&page=${page + 1}&per_page=15`;
    }

    let response = await axios.get(newURL);

    if (currentSearch === "") {
      setPhotos(photos.concat(response.data));
    } else {
      setPhotos(photos.concat(response.data.results));
    }
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* 搜尋列 */}
      <Search
        search={input.trim().length === 0 ? search : searchKeyWord}
        setInput={setInput}
      />
      {/* 圖片區 */}
      <div className="pictures">
        {photos &&
          photos.map((p) => {
            return <Picture data={p} key={p.id} />;
          })}
      </div>
      {/* 更多圖片 */}
      <div className="morePicture">
        <button className="morePicture" onClick={morePicture}>
          更多圖片
        </button>
      </div>
    </div>
  );
};

export default Homepage;

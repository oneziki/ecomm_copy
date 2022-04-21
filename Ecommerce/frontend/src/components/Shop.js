import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Shop() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  },[])

  return (
    <div>

      <div>
          <ul>
              {data.map(item =>
                <Link to={'/netflix'}>
                    <li key={item.id}>{item.title}</li>
                </Link>
                )}
          </ul>
      </div>
    </div>
  );
}

export default Shop;

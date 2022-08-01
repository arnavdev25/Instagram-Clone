import axios from "axios";
import React, { useState, useEffect } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    axios.get("http://localhost:8080/post/mypost", config).then(({ data }) => {
      console.log(data);
      setPosts(data);
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "40%",
        margin: "auto",
      }}
    >
      {posts.map((e) => (
        <img src={e.photo} />
      ))}
    </div>
  );
};

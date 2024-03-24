import React, { useState } from "react";
import "./CardLists.scss";
import Card from "../Card/Card";

const CardLists = ({ users_data }) => {
  const [title, setTitle] = useState(
    "Đây là danh sách các người dùng đang hoạt động!!!",
  );

  const [input, setInput] = useState("");

  const handleClick = () => {
    setTitle(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="card-lists">
      <div className="container">
        <div className="search">
          <h2>{title}</h2>
          <div className="search-box">
            <input
              type="text"
              placeholder="Thay thế dòng tiêu đề trên..."
              value={input}
              onChange={handleChange}
            />
            <button onClick={handleClick}>Thay thế</button>
          </div>
        </div>
        <div className="user-lists">
          {users_data?.map((user) => (
            <Card key={user.id} user_data={user}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardLists;

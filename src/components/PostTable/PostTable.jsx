import React from "react";
import data from "../../data/posts.json";

const PostTable = () => {
  return (
    <>
      <div className="m-5 overflow-hidden rounded-t-lg shadow-lg">
        <table className="border-b-4 border-b-[#019879] p-4">
          <thead>
            <tr className="bg-[#019879] text-left text-xl text-white *:p-4">
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody className="divide-y-2">
            {data.map((post, index) => (
              <tr
                key={index}
                className={`${index % 2 ? "bg-[#f3f3f3] font-bold text-[#08927a]" : ""} *:p-4`}
              >
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostTable;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import editIcon from "../../assets/images/edit-icon.png";
import deleteIcon from "../../assets/images/trash-can.png";
import "./Profile.scss";
import { useEffect } from "react";

const savedPosts = localStorage.getItem("posts");
const parsedPosts = JSON.parse(savedPosts);
const Profile = () => {
  const newPost = { title: "", description: "", tags: "" };
  const [post, setPost] = useState(newPost);
  const [id, setId] = useState(parsedPosts?.length + 1 || 1);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [editPost, setEditPost] = useState(newPost);

  const [postsList, setPostsList] = useState(parsedPosts || []);
  const [queryPosts, setQueryPosts] = useState(parsedPosts || []);
  const [showPosts, setShowPosts] = useState(parsedPosts || []);

  const [title, setTitle] = useState("");

  const [showDropDown, setShowDropDown] = useState(false);
  const [sort, setSort] = useState("");

  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    !isEdit
      ? setPost((prevPost) => ({
          id,
          ...prevPost,
          [name]: value,
        }))
      : setEditPost((prevPost) => ({
          ...prevPost,
          [name]: value,
        }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setPostsList((prevList) => {
      const newList = [...prevList, post];
      const postsJSON = JSON.stringify(newList);
      localStorage.setItem("posts", postsJSON);
      return newList;
    });
    setPost(newPost);
    setId((id) => id + 1);
    setIsOpenModal(false);
  };

  const handleDelete = (id) => {
    setPostsList(postsList.filter((post) => post.id !== id));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newList = postsList.map((post) =>
      post.id === editPost.id ? { ...editPost } : post,
    );
    setPostsList(newList);
    setEditPost(newPost);
    setIsEdit(false);
    setIsOpenModal(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setTitle(value);
    const queryList = postsList.filter((post) => post.title.includes(value));
    setQueryPosts(queryList);
  };

  useEffect(() => {
    const sortedList = [...queryPosts];
    const oriented = sort === "up" ? 1 : -1;
    sortedList.sort((a, b) => {
      return a.tags.localeCompare(b.tags) * oriented;
    });
    setQueryPosts(sortedList);
  }, [postsList, sort]);

  useEffect(() => {
    const indexLastPost = currentPage * postsPerPage;
    const indexFirstPost = indexLastPost - postsPerPage;
    const currentPosts = queryPosts.slice(indexFirstPost, indexLastPost);
    setShowPosts(currentPosts);
  }, [postsList, queryPosts, currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="profile">
      {isOpenModal && (
        <div className="add-new">
          <div className="modal">
            <form>
              <div>
                <label htmlFor="title">Title</label> <br />
                <input
                  type="text"
                  id="title"
                  name="title"
                  autoFocus
                  value={!isEdit ? post.title : editPost.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label> <br />
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={!isEdit ? post.description : editPost.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="tags">Tags</label> <br />
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={!isEdit ? post.tags : editPost.tags}
                  onChange={handleChange}
                />
              </div>
              {!isEdit ? (
                <Button
                  title="Add"
                  width="200px"
                  height="50px"
                  handleClick={handleAdd}
                />
              ) : (
                <Button
                  title="Edit"
                  width="200px"
                  height="50px"
                  handleClick={handleEdit}
                />
              )}
            </form>
          </div>
        </div>
      )}
      <div className="sidebar">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="35"
            viewBox="0 0 49 35"
            fill="none"
          >
            <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
            <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
          </svg>
        </div>
        <div className="nav">
          <Link to="/profile">Posts</Link>
          <Link to="/" onClick={() => localStorage.clear()}>
            Logout
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <Button
            title="Add new"
            width="252.445px"
            height="58.535px"
            handleClick={() => setIsOpenModal(true)}
          />
          <div className="opt">
            <div className="search-box">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleSearch}
              />
            </div>
            <div className="dropdown">
              <button onClick={() => setShowDropDown(!showDropDown)}>
                {sort === "" ? (
                  <li>Sort</li>
                ) : sort === "up" ? (
                  <li>
                    Tags<i className="fa-regular fa-arrow-up"></i>
                  </li>
                ) : (
                  <li>
                    Tags<i className="fa-regular fa-arrow-down"></i>
                  </li>
                )}
              </button>
              {showDropDown && (
                <div>
                  <li
                    onClick={() => {
                      setSort("up");
                      setShowDropDown(false);
                    }}
                  >
                    Tags<i className="fa-regular fa-arrow-up"></i>
                  </li>
                  <li
                    onClick={() => {
                      setSort("down");
                      setShowDropDown(false);
                    }}
                  >
                    Tags<i className="fa-regular fa-arrow-down"></i>
                  </li>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="content">
          <table border={1} cellSpacing={0}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody-padding" border={0}>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              {showPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td style={{ width: "321px" }}>{post.title}</td>
                  <td style={{ width: "358px" }}>{post.description}</td>
                  <td style={{ width: "313px" }}>{post.tags}</td>
                  <td className="actions" style={{ width: "237px" }}>
                    <img
                      src={editIcon}
                      alt=""
                      onClick={() => {
                        setEditPost({
                          id: post.id,
                          title: post.title,
                          description: post.description,
                          tags: post.tags,
                        });
                        setIsEdit(true);
                        setIsOpenModal(true);
                      }}
                    />
                    <img
                      src={deleteIcon}
                      alt=""
                      onClick={() => handleDelete(post.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="pagination">
            {Array.from({
              length: Math.ceil(queryPosts.length / postsPerPage),
            }).map((_, index) => (
              <li key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

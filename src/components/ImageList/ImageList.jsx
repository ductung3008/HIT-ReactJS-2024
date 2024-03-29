import React, { useEffect, useState, useRef } from "react";
import Button from "../Button/Button";
import axios from "axios";
import "./ImageList.scss";

const ImageList = () => {
  const [imageLists, setImageLists] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageID, setImageID] = useState(null);
  const [imageIndex, setImageIndex] = useState(null);
  const listRef = useRef(null);

  const loadImage = () => {
    setPageNum(pageNum + 1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const data = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=8`,
      );
      setImageLists([...imageLists, ...data.data]);
    };
    fetchImages();
  }, [pageNum]);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [imageLists]);

  const toggleDeleteDialog = (id, index) => {
    setIsOpen(!isOpen);
    setImageID(id);
    setImageIndex(index);
  };

  const deleteImage = (id, index) => {
    imageLists[index].user &&
      URL.revokeObjectURL(imageLists[index].download_url);
    const newImageList = imageLists.filter((image) => image.id !== id);
    setImageLists(newImageList);
    setIsOpen(false);
    setImageID(null);
    setImageIndex(null);
  };

  const showAddButton = () => {
    setIsShow(!isShow);
  };

  const addImage = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    const image = { id: Date.now(), download_url: imageURL, user: 1 };
    setImageLists([...imageLists, image]);
  };

  const setInput = (e) => {
    const { target = {} } = e || {};
    target.value = "";
  };

  return (
    <>
      <div className="image-list" ref={listRef}>
        <div className="container">
          {imageLists.map((image, index) => (
            <div key={image.id} className="image">
              <img src={image.download_url} alt="" />
              <span
                className="trash-can"
                onClick={() => toggleDeleteDialog(image.id, index)}
              >
                <i className="fa-light fa-trash-can"></i>
              </span>
            </div>
          ))}
        </div>
        <Button
          Content="Load more"
          onClick={loadImage}
          backgroundColor="purple"
          textColor="#fff"
        ></Button>
        <div style={{ textAlign: "center" }}>
          <Button
            Content="Thêm mới"
            onClick={showAddButton}
            backgroundColor="purple"
            textColor="#fff"
          ></Button>
          <br />
          <>
            {isShow && (
              <input
                type="file"
                accept="image/*"
                name="upload"
                id="upload"
                onChange={addImage}
                onClick={setInput}
                style={{ margin: "20px 0" }}
              />
            )}
          </>
        </div>
      </div>
      <>
        {isOpen && (
          <div className="delete-dialog">
            <div className="delete-container">
              <div className="warning-icon">
                <i className="fa-regular fa-triangle-exclamation"></i>
              </div>
              <div className="content">
                <h2 className="title">Are you sure?</h2>
                <p className="desc">
                  This will delete this image permanently. <br />
                  You cannot undo this action.
                </p>
              </div>
              <div className="button-wrapper">
                <Button
                  Content="Delete"
                  backgroundColor="red"
                  textColor="white"
                  onClick={() => deleteImage(imageID, imageIndex)}
                ></Button>
                <Button
                  Content="Cancel"
                  backgroundColor="white"
                  textColor="black"
                  onClick={() => setIsOpen(false)}
                ></Button>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default ImageList;

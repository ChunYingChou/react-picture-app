import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faImage } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Picture = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="picture">
      <div className="imageContainer" onClick={handleShow}>
        <img src={data.urls.small} alt="" />
      </div>
      <div className="textArea">
        <p>
          <strong>作者：</strong>
          {data.user.username}
        </p>
        <p className="desc">
          <strong>標題：</strong>
          {data.alt_description}
          {/* {data.alt_description.length > 40
            ? data.alt_description.slice(0, 41)
            : data.alt_description} */}
        </p>

        <p>
          <strong>建立日期：</strong>
          {new Date(data.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="button">
        {/* modal視窗 */}
        {/* <Button
          style={{
            backgroundColor: "#8080c0",
            borderRadius: "10px",
            marginRight: "1rem",
            border: "none",
          }}
          onClick={handleShow}
        >
          詳細資訊
        </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>詳細資訊</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="photo"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <img src={data.urls.small_s3} alt="" />
            </div>
            <p>
              <FontAwesomeIcon icon={faImage} />
              　圖片描述：{data.description ? data.description : '無'}
            </p>
            <p>
              <FontAwesomeIcon icon={faUser} />
              　作者IG帳號：{data.user.instagram_username}
            </p>
            <p>
              <FontAwesomeIcon icon={faHeart} />
              　Like數：{data.likes}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* 下載按鈕 */}
        <a href={data.urls.full} target="_blank" rel="noreferrer" download="">
          下載圖片
        </a>
      </div>
    </div>
  );
};

export default Picture;

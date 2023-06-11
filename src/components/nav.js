import React from "react";
import { ReactComponent as Logo } from "../logo.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-bootstrap/Modal";

const Nav = () => {

  const [smShow, setSmShow] = useState(false);

  return (
    <nav>
      <div className="title">
        <Logo style={{ width: "70px" }} />
        <h1>Picture App</h1>
      </div>
      <div className="link">
        <a href="/">Home</a>
        <a href="#about" onClick={() => setSmShow(true)} className="me-2">
          About
        </a>
      </div>

      {/* About的modal彈跳視窗 */}
      <Modal
        show={smShow}
        fullscreen="true"
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            關於此專案
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            使用React.js快速建置一個串接unsplash
            API的圖片網站，讓使用者可以在此網站搜尋圖片並可以瀏覽相關資訊和下載圖片使用。
          </p>

          <p>
            <FontAwesomeIcon icon={faStar} /> 使用技術：
          </p>
          <ul>
            <li>HTML/CSS/JavaScript</li>
            <li>React.js</li>
            <li>SCSS</li>
            <li>RWD</li>
          </ul>

          <p>
            <FontAwesomeIcon icon={faStar} /> 使用套件：
          </p>
          <ul>
            <li>bootstrap</li>
            <li>Google Fonts</li>
            <li>Font Awesome</li>
            <li>axios</li>
          </ul>

          <p>
            <FontAwesomeIcon icon={faStar} /> 設計功能：
          </p>
          <ul>
            <li>
              使用者可在搜尋欄輸入<strong>關鍵字</strong>(英文為主)搜尋相關圖片
            </li>
            <li>游標移到個別圖片上方，圖片會放大顯示</li>
            <li>
              可點擊圖片觀看<strong>詳細資訊</strong>
              ，包含圖片描述、作者IG帳號、喜歡數
            </li>
            <li>
              點擊個別圖片下方的<strong>下載圖片</strong>按鈕即可開啟
              <strong>最大尺寸</strong>的原圖下載
            </li>
            <li>
              可點擊網頁最下方的<strong>更多圖片</strong>按鈕以瀏覽更多圖片
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default Nav;

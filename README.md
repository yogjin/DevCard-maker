# DevCard-maker

간단한 개발자 명함을 만들 수 있는 Web App입니다.

https://devcarrrd.netlify.app/

## 사용 기술

React, Javascript (Rendering, Logic)

postcss-modules, postcss-module-values (style)

html-to-image (Download Devcard)

firebase: OAuth(google, github)

react-router-dom

Cloudinary (Store Card Profile)

netlify (deployment web server)

## 구조
```
📦src
 ┣ 📂common
 ┃ ┣ 📜colors.css
 ┃ ┗ 📜size.css
 ┣ 📂components
 ┃ ┣ 📂CardMaker
 ┃ ┃ ┣ 📜Card.jsx
 ┃ ┃ ┣ 📜Card.module.css
 ┃ ┃ ┣ 📜CardMaker.jsx
 ┃ ┃ ┣ 📜CardMaker.module.css
 ┃ ┃ ┣ 📜CardMakerInput.jsx
 ┃ ┃ ┗ 📜CardMakerInput.module.css
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜Footer.module.css
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Header.module.css
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┗ 📜Login.module.css
 ┃ ┗ 📜README.md
 ┣ 📂config
 ┃ ┗ 📜firebase-config.js
 ┣ 📂services
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜database.js
 ┃ ┗ 📜image_uploader.js
 ┣ 📜App.jsx
 ┣ 📜App.module.css
 ┣ 📜index.js
 ┗ 📜index.module.css
```

## 이용 방법

### 1. Google 또는 Github 계정으로 로그인
<img width="1475" alt="image" src="https://user-images.githubusercontent.com/33623078/170909039-328f98b6-2cda-4396-8ca7-a0e8e37892c0.png">

### 2. input에 정보를 입력하여 카드 작성
<img width="1437" alt="image" src="https://user-images.githubusercontent.com/33623078/170909180-1e73b33d-579a-403e-96b1-296831e22563.png">

### 3. 프로필 업로드 버튼으로 이미지 업로드
<img width="1475" alt="image" src="https://user-images.githubusercontent.com/33623078/170908803-a47569d3-d991-4d4a-961f-2f21242e6d42.png">

### 4. DevCard.jpg 다운로드
<img width="1475" alt="image" src="https://user-images.githubusercontent.com/33623078/170909249-7c44a659-5161-4add-a5a0-7ae216acae3b.png">

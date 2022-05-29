# DevCard-maker 입니다.

간단한 개발자 명함을 만들 수 있는 Web App입니다.

https://devcarrrd.netlify.app/

## 사용 기술

React

postcss-modules

postcss-module-values

html-to-image

firebase: OAuth(google, github)

react-router-dom

Cloudinary (Card Profile)

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

## How to use

### 1. Google 또는 Github 계정으로 로그인
![스크린샷 2022-05-29 오후 5 18 52](https://user-images.githubusercontent.com/33623078/170858934-abf0735f-e5c1-4719-a27e-797988944361.jpg)

### 2. input에 정보를 입력하여 카드 작성

### 3. 프로필 업로드 버튼으로 이미지 업로드

### 4. dev card jpg 다운로드 가능

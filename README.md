# DevCard-maker 입니다.

간단한 개발자 명함을 만들 수 있는 Web App입니다.

https://devcarrrd.netlify.app/cardMaker

## 사용 기술

React

postcss-modules

postcss-module-values

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

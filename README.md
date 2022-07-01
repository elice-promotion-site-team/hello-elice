# hello-elice

![image](https://user-images.githubusercontent.com/78011716/176823446-ec4354a2-5d00-433b-9123-0d4b2645d695.png)


> 엘리스 트랙과 신청 방법을 소개하는 사이트입니다. <br>
> 퀴즈를 풀어보고 간단한 방명록을 작성할 수 있습니다. <br />

### https://elice-promotion-site.herokuapp.com/

<div>이 레포지토리는 배포용입니다. 작업 내용은 하단 레포지토리를 참조 바랍니다.</div>
<div> https://github.com/elice-promotion-site-team/elice-promotion-site-front </div>
<div> https://github.com/elice-promotion-site-team/elice-promotion-site-backend </div>
<br>

\*\* 핵심 기능은 하기입니다. <br>

1. 소셜 로그인 기능
- passport-google-oauth2.0 이용 : 사용자의 편의성, 보안 등을 고려
- user 정보를 jwt token 형태로 cookie에 저장 : 모바일에서 사용 가능한 token, 클라이언트에 저장 가능한 cookie 사용
2. 퀴즈 기능
- mongoDB 이용 CRUD 구현 : 보안상의 이유로 Read, Update만 사용
- user 정보와 연동 (문제풀이 여부, 맞은 문제 개수) : mypage에서 해당 정보를 확인할 수 있도록 user 정보와 연동
3. 방명록 기능
- mongoDB 이용 CRUD 구현 : DB 구조가 단순하여 NoSQL 사용
- 소셜 로그인 기능과 연동 : 프론트엔드에서 login 창으로 redirect, 백엔드 login-required는 작성 후 동작 확인했으나 개발 편의성을 위해 개발 중 사용하지 않음.
4. 채팅 기능
- socket.io 이용 : 실시간 통신 채팅 목적
- mongoDB와 연동 : 채팅 내용 저장 및 이전 채팅 내용을 Read 하여 시간이 지나도 정보 공유 가능

## 주요 사용 기술

### 1. 프론트엔드

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>

### 2. 백엔드

<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/express-000000?style=flat-square&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/> <img src="https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white"/> <img src="https://img.shields.io/badge/PM2-2B037A?style=flat-square&logo=PM2&logoColor=white"/>

## 폴더 구조

- 프론트엔드: `/frontend` 폴더
- 백엔드: 이외의 전체 폴더
- 실행: **프론트엔드 - cd /frontend && npm start 백엔드- ts-node src/server.ts**

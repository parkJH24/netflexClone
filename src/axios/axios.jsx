/*
axios
node.js나 브라우저에서 사용할 수 있는 http기반의 클라이언트 라이브러리
외부에 있는 api와 비동기방식으로 통신할 수 있께 해주는 라이브러리
fetch처럼 네트워크 요청을 보내고 응답을 받는데 문법 자체가 다른 라이브러리에 비해서
간결하고 추가기능이 있음
 yarn add axios로 설치
*/

const API_KEY = process.env.REACT_APP_API_KEY;
//process.env = node상에서 전역변수로 선언
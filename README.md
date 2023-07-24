# 유튜브 사이트 프로젝트
-------------------------------

![유튜브사이트 썸네일이미지](/public/assets/images/hoongtube_thumb.PNG)

##### 유튜브 API를 이용하여 개인 유튜브 사이트를 만들었습니다.
##### react를 사용하여 만들었으며 react의 router기능을 사용하여 부가 페이지를 만들었습니다.

### 완성된 site 주소 : [HoongTube][hoongtubelink]
[hoongtubelink]: https://hoongtube.netlify.app/ "go hoongtube"

------------------------------
## 사용 스택
- react : (https://ko.legacy.reactjs.org/)를 사용하여 제작된 페이지입니다.
- youtubeAPI : (https://developers.google.com/youtube/v3?hl=ko)를 사용하여 youtube동영상을 불러와 사용했습니다.
- netlify : (https://www.netlify.com/)를 사용해 사이트를 배포했습니다.
- html, scss를 사용하여 각각의 components를 구조화시켰습니다.

-----------------------------------
## youtube API 사용하기
- Google Cloud 프로젝트 만들기: 먼저 Google Cloud Console에 접속하여 새 프로젝트를 만듭니다.
- API 키 생성: 만들어진 프로젝트에서 YouTube Data API v3를 사용 설정하고, 해당 API를 호출하기 위한 API 키를 생성하세요. 이 API 키는 YouTube Data API를 호출할 때 필요합니다.
- API 호출: 생성된 API 키를 이용하여 YouTube Data API를 호출합니다.
- 응답 처리: API 호출에 대한 응답은 JSON 형식으로 돌아옵니다. 이 페이지에는 fetch를 통해 json형식의 데이터를 받아왔습니다.

<h1>Solitour - 새로운 나를 찾는 여행 (Mobile)</h1>

<div align="center">

![solitour-icon](https://github.com/user-attachments/assets/a426d674-90d8-4e57-b59b-ab73d1b48b28)

</div>

<div align="center">
   <a href="https://github.com/TripInfoWeb/solitour-mobile/wiki" target="_blank"><img src="https://img.shields.io/badge/GitHub%20Wiki-181717?logo=github&logoColor=white"></a>
   <a href="https://github.com/orgs/TripInfoWeb/projects/3" target="blank"><img src="https://img.shields.io/badge/🎯Backlog%20-02B78F?logo=none&logoColor=white"></a>
</div>

<br />
<br />

<h2>목차</h2>

- [✅ 서비스 소개](#-서비스-소개)
- [💾 주요 기능](#-주요-기능)
  - [테마 여행 추천](#테마-여행-추천)
  - [여행 계획 목록 조회](#여행-계획-목록-조회)
  - [여행 계획 상세 조회](#여행-계획-상세-조회)
  - [여행 계획 제목 수정](#여행-계획-제목-수정)
  - [여행 계획 삭제](#여행-계획-삭제)
  - [여행일기 목록 조회](#여행일기-목록-조회)
  - [여행일기 작성](#여행일기-작성)
  - [여행일기 수정](#여행일기-수정)
  - [여행일기 삭제](#여행일기-삭제)
  - [로그인](#로그인)
  - [마이페이지](#마이페이지)
- [✏️ 개발 기록](#️-개발-기록)
- [🔑 트러블슈팅 해결 경험](#-트러블슈팅-해결-경험)
- [🏛️️ 아키텍처](#️️-아키텍처)
- [📚 기술 스택](#-기술-스택)
- [👤 팀원 소개](#-팀원-소개)

<br />
<br />

## ✅ 서비스 소개

혼자 여행하는 사람들에게 선호하는 테마를 기반으로 여행지를 추천하는 앱 서비스입니다. 영화, 드라마, 예능 등에서 나온 촬영지를 바탕으로 여행지를 추천해 줍니다.

<br />
<br />

## 💾 주요 기능

### 테마 여행 추천

![plan_recommendation](https://github.com/user-attachments/assets/e781c178-4804-4881-b221-cd3363eff646)

- 여행 기간, 여행 테마, 여행지에서 하고 싶은 일 등의 정보를 기반으로 맞춤 여행 코스를 추천받을 수 있습니다.
- 추천받은 여행 코스 세부 내용을 확인할 수 있습니다.
- 추천받은 여행 코스를 내 여행 계획에 저장할 수 있습니다.

<br />

### 여행 계획 목록 조회

![plan_list](https://github.com/user-attachments/assets/94c6faaf-9eab-4bf2-b69d-65b56663f125)

- 저장한 여행 계획 목록을 조회할 수 있습니다.

<br />

### 여행 계획 상세 조회

![plan_detail](https://github.com/user-attachments/assets/06c3d78e-1d58-4b1f-b1d7-b1d20a672de3)

- 저장한 여행 계획을 상세 조회할 수 있습니다.
- 여행지 이동 거리 및 이동 예상 시간을 확인할 수 있습니다.
- 카카오 지도 위의 마커를 통해 실제 이동 경로를 확인할 수 있습니다.
- day별 코스를 확인할 수 있습니다.

<br />

### 여행 계획 제목 수정

![plan_title_update](https://github.com/user-attachments/assets/a0c1fb7c-10a8-4719-9275-8d34d73b7e2f)

- 저장한 여행 계획의 제목을 수정할 수 있습니다.

<br />

### 여행 계획 삭제

![plan_delete](https://github.com/user-attachments/assets/6164fcb6-3ca5-4f4b-825d-48ab4d8940fb)

- 저장한 여행 계획을 삭제할 수 있습니다.

<br />

### 여행일기 목록 조회

![diary_read](https://github.com/user-attachments/assets/46d97c52-f3b7-4a89-b3e9-4ad56d6b86ee)

- 자신이 작성한 여행일기 목록을 확인할 수 있습니다.
- 여행일기를 카드 형식으로 표시합니다.

<br />

### 여행일기 작성

![diary_create](https://github.com/user-attachments/assets/5fae2a41-fdb4-4418-8f4c-723ea084beb6)

- 제목, 날짜, 장소, 기분, 이미지를 입력하여 여행일기를 작성할 수 있습니다.
- 이미지는 1개만 등록할 수 있습니다.

<br />

### 여행일기 수정

![diary_update](https://github.com/user-attachments/assets/250c00c3-158b-4e5a-9dc7-a79dff9218a1)

- 자신이 작성한 여행일기를 수정할 수 있습니다.

<br />

### 여행일기 삭제

![diary_delete](https://github.com/user-attachments/assets/cdff8a93-3d07-4386-88cc-63847876dd05)

- 자신이 작성한 여행일기를 삭제할 수 있습니다.

<br />

### 로그인

![signin](https://github.com/user-attachments/assets/c7b396e9-a64f-480a-ac68-b54157020756)

- 사용자가 서비스를 쉽게 이용할 수 있도록 Kakao OAuth 로그인을 지원합니다.

<br />

### 마이페이지

![nickname](https://github.com/user-attachments/assets/fede1bde-9fb4-49d5-9d6c-6a59fb8aec72)

- 마이페이지에서 닉네임을 변경할 수 있습니다.
- 로그아웃을 할 수 있습니다.

<br />
<br />

## ✏️ 개발 기록

| 제목                                                                                                                                                                                                                                                                                                                        | 핵심 키워드        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [💿React Native CLI 시작하기](https://hyunjinno.github.io/posts/react-native-basic)                                                                                                                                                                                                                                         | `React Native`     |
| [🪟React Native 프로젝트에 Tailwind CSS 적용하기](https://github.com/TripInfoWeb/solitour-mobile/wiki/%F0%9F%AA%9FReact-Native-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-Tailwind-CSS-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)                                                                                             | `Tailwind CSS`     |
| [⚡Splash Screen 적용하기](https://github.com/TripInfoWeb/solitour-mobile/wiki/%E2%9A%A1Splash-Screen-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)                                                                                                                                                                                 | `Splash Screen`    |
| [🔍테마 여행 추천 기능에서 콘텐츠 검색 기능 구현하기](https://github.com/TripInfoWeb/solitour-mobile/wiki/%F0%9F%94%8D%ED%85%8C%EB%A7%88-%EC%97%AC%ED%96%89-%EC%B6%94%EC%B2%9C-%EA%B8%B0%EB%8A%A5%EC%97%90%EC%84%9C-%EC%BD%98%ED%85%90%EC%B8%A0-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0) | `Debounce`         |
| [📘React Native 프로젝트에 FSD 아키텍처 적용하기](https://hyunjinno.github.io/posts/fsd-example-react-native/)                                                                                                                                                                                                              | `FSD Architecture` |

<br />
<br />

## 🔑 트러블슈팅 해결 경험

| 제목                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 핵심 키워드                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [📱Android에서 Header에 설정한 우측 버튼이 동작하지 않는 오류](https://github.com/TripInfoWeb/solitour-mobile/wiki/%F0%9F%93%B1Android%EC%97%90%EC%84%9C-Header%EC%97%90-%EC%84%A4%EC%A0%95%ED%95%9C-%EC%9A%B0%EC%B8%A1-%EB%B2%84%ED%8A%BC%EC%9D%B4-%EB%8F%99%EC%9E%91%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EC%98%A4%EB%A5%98)                                                                                                                                                             | `React Navigation`                   |
| [📱BottomSheetModal이 다른 UI 요소에 의해 가려지는 오류](https://github.com/TripInfoWeb/solitour-mobile/wiki/%F0%9F%93%B1BottomSheetModal%EC%9D%B4-%EB%8B%A4%EB%A5%B8-UI-%EC%9A%94%EC%86%8C%EC%97%90-%EC%9D%98%ED%95%B4-%EA%B0%80%EB%A0%A4%EC%A7%80%EB%8A%94-%EC%98%A4%EB%A5%98)                                                                                                                                                                                                            | `BottomSheetModal`                   |
| [📅여행일기 수정 시 날짜를 변경하지 않았음에도 불구하고 날짜가 하루씩 변경되는 오류](https://github.com/TripInfoWeb/solitour-mobile/wiki/%F0%9F%93%85%EC%97%AC%ED%96%89%EC%9D%BC%EA%B8%B0-%EC%88%98%EC%A0%95-%EC%8B%9C-%EB%82%A0%EC%A7%9C%EB%A5%BC-%EB%B3%80%EA%B2%BD%ED%95%98%EC%A7%80-%EC%95%8A%EC%95%98%EC%9D%8C%EC%97%90%EB%8F%84-%EB%B6%88%EA%B5%AC%ED%95%98%EA%B3%A0-%EB%82%A0%EC%A7%9C%EA%B0%80-%ED%95%98%EB%A3%A8%EC%94%A9-%EB%B3%80%EA%B2%BD%EB%90%98%EB%8A%94-%EC%98%A4%EB%A5%98) | `Date` `UTC`                         |
| [🔙BottomSheetModal이 리렌더링된 후 모바일 뒤로가기 버튼이 동작하지 않는 오류](https://github.com/TripInfoWeb/solitour-mobile/wiki/%F0%9F%94%99BottomSheetModal%EC%9D%B4-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81%EB%90%9C-%ED%9B%84-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EB%92%A4%EB%A1%9C%EA%B0%80%EA%B8%B0-%EB%B2%84%ED%8A%BC%EC%9D%B4-%EB%8F%99%EC%9E%91%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EC%98%A4%EB%A5%98)                                                                                   | `BottomSheetModal` `BackHandler`     |
| [🖊️여행일기 수정 화면으로 이동했을 때 일기 글 내용이 표시되지 않는 오류](https://github.com/TripInfoWeb/solitour-mobile/wiki/%F0%9F%96%8A%EF%B8%8F%EC%97%AC%ED%96%89%EC%9D%BC%EA%B8%B0-%EC%88%98%EC%A0%95-%ED%99%94%EB%A9%B4%EC%9C%BC%EB%A1%9C-%EC%9D%B4%EB%8F%99%ED%96%88%EC%9D%84-%EB%95%8C-%EC%9D%BC%EA%B8%B0-%EA%B8%80-%EB%82%B4%EC%9A%A9%EC%9D%B4-%ED%91%9C%EC%8B%9C%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EC%98%A4%EB%A5%98)                                                          | `WebView` `useEffect`                |
| [📱FlatList 내 Modal을 사용하면서 발생한 문제](https://github.com/TripInfoWeb/solitour-mobile/wiki/%F0%9F%93%B1FlatList-%EB%82%B4-Modal%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4%EC%84%9C-%EB%B0%9C%EC%83%9D%ED%95%9C-%EB%AC%B8%EC%A0%9C)                                                                                                                                                                                                                                              | `Modal` `VirtualizedList` `FlatList` |

<br />
<br />

## 🏛️️ 아키텍처

![architecture](https://github.com/user-attachments/assets/190b691c-a496-44d5-a057-cb65b05625b7)

<br />
<br />

## 📚 기술 스택

| 분류                | 기술 스택                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FE                  | ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?logo=npm&logoColor=white) ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white) ![React_Native](https://img.shields.io/badge/React_Native-%2320232a.svg?logo=react&logoColor=%2361DAFB) ![Tailwind_CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?logo=react%20query&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-443E38?logo=react&logoColor=ffffff) ![Zod](https://img.shields.io/badge/-Zod-FF4154?logo=zod&logoColor=white) ![React_Hook_Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?logo=reacthookform&logoColor=white) |
| BE                  | ![Java](https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white) ![Spring](https://img.shields.io/badge/Spring-6DB33F?logo=Spring&logoColor=white) ![Spring_Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=Spring%20Boot&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Database            | ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Infrastructure      | ![Nginx](https://img.shields.io/badge/Nginx-%23009639.svg?logo=nginx&logoColor=white) ![Amazon_EC2](https://img.shields.io/badge/Amazon%20EC2-FF9900?logo=amazonec2&logoColor=white) ![Amazon_S3](https://img.shields.io/badge/Amazon%20S3-569A31?logo=Amazon%20S3&logoColor=white) ![Amazon_RDS](https://img.shields.io/badge/Amazon%20RDS-527FFF?logo=Amazon%20RDS&logoColor=white) ![GitHub_Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=GitHub%20Actions&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Collaboration Tools | ![Figma](https://img.shields.io/badge/Figma-%23F24E1E.svg?logo=figma&logoColor=white) ![Notion](https://img.shields.io/badge/-Notion-000000?logo=notion&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white) ![Slack](https://img.shields.io/badge/-Slack-4A154B?logo=slack&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?logo=Discord&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

<br />
<br />

## 👤 팀원 소개

|       김수아        |                                 노현진                                 |                                이수경                                 |                                원동훈                                |                                 정재현                                 |
| :-----------------: | :--------------------------------------------------------------------: | :-------------------------------------------------------------------: | :------------------------------------------------------------------: | :--------------------------------------------------------------------: |
|        None         | <img src="https://github.com/HyunJinNo.png" width="100" height="100"/> | <img src="https://github.com/ssssksss.png" width="100" height="100"/> | <img src="https://github.com/Astin01.png" width="100" height="100"/> | <img src="https://github.com/hyeonjaez.png" width="100" height="100"/> |
| Sua0714@hotmail.com |               [@HyunJinNo](https://github.com/HyunJinNo)               |               [@ssssksss](https://github.com/ssssksss)                |                [@Astin01](https://github.com/Astin01)                |               [@hyeonjaez](https://github.com/hyeonjaez)               |
|      Designer       |                               Front-end                                |                               Front-end                               |                               Back-end                               |                                Back-end                                |

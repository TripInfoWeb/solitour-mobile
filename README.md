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
  - [테마 여행 추천 기능](#테마-여행-추천-기능)
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

### 테마 여행 추천 기능

![plan_recommendation](https://private-user-images.githubusercontent.com/88878230/431795183-c2aad5af-ef1e-4f73-a0ae-2c1457d262a3.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxOTQ2MDMsIm5iZiI6MTc0NDE5NDMwMywicGF0aCI6Ii84ODg3ODIzMC80MzE3OTUxODMtYzJhYWQ1YWYtZWYxZS00ZjczLWEwYWUtMmMxNDU3ZDI2MmEzLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDEwMjUwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ1ZTE4ZWMyNjg3ZjdhMjExODRjNmFhNDlhYjc5ZTkzM2Q0NDA4ZGYwMzUwY2Y2NjIzMGY4YjEzMDAwYjZjNmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.JhTAULmPS4wpykwYdnF85td4xaeFaBriFI90fYdYQ8w)

- 여행 기간, 여행 테마, 여행지에서 하고 싶은 일 등의 정보를 기반으로 맞춤 여행 코스를 추천받을 수 있습니다.
- 추천받은 여행 코스 세부 내용을 확인할 수 있습니다.
- 추천받은 여행 코스를 내 여행 계획에 저장할 수 있습니다.

<br />

### 여행 계획 목록 조회

![plan_list](https://private-user-images.githubusercontent.com/88878230/431790744-9a0db432-19b4-4804-af99-8fc979d87131.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxOTUyMTUsIm5iZiI6MTc0NDE5NDkxNSwicGF0aCI6Ii84ODg3ODIzMC80MzE3OTA3NDQtOWEwZGI0MzItMTliNC00ODA0LWFmOTktOGZjOTc5ZDg3MTMxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDEwMzUxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJmNTE5ZmQ1MWY3MjRiMDczNzg4N2I1YTgyZjU4YmQ5NTA3OWZlNTlmODMzZmExNjlhNzE2ZDlmYjczNzBjNDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.mFVNaTjT5R8xyY1ZfaXeUDuKjlfaZhrUsJyqKHAwuA4)

- 저장한 여행 계획 목록을 조회할 수 있습니다.

<br />

### 여행 계획 상세 조회

![plan_detail](https://private-user-images.githubusercontent.com/88878230/431789543-ff713b1e-e0e0-45f9-b863-eede9c31e7ab.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxOTM3MDMsIm5iZiI6MTc0NDE5MzQwMywicGF0aCI6Ii84ODg3ODIzMC80MzE3ODk1NDMtZmY3MTNiMWUtZTBlMC00NWY5LWI4NjMtZWVkZTljMzFlN2FiLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDEwMTAwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY1MTg1N2M0MzBmOWI5ZDg1YTNmOWY4ZTZlOWE5ZjFjOGEzODlmMGQ2YjVmMmY4OTI2OTQ4OWNjYjgxY2RkNzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.YJ11jt4d3NEDXKhduYJC0Fhe9-C-CzWfTZ2vI6zym0Q)

- 저장한 여행 계획을 상세 조회할 수 있습니다.
- 여행지 이동 거리 및 이동 예상 시간을 확인할 수 있습니다.
- 카카오 지도 위의 마커를 통해 실제 이동 경로를 확인할 수 있습니다.
- day별 코스를 확인할 수 있습니다.

<br />

### 여행 계획 제목 수정

![plan_title_update](https://private-user-images.githubusercontent.com/88878230/431785741-61e9ea0d-f63b-41d0-91f8-b3897805278f.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxOTMwOTAsIm5iZiI6MTc0NDE5Mjc5MCwicGF0aCI6Ii84ODg3ODIzMC80MzE3ODU3NDEtNjFlOWVhMGQtZjYzYi00MWQwLTkxZjgtYjM4OTc4MDUyNzhmLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDA5NTk1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM4MTM3ZDQzN2VlOTUzMjRmYzEwMGJiOGQ5OWNjZjI2ZTQzM2Q3N2Y1YjkzOTNiNGIwNDk0OWJjOGUwMDQ2ZjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.znYve6Az5XcTQLmDlI2NZn7DiFG8g7QZdF9NRw-Bg4M)

- 저장한 여행 계획의 제목을 수정할 수 있습니다.

<br />

### 여행 계획 삭제

![plan_delete](https://private-user-images.githubusercontent.com/88878230/431783852-bd096d54-0d01-46fc-8f02-e19c3bee8241.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxOTI3OTksIm5iZiI6MTc0NDE5MjQ5OSwicGF0aCI6Ii84ODg3ODIzMC80MzE3ODM4NTItYmQwOTZkNTQtMGQwMS00NmZjLThmMDItZTE5YzNiZWU4MjQxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDA5NTQ1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA2YjhiOWUxNzQzYmNlYmE5MWI0YzRlYmE4NzZlNWIyYzk4YmYzNmJmNWUyMDBjZmM4Njc5ODQxNTNiODY5MTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.0jEqpf7424UwAmXBoAqeDRiAh9CVjpnA4Za0-d4W_1Y)

- 저장한 여행 계획을 삭제할 수 있습니다.

<br />

### 여행일기 목록 조회

![diary_read](https://private-user-images.githubusercontent.com/88878230/431752393-14052222-218e-40bf-898f-f85fa1929fe8.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxODgxMjUsIm5iZiI6MTc0NDE4NzgyNSwicGF0aCI6Ii84ODg3ODIzMC80MzE3NTIzOTMtMTQwNTIyMjItMjE4ZS00MGJmLTg5OGYtZjg1ZmExOTI5ZmU4LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDA4MzcwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEwNWVlN2I4NTQzN2YxMWVlODQxZDFhN2FjZjZlZDE0ZTY0NzM3OTk3NzQ0MDA1MTk5YTEzY2M3MTgzOTYxMTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.mjkKlaTBpa5Dn3CssPbL1KenoN8WdLXB_tGESE2EaD0)

- 자신이 작성한 여행일기 목록을 확인할 수 있습니다.
- 여행일기를 카드 형식으로 표시합니다.

<br />

### 여행일기 작성

![diary_create](https://private-user-images.githubusercontent.com/88878230/431750305-fe9369be-17ca-4d6c-8653-f803ed92289c.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxODc4MjEsIm5iZiI6MTc0NDE4NzUyMSwicGF0aCI6Ii84ODg3ODIzMC80MzE3NTAzMDUtZmU5MzY5YmUtMTdjYS00ZDZjLTg2NTMtZjgwM2VkOTIyODljLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDA4MzIwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTljZWNjNWU3OGI1MTJmMWMxMDc4ZjkyM2U0ZWY1MWRmNzQwYmI0ZjQ5YjFiMTBiYmI4NjlhZTg1MGMwODljNDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Caou93N2uYxpkRnyvyr2HWn1_3yRbp68JeO4aNdu7X4)

- 제목, 날짜, 장소, 기분, 이미지를 입력하여 여행일기를 작성할 수 있습니다.
- 이미지는 1개만 등록할 수 있습니다.

<br />

### 여행일기 수정

![diary_update](https://private-user-images.githubusercontent.com/88878230/431747571-89de45f8-211e-413b-a773-b73d3f5247d8.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxODc0MjUsIm5iZiI6MTc0NDE4NzEyNSwicGF0aCI6Ii84ODg3ODIzMC80MzE3NDc1NzEtODlkZTQ1ZjgtMjExZS00MTNiLWE3NzMtYjczZDNmNTI0N2Q4LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDA4MjUyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc0MjI4ZTQxZTMyODk0MjQ3MzI2MTFmYjFkY2NjNzIyYjgzMDJhNmE5Y2RhYzMwNDU3ZDA1NDA4MDMyM2E5ZTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.PqZc5TpX5Tdsi3QKbpPSefcTnnPu2ymDCiqzWZM7LYo)

- 자신이 작성한 여행일기를 수정할 수 있습니다.

<br />

### 여행일기 삭제

![diary_delete](https://private-user-images.githubusercontent.com/88878230/431745383-f292e35a-8982-4b87-9135-fd9a52f78fd5.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxODcxMDIsIm5iZiI6MTc0NDE4NjgwMiwicGF0aCI6Ii84ODg3ODIzMC80MzE3NDUzODMtZjI5MmUzNWEtODk4Mi00Yjg3LTkxMzUtZmQ5YTUyZjc4ZmQ1LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDA4MjAwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmZjAwMjA3OGU0YTZlNDYyYWNhZGE0OWU4ZjFkOGU3ZDRkN2Q1ZGQyYTU1MGY1NzgyZTY3YjcwNjUxZGJiZDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.eOIWw7vQ8cViIMTh4uO8F7dyUPDNeSuhxvmqtFYn3dA)

- 자신이 작성한 여행일기를 삭제할 수 있습니다.

<br />

### 로그인

![signin](https://private-user-images.githubusercontent.com/88878230/431740240-2cffb0ea-4379-41bf-9091-c6f907ce6007.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxODY1MzksIm5iZiI6MTc0NDE4NjIzOSwicGF0aCI6Ii84ODg3ODIzMC80MzE3NDAyNDAtMmNmZmIwZWEtNDM3OS00MWJmLTkwOTEtYzZmOTA3Y2U2MDA3LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDA4MTAzOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAzNzY3ZWM5MjVkYzVjMGE3YThjMjkyNjRiZWNiZTVmOWJlYTZhMmM4MmJhN2Q3NzRjMGYyM2Q3MjUxZGFkNTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.31jmxahXZ9y7Tn3jUgCTouWLwL2SkdnSY9ydfg7_9ks)

- 사용자가 서비스를 쉽게 이용할 수 있도록 Kakao OAuth 로그인을 지원합니다.

<br />

### 마이페이지

![mypage](https://private-user-images.githubusercontent.com/88878230/431743390-e20240fb-8ca4-4308-89bb-07a44829e7af.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxODY4MDQsIm5iZiI6MTc0NDE4NjUwNCwicGF0aCI6Ii84ODg3ODIzMC80MzE3NDMzOTAtZTIwMjQwZmItOGNhNC00MzA4LTg5YmItMDdhNDQ4MjllN2FmLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDA4MTUwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMwYmIwN2ZlNGQwZjc4MDIzMDcwNmQ4ZjhmOTNkNWJiM2U4YjgyMmJiZjNlMGM5YmQ0Zjc1ZTIyYjYzZDIyZjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.o4yjWQJiisQCmWIlHy49DL0Y1jazBDADP9pDiAfn0Fc)

- 마이페이지에서 닉네임을 변경할 수 있습니다.
- 로그아웃을 할 수 있습니다.

<br />
<br />

## ✏️ 개발 기록

| 제목                                                                                                                                                                                                                                                                                                                        | 핵심 키워드        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
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

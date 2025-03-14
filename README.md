# React 쇼핑몰 프로젝트

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Spring Boot](https://img.shields.io/badge/SpringBoot-2.7.0-green?logo=spring)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?logo=mysql)
![Redis](https://img.shields.io/badge/Redis-6.2-red?logo=redis)
![Docker](https://img.shields.io/badge/Docker-20.10-blue?logo=docker)

## 📌 프로젝트 소개
이 프로젝트는 GitHub 형상관리 툴을 이용하여 팀 협업 능력을 향상시키기 위해 진행된 React 기반의 쇼핑몰 웹 애플리케이션입니다.Spring Boot를 백엔드로 활용하여 REST API를 제공하며, Redis, MySQL을 포함한 다양한 기술 스택을 사용하였습니다.

프로젝트의 핵심 목표는 팀원 간의 협업 방식 개선과 최신 웹 기술 스택을 활용한 실전 경험을 쌓는 것이었습니다.
Redis와 Docker 모두 최신기술은 아니지만, 이제는 없어서는 안 될 기술들이고 해당 기술들을 접해보는 것 그자체가 중요하다고 생각하여
사이드 프로젝트를 진행하며 알아보며 간단하게 구축/사용 방법정도를 파악할 수 있는 시간이었습니다.

이 프로젝트를 통해 개발 협업의 중요성을 체감할 수 있었고,나아가 실무에서도 적용할 수 있는 다양한 경험을 쌓을 수 있었으리라 생각합니다.

## 📅 개발 기간
**2023.10 ~ 2024.01**

## 👥 팀 구성 (총 3명)
- Frontend: React
- Backend: Spring Boot
- Database: MySQL, Redis
- DevOps: Docker

## 🔧 기술 스택
### Frontend
- React
- Axios (API 통신)
- Styled-components
- React Router

### Backend
- Spring Boot
- Spring Security (OAuth2, JWT)
- MySQL
- Redis
- JPA (Hibernate)
- Docker

## 📂 주요 기능
### 회원가입 & 로그인
- **이메일 인증**: Redis를 이용한 이메일 인증 기능 구현
- **소셜 로그인**: Kakao, Google, Naver OAuth2 연동
- **JWT 인증**: Token 기반 인증 및 인증 유지 관리

### 사용자 기능
- **마이페이지**: 개인정보 수정 및 회원 정보 조회
- **상품 목록 조회**: 다양한 상품을 조회할 수 있는 기능 제공
- **장바구니**: 선택한 상품을 장바구니에 추가 및 삭제 가능
- **주문 및 결제**: 상품을 주문하고 결제 가능

### 관리자 기능
- **쿠폰 관리**: 쿠폰 발급 및 관리
- **회원 권한 관리**: 관리자 권한으로 회원의 권한 수정 가능
- **상품 관리**: 상품 등록, 수정, 삭제

## 🔗 GitHub Repository
[프로젝트 GitHub 링크](https://github.com/mulhowk/instrumentShop)

## 🛠️ 개발 과정에서의 고민 및 해결
- **GitHub 형상관리**: 협업 시 브랜치를 나누지 않고 main 브랜치에서 직접 커밋을 진행하며, 커밋 후 즉시 상호 테스트를 수행하여 merge 충돌 문제를 해결
- **JWT vs Session**: JWT를 활용하여 Stateless한 인증 방식 도입
- **Docker 활용**: 백엔드, 데이터베이스, Redis 등을 컨테이너화하여 운영 환경을 구축
- **Redis 학습**: NoSQL과 RDBMS의 차이를 이해하고, 캐싱 및 인증 관리에 활용

## 📌 실행 방법
### 1. Backend 실행
```sh
cd backend
./gradlew bootRun
```

### 2. Frontend 실행
```sh
cd frontend
npm install
npm start
```

### 3. Docker 컨테이너 실행 (MySQL, Redis)
```sh
docker-compose up -d
```

## 📜 License
이 프로젝트는 MIT 라이선스를 따릅니다.


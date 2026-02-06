# ENTEC React Assets

> 금융권 기업뱅킹 프로젝트를 위한 엔터프라이즈 프론트엔드 플랫폼

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)](https://vitejs.dev/)

## 📚 문서

### 주요 가이드

- **[프론트엔드 가이드](./FRONTEND_PLATFORM_GUIDE.md)** - ENTEC React Assets 공식 문서

### 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 🎯 프로젝트 특징

- **React 19** + **TypeScript** 기반 현대적인 프론트엔드 아키텍처
- **Redux Toolkit**을 활용한 체계적인 상태 관리
- **Shadcn/ui** + **Tailwind CSS**로 구성된 확장 가능한 UI 컴포넌트 시스템
- 도메인 주도 설계(DDD)를 적용한 확장 가능한 폴더 구조
- 금융권 특화 유틸리티 함수 (포맷팅, 마스킹 등)

## 🏗 프로젝트 구조

```
src/
├── app/              # 애플리케이션 코어
│   ├── common/       # API, 유틸리티
│   ├── components/   # 공통 UI 컴포넌트
│   ├── hooks/        # 커스텀 훅
│   ├── router/       # 라우팅
│   ├── store/        # 상태 관리
│   └── types/        # 타입 정의
├── domains/          # 도메인별 비즈니스 로직
│   ├── account/      # 계좌관리
│   ├── transfer/     # 송금/이체
│   └── [domain]/     # 기타 도메인
└── shared/           # 전역 공유 자원
    ├── components/   # 레이아웃
    ├── router/       # 전역 라우터
    └── store/        # 전역 스토어
```

## 🚀 주요 기능

### 공통 컴포넌트 시스템
- Button, Input, Select, Table 등 기본 컴포넌트
- Alert, Confirm, Dialog 서비스
- 금융권 특화 UI 컴포넌트

### API 클라이언트
- Singleton 패턴 기반 Axios 클라이언트
- Request/Response Interceptor
- 중복 호출 방지 메커니즘
- JWT 인증 지원

### 상태 관리
- Redux Toolkit 기반 전역 상태 관리
- 도메인별 Store 분리
- useReduxAPI / useReduxState 커스텀 훅

### 유틸리티 함수
- 날짜 포맷팅 및 계산
- 금액, 계좌번호, 카드번호 포맷팅
- 개인정보 마스킹 (이름, 주민번호 등)
- 문자열 처리 유틸리티

## 💻 기술 스택

### Core
- React 19.1.1
- TypeScript 5.9.3
- Vite 7.1.7

### UI
- Shadcn/ui
- Radix UI
- Tailwind CSS 4.1.14

### State & Routing
- Redux Toolkit 2.9.2
- React Router 7.9.4

### HTTP & Utilities
- Axios 1.13.0
- date-fns 4.1.0
- dayjs 1.11.19

## 📖 개발 가이드

자세한 개발 가이드는 [프론트엔드 가이드](./FRONTEND_PLATFORM_GUIDE.md)를 참조하세요.

### 신규 도메인 추가

1. `domains/[domain-name]` 폴더 생성
2. API, Store, Router, Pages 구조 생성
3. 전역 라우터 및 스토어에 등록

상세한 절차는 가이드 문서의 [신규 도메인 추가 워크플로우](./FRONTEND_PLATFORM_GUIDE.md#62-신규-도메인-추가-워크플로우) 참조

### 코딩 컨벤션

- **컴포넌트**: PascalCase (`AccountList.tsx`)
- **함수/변수**: camelCase (`fetchData`, `isLoading`)
- **상수**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **타입**: PascalCase with I prefix (`IAccount`, `IProps`)

## 🛠 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 린트 검사
npm run lint

# 린트 자동 수정
npm run lint:fix
```


---

<div align="center">
  <p><strong>ENTEC React Assets</strong></p>
  <p>프론트엔드 코드 Assets</p>
</div>

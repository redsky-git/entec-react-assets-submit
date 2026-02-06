# 문서 가이드

이 폴더에는 ENTEC React Assets 프로젝트의 상세 문서가 포함되어 있습니다.

## 📚 문서 목록

### 1. [프론트엔드 플랫폼 구성 가이드](../FRONTEND_PLATFORM_GUIDE.md)

**위치**: 프로젝트 루트 (`/FRONTEND_PLATFORM_GUIDE.md`)

금융권 기업뱅킹 프로젝트를 위한 전체적인 플랫폼 구성 가이드입니다.

**주요 내용**:
- 프로젝트 개요 및 비전
- 기술 스택 및 라이브러리
- 프로젝트 아키텍처 (Mermaid 다이어그램 포함)
- 공통 플랫폼 영역 정의
  - 컴포넌트 시스템
  - API 클라이언트
  - 유틸리티 함수
  - 상태 관리
  - 라우팅 시스템
  - 레이아웃 시스템
- 개발 가이드
  - 코딩 컨벤션
  - 컴포넌트 작성 가이드
  - API 연동 가이드
  - 상태 관리 가이드
  - 라우팅 가이드
- 개발 프로세스
  - 초기 세팅
  - 신규 도메인 추가 워크플로우
  - 빌드 및 배포
- 기업뱅킹 도메인 예시
  - 계좌관리
  - 송금/이체
  - 대출
  - 외환
  - 결제

**페이지 수**: 약 2,300줄
**파일 크기**: 59KB

---

### 2. [도메인 구현 예제](./DOMAIN_EXAMPLES.md)

**위치**: `/docs/DOMAIN_EXAMPLES.md`

실제 업무에 바로 적용할 수 있는 상세한 구현 예제를 제공합니다.

**주요 내용**:
- 계좌관리 도메인 상세 구현
  - 타입 정의
  - API URL 정의
  - Store 정의
  - 컴포넌트 구현 (AccountCard, TransactionItem)
  - 페이지 구현 (AccountList, AccountDetail)
- 송금/이체 도메인 상세 구현
  - 타입 정의
  - 송금 페이지 전체 구현
  - 입력 검증 및 에러 핸들링
  - API 연동 및 사용자 피드백
- 대출 도메인 상세 구현
  - 대출 계산기 구현
  - 원리금균등상환 / 원금균등상환 계산
  - 상환 스케줄 표시
- 공통 패턴 및 베스트 프랙티스
  - 에러 바운더리
  - 공통 Form 훅
  - 공통 데이터 테이블 컴포넌트

**페이지 수**: 약 1,600줄
**파일 크기**: 42KB

---

## 🎯 문서 활용 가이드

### 신규 투입 개발자

1. **[프론트엔드 플랫폼 구성 가이드](../FRONTEND_PLATFORM_GUIDE.md)** 전체 읽기
2. 프로젝트 구조 및 아키텍처 이해
3. 개발 가이드 섹션 숙지
4. **[도메인 구현 예제](./DOMAIN_EXAMPLES.md)**에서 실제 코드 패턴 학습

### 기능 개발 시

1. 개발하려는 도메인과 유사한 예제 찾기
2. 타입 정의부터 시작
3. API URL 및 Store 정의
4. 컴포넌트 및 페이지 구현
5. 가이드의 코딩 컨벤션 준수

### 신규 도메인 추가 시

1. **[프론트엔드 플랫폼 구성 가이드](../FRONTEND_PLATFORM_GUIDE.md)** 의 "신규 도메인 추가 워크플로우" 참조
2. **[도메인 구현 예제](./DOMAIN_EXAMPLES.md)**의 패턴 적용
3. 8단계 프로세스 순차 진행

---

## 📖 추가 리소스

### 공식 문서
- [ENTEC React Assets 온라인 가이드](http://redsky0212.dothome.co.kr/entec/react_assets/guide/)
- [프로젝트 README](../README.md)

### 기술 문서
- [React 공식 문서](https://react.dev/)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Redux Toolkit 문서](https://redux-toolkit.js.org/)
- [React Router 문서](https://reactrouter.com/)
- [Shadcn/ui 문서](https://ui.shadcn.com/)

---

## 🔄 문서 업데이트

이 문서들은 프로젝트의 발전과 함께 지속적으로 업데이트됩니다.

**최종 업데이트**: 2026년 1월 20일

---

<div align="center">
  <p><strong>ENTEC React Assets Documentation</strong></p>
  <p>Enterprise Banking Frontend Platform</p>
</div>

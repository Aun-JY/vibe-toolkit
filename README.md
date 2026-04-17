# ⚡ 바이브툴킷 (Vibe Toolkit)

바이브 코딩을 하는 초보 개발자를 위한 실용 웹 도구 모음.
복붙하면 바로 되는 코드 스니펫 + 설명을 제공합니다.

## 🚀 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행 (http://localhost:4321)
npm run dev

# 3. 빌드
npm run build
```

---

## 📁 프로젝트 구조

```
vibe-toolkit/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions 자동 배포
├── public/
│   ├── favicon.svg             ← 사이트 파비콘
│   └── robots.txt              ← SEO 크롤러 설정
├── src/
│   ├── components/
│   │   ├── SEO.astro           ← 메타태그, OG 태그
│   │   ├── Header.astro        ← 상단 네비게이션
│   │   ├── Footer.astro        ← 하단 푸터
│   │   ├── CodeBlock.astro     ← 복사 버튼 있는 코드블록
│   │   └── ToolCard.astro      ← 홈의 도구 카드
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← 모든 페이지 기본 레이아웃
│   │   └── ToolLayout.astro    ← 도구 상세 페이지 레이아웃
│   ├── pages/
│   │   ├── index.astro         ← 루트 → /ko/ 리다이렉트
│   │   └── ko/
│   │       ├── index.astro     ← 한국어 홈
│   │       ├── privacy.astro   ← 개인정보처리방침 (애드센스 필수)
│   │       └── tools/
│   │           ├── index.astro ← 도구 목록
│   │           └── favicon.astro ← 첫 번째 도구 ✅
│   └── styles/
│       └── global.css          ← 전체 디자인 시스템
└── astro.config.mjs            ← Astro 설정
```

---

## 🌐 GitHub Pages 배포 방법

### 1단계: astro.config.mjs 수정

```js
// 커스텀 도메인 없이 github.io 사용 시:
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/vibe-toolkit',  // 레포 이름
});

// 커스텀 도메인 사용 시:
export default defineConfig({
  site: 'https://yourdomain.com',
  // base 없이
});
```

### 2단계: GitHub 레포 Settings 설정

```
Settings → Pages → Source → "GitHub Actions" 선택
```

### 3단계: main 브랜치에 push

```bash
git add .
git commit -m "첫 배포"
git push origin main
```

→ Actions 탭에서 배포 진행 상황 확인 가능. 보통 1~2분이면 완료.

### 커스텀 도메인 연결 (선택)

```
1. 도메인 구매 (가비아, 네임칩 등)
2. DNS → CNAME 레코드 → your-username.github.io 연결
3. GitHub Settings → Pages → Custom domain 입력
4. "Enforce HTTPS" 체크
5. public/ 폴더에 CNAME 파일 생성 (내용: yourdomain.com)
```

---

## ✏️ 새 도구 페이지 추가하는 방법

### 1. 페이지 파일 생성

```bash
# 예: 로딩 스피너 도구 추가
touch src/pages/ko/tools/loading-spinner.astro
```

### 2. 기본 템플릿 복사

```astro
---
import ToolLayout from '../../../layouts/ToolLayout.astro';
import CodeBlock from '../../../components/CodeBlock.astro';

const myCode = `<!-- 여기에 코드 -->`;
---

<ToolLayout
  title="로딩 스피너"
  description="설명을 여기에"
  icon="⏳"
  category="CSS 애니메이션"
  publishDate="2025-02-01"
  keywords={['로딩', '스피너', 'CSS']}
  prevTool={{ title: '파비콘', href: '/ko/tools/favicon/' }}
>
  <h2>로딩 스피너란?</h2>
  <p>설명...</p>
  <CodeBlock code={myCode} lang="css" label="기본 스피너" />
</ToolLayout>
```

### 3. 홈 + 도구 목록에 카드 추가

`src/pages/ko/index.astro`와 `src/pages/ko/tools/index.astro`의 `tools` 배열에 추가:

```js
{
  title: '로딩 스피너',
  description: '...',
  href: '/ko/tools/loading-spinner/',
  icon: '⏳',
  tags: ['CSS', 'Animation'],
  isNew: true,  // 새로 추가된 도구
},
```

---

## 💰 Google AdSense 연결 방법

애드센스 심사를 받으려면:

1. **도메인 필수** (github.io로는 심사 불가)
2. **콘텐츠 15개 이상** 권장
3. **개인정보처리방침 페이지** 있어야 함 (이미 만들어져 있음 `/ko/privacy/`)

심사 통과 후:

```astro
<!-- src/components/SEO.astro 파일에서 주석 해제 -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossorigin="anonymous"></script>
```

광고 삽입 위치 예시 (ToolLayout.astro 내 본문 중간):

```astro
<!-- 광고 영역 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-YOUR_ID"
     data-ad-slot="YOUR_SLOT_ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

---

## 🌍 영어 페이지 추가 방법 (나중에)

```
src/pages/en/
├── index.astro
├── privacy.astro
└── tools/
    └── favicon.astro
```

URL 구조가 이미 `/ko/`로 잡혀 있어서 `/en/`만 추가하면 됨.
Header.astro의 언어 토글 버튼 주석을 해제하면 됩니다.

---

## 📋 완료 체크리스트

### 배포 전
- [ ] `astro.config.mjs`에 `site`와 `base` 설정
- [ ] GitHub 레포 만들기
- [ ] Settings → Pages → GitHub Actions 설정
- [ ] `Header.astro`의 GitHub 링크 본인 레포로 수정
- [ ] `Footer.astro`의 링크 확인

### 콘텐츠 10개 쌓이면
- [ ] Google Search Console 등록 및 사이트맵 제출
- [ ] Google Analytics 연결

### 콘텐츠 20개 쌓이면
- [ ] 도메인 구매
- [ ] 커스텀 도메인 연결
- [ ] Google AdSense 심사 신청

---

## 🛠 기술 스택

- [Astro](https://astro.build) v4
- 순수 CSS (프레임워크 없음)
- Pretendard (한국어 최적화 폰트)
- JetBrains Mono (코드 폰트)
- GitHub Actions (자동 배포)
- GitHub Pages (호스팅)

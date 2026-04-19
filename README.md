# ⚡ 바이브툴킷 (Vibe Toolkit)

> 바이브 코딩 초보 개발자를 위한 실전 도구 모음  
> 코드를 복붙해서 바로 쓸 수 있는 HTML/CSS/JS 스니펫 사이트

🌐 **사이트**: [vibetoolkit.kr](https://vibetoolkit.kr)

---

## 📁 구조

```
vibe-toolkit/
├── index.html              ← 셸 (헤더 + 사이드바 + iframe)
├── home.html               ← 메인 홈 화면
├── sitemap.xml             ← SEO 사이트맵
├── robots.txt              ← 크롤러 설정
├── CNAME                   ← 커스텀 도메인 (vibetoolkit.kr)
├── favicon.svg             ← 사이트 파비콘
│
├── 도구 페이지 (28개)
│   ├── favicon-sample.html
│   ├── floating-button.html
│   ├── meta-tag.html
│   ├── open-graph.html
│   ├── css-variables.html
│   ├── flexbox.html
│   ├── css-grid.html
│   ├── css-animation.html
│   ├── dark-mode.html
│   ├── click-event.html
│   ├── local-storage.html
│   ├── scroll-event.html
│   ├── fetch-api.html
│   ├── form-validation.html
│   ├── responsive-design.html
│   ├── modal-popup.html
│   ├── hamburger-menu.html
│   ├── tab-ui.html
│   ├── sitemap-guide.html
│   ├── google-analytics.html
│   ├── adsense-guide.html
│   └── cookie-banner.html
│
└── 사이트 정보 페이지
    ├── about.html
    ├── contact.html
    ├── privacy.html
    ├── terms.html
    └── sitemap.html
```

---

## 🚀 배포

별도 빌드 과정 없음. GitHub Pages로 바로 서빙됩니다.

```bash
git add .
git commit -m "변경사항 설명"
git push origin main
```

→ push하면 자동으로 `vibetoolkit.kr`에 반영됩니다.

---

## ✏️ 새 페이지 추가하는 법

### 1. HTML 파일 생성

기존 페이지(예: `tab-ui.html`)를 복사해서 내용 수정

### 2. 사이드바에 링크 추가

`index.html`의 `<nav>` 영역에 추가:

```html
<a href="#" class="nav-item" onclick="loadTool('새페이지.html'); return false;">
  <span class="nav-icon">🔧</span>새 도구
</a>
```

### 3. 홈 카드 추가

`home.html`의 해당 카테고리 섹션에 카드 추가:

```html
<div class="tool-card" onclick="parent.loadTool('새페이지.html')">
  <div class="tool-icon">🔧</div>
  <div class="tool-info">
    <h3>새 도구</h3>
    <p>도구 설명</p>
  </div>
  <div class="tool-arrow">→</div>
</div>
```

### 4. sitemap.xml에 추가

```xml
<url>
  <loc>https://vibetoolkit.kr/새페이지.html</loc>
  <lastmod>2026-04-19</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## 🔍 SEO

| 항목 | 상태 |
|------|------|
| Google Search Console | ✅ 등록 완료 |
| 사이트맵 제출 | ✅ 완료 |
| Naver Search Advisor | ✅ 등록 완료 |
| Google Analytics (G-6RZV7FZZBM) | ✅ 설치 완료 |
| canonical 태그 | ✅ 전 페이지 적용 |

---

## 💰 수익화 로드맵

- [ ] 콘텐츠 20개 이상 → Google AdSense 심사 신청
- [ ] 심사 통과 후 광고 삽입

---

## 🛠 기술 스택

- 순수 HTML / CSS / JavaScript (프레임워크 없음)
- GitHub Pages (호스팅)
- 커스텀 도메인: vibetoolkit.kr
- Google Analytics 4

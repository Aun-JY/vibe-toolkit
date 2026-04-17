import { defineConfig } from 'astro/config';

export default defineConfig({
  // ✅ GitHub Pages 배포 시 아래 두 줄을 본인 설정으로 변경하세요
  // site: 'https://your-username.github.io',
  // base: '/vibe-toolkit',   ← 레포 이름이 vibe-toolkit 일 경우
  // 커스텀 도메인 사용 시 base 제거, site만 변경
  // site: 'https://yourdomain.com',

  build: {
    assets: '_assets',
  },

  // i18n 라우팅 (나중에 영어 추가 시 활성화)
  // i18n: {
  //   defaultLocale: 'ko',
  //   locales: ['ko', 'en'],
  // },
});

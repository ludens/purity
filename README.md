# Purity 티스토리 스킨

![Purity Tistory Skin](https://t1.daumcdn.net/cfile/tistory/2131A53355BA10953C)

전체적으로 깔끔한 느낌을 주려고 노력했고, 데스크탑 환경보다는 모바일 환경을 고려해서 만들었습니다.  
데스크탑에서 보는것보다 모바일이나 태블릿에서 더 이쁘게 나옵니다. :)

## 스킨정보

- 데모페이지: <https://puredemo.tistory.com>
- 스킨 소스: <https://github.com/ludens/purity>
- 스킨 다운로드: <https://github.com/ludens/purity/archive/master.zip>
- 컨텐츠 가로폭: 최대 1080px
- 적용폰트: Noto Sans KR, Noto Sans CJK KR, 나눔고딕, 맑은 고딕, sans-serif
- 버전: 3.0

## 스킨 사용시 권장 설정

![Purity Tistory Skin](https://tistory4.daumcdn.net/tistory/1663255/skin/images/purity-skin-settings.png)

홈 설정의 목록 구성 요소는 **내용만**, 기본 설정의 목록 구성 요소는 **목록만**으로 설정하시는 것을 권장합니다.

## 사용한 라이브러리

- CSS Framework: [Pure CSS 3.0.0](https://purecss.io) (로컬 `images/pure-3.0.0.min.css`, CDN 없음)
- 웹폰트·아이콘 CDN 없음. 본문은 시스템 글꼴, 아이콘은 스킨 CSS의 SVG 마스크.

## 변경 이력

### 3.0.0 (2026-08-17)

- Pure CSS 2.0.5 → **3.0.0** (로컬 번들, CDN 없음)
- Google Fonts / Material Icons CDN 제거. 시스템 글꼴 + 인라인 SVG 아이콘
- HTML/CSS/JS 현대화: 시맨틱 랜드마크(`aside`/`main`/`nav`/`header`/`footer`), CSS 변수, `font-weight: 400`
- 홈 커버·사이드바 모듈 미사용 유지, 댓글/방명록은 티스토리 기본 React 위젯(`comment_group` / `guestbook_group`) 사용
- `s_page_rep` 추가로 페이지와 글 분리
- 목록 `list`/`card` 스타일, 썸네일·관련글·이전/다음 네비 보강
- 모바일 메뉴: checkbox `change` 리스너 + CSS `:has` + Escape 닫기, 접근성(`aria-*`) 보강
- 파비콘 `rel="icon"` 수정, viewport 확대 제한 제거, `event.key` 사용
- `index.xml` 구조 수정(tree/contentWidth를 default 안으로), 스킨 버전 3.0
- **주의:** `index.xml` 변경으로 스킨 재적용 시 설정이 초기화됩니다.

### 2.0.0 (2021-03-01)

- Pure CSS 버전업 및 CDN 사용을 제거했습니다.
  - Before: 0.6.0
  - After: 2.0.5
- 사용 Font가 변경되었습니다.
  - Before: 나눔바른고딕(한글), Raleway(영문), Font Awesome(아이콘)
  - After: Noto Sans KR, Material Icons(아이콘)
- jQuery 플러그인을 모두 제거했습니다. (SlickNav, FitVids)
- 티스토리의 인덱스 새로운 치환자에 대응했습니다. (`s_index_article_rep` 등)

### 1.0 (2015-07-30)

- 1.0 버전 첫 공개
- Pure CSS: 0.6.0 버전 사용

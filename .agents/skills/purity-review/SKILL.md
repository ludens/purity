---
name: purity-review
description: Purity 티스토리 스킨 데모를 방문해 UI가 이상하거나 어색한 부분을 찾는다. 스킨 검증, 데모 리뷰, 화면 점검, puredemo, 레이아웃 이상 확인에 사용한다. /purity-review
---

# Purity Review

라이브 데모만 본다. 치환자 문법은 `tistory-skin`이 담당한다. 고치라는 말이 없으면 소스는 건드리지 않고 소견만 낸다.

## 방문 순서

각 URL을 연다. 브라우저 도구가 있으면 데스크톱(≥768px)과 모바일(<768px)을 본다. 없으면 HTML을 받아 마크업·인라인 스타일을 확인한다.

1. https://puredemo.tistory.com — 홈
2. https://puredemo.tistory.com/category — 전체글목록
3. https://puredemo.tistory.com/tag — 태그
4. https://puredemo.tistory.com/guestbook — 방명록
5. https://puredemo.tistory.com/entry/typography — 본문(타이포)
6. https://puredemo.tistory.com/entry/media-embed — 본문(미디어, 다음글만)

로컬 `skin.html` / `style.css`와 어긋나면 데모가 옛 스킨일 수 있다. 소견에 적는다.

## 무엇을 볼지

UI가 깨지거나 어색한 것만 잡는다. 취향 리디자인은 적지 않는다.

공통: 사이드바 검색창, 메뉴 버튼, 모바일 햄버거, 푸터, 가로 넘침, 겹침, 빈 칸, 정렬.

| 화면 | 초점 |
| --- | --- |
| 홈 | `list-result`와 `article-summary` 이중 목록, 구분선, 대표이미지 유무 |
| 목록 | 날짜·제목 한 줄, 빈 댓글 수, 페이징 |
| 태그 | 클라우드 크기·간격 |
| 방명록 | `[##_guestbook_group_##]` 위젯, 제목과 폼 간격 |
| typography | 본문 표·인용·각주, 댓글 위젯, `article-nav` |
| media-embed | 임베드 비율, 다음글만 있을 때 `article-nav` 오른쪽 정렬 |

본문 이미지는 에디터 인라인 `width`/`height`와 스킨 `max-width` 충돌을 먼저 의심한다.

## 출력

심각도 순. 화면마다 최소 한 번은 봤다고 적는다. 이상 없으면 `이상 없음`.

```text
- [화면] 심각도 — 무엇이 어색한지. 근거(선택자·뷰포트). 고치려면 어디.
```

심각도: `깨짐` > `어색` > `잔여`. 같은 원인을 화면마다 반복하지 않는다.

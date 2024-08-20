# TODO
## HTML
- [X] HTML 기본 틀 만들기 - 완료 일시: 2024/08/19
- [X] Subscribe 버튼 눌렀을 때 나올 모달 창 만들기 - 완료 일시: 2024/08/20

## CSS
- [ ] CSS 레이아웃 Figma 구현페이지와 동일하게 수정
- [ ] media query 사용하여 모바일 웹 구현 및 햄버거 메뉴 만들기
- [ ] 사진들 grid에서 flex로 변경하기..
- [X] 모달 창 CSS 입히기 - 완료 일시: 2024/08/20

## JavaScript
- [X] 스크롤 시 버튼 나타나게 만들기 - 완료 일시: 2024/08/20
- [X] 스크롤 시 나타나는 버튼에 마우스 hover 했을 시 아이콘 변경 - 완료 일시: 2024/08/20
- [X] RegEx로 이메일 유효성 검사 스크립트 만들기 - 완료 일시: 2024/08/20

# 구현 명세서
1. 피그마를 참고하여 페이지 구현을 합니다.
2. 모바일 화면도 고려하여 페이지 구현을 합니다.
3. 스크롤시 헤더가 고정되게 합니다. (단, 처음에는 고정된 상태가 아닙니다.)
4. 스크롤 탑 버튼을 구현합니다. 
    1. 스크롤 탑 버튼은 스크롤시 나타납니다.
    2. 스크롤 탑 버튼은 푸터 아래로 내려가지 않습니다.
    3. 스크롤 탑 버튼을 누르면 스크롤이 최상단으로 올라갑니다. (단, 부드럽게 올라가야 합니다.)
5. 구독하기 모달창
    1. 이메일을 입력하고 `Subscribe` 버튼을 클릭하면 모달창이 나타납니다.
    2. 이메일 유효성 검사를 진행해야 합니다. (값이 들어가지 않거나 이메일 형식이 유효하지 않으면 alert 창으로 경고 문구가 떠야합니다.)
    3. 이메일이 잘 입력되었다면 모달창이 뜹니다. 이때 모달창의 `OK! I love HODU` 버튼을 클릭하면 form이 제출되고 모달창이 닫힙니다.

### 참고
- [인프런 HTML/CSS 베이스캠프 강의](https://www.inflearn.com/course/html-css-%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%BA%A0%ED%94%84)
- [Figma 구현 페이지](https://www.figma.com/design/s9RCnA6dSi3QHHeMDFHKE6/EST-%EC%98%A4%EB%A5%B4%EB%AF%B8(BE)_HTML%2FCSS%2FJS?node-id=104924-12&t=bBf7xI1ULuudbZps-0)

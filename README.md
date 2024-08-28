# 프로젝트의 목적
* 이 프로젝트는 고양이 호두를 소개하는 웹 페이지를 구현하는 프로젝트입니다.
* [배포 링크](https://sqrt3.github.io/fe-project)

## 목차
  * [TODO](#todo)
    + [HTML](#html)
    + [CSS](#css)
    + [JavaScript](#javascript)
  * [CSS 개선안 - 선택자를 더 자세하게..](#css---선택자를-더-자세하게)
  * [구현 명세서](#구현-명세서)
  * [구현 화면](#구현-화면)
  * [개발하며 느낀 점](#개발하며-느낀-점)
    + [참고](#참고)

## TODO
### HTML
- [X] HTML 기본 틀 만들기 - 완료 일시: 2024/08/19
- [X] Subscribe 버튼 눌렀을 때 나올 모달 창 만들기 - 완료 일시: 2024/08/20
- [X] CSS에서 유지보수 편하게 선택자를 더 자세하게 구성하기

### CSS
- [ ] (진행중) CSS 레이아웃 Figma 구현페이지와 동일하게 수정 - PC ( 1920 * 1080 ) / Mobile ( 390 * 820 )
- 완벽하게 동일하면 좋겠지만 최대한 비슷하게라도 구현
- [X] media query 사용하여 모바일 웹 구현 - 완료 일시: 2024/08/21
- [X] 버거 메뉴 만들기. flex-direction: column 사용하면 편할듯? - 완료 일시: 2024/08/20
- [X] 사진들 grid에서 flex로 변경하기 - 완료 일시: 2024/08/20
- [X] 모달 창 CSS 입히기 - 완료 일시: 2024/08/20
- [X] 모바일 웹에서 Subscribe 버튼 위치 수정 - 완료 일시: 2024/08/21
- [X] HTML 선택자 작업 뒤 리팩토링 하기

### JavaScript
- [X] 스크롤 시 버튼 및 메뉴 나타나게 만들기 - 완료 일시: 2024/08/20
- [X] 스크롤 시 나타나는 버튼에 마우스 hover 했을 시 아이콘 변경 - 완료 일시: 2024/08/20
- [X] RegEx로 이메일 유효성 검사 스크립트 만들기 - 완료 일시: 2024/08/20
- [X] 스크롤 시 최상단으로 이동 버튼이 푸터 아래로 내려가지 않게 수정 - 완료 일시: 2024/08/22 ( 요소의 위치와 position 속성 사용 )

## CSS - 선택자를 더 자세하게..
1. 클래스의 재사용: 중복되는 스타일을 공통 클래스로 정의하여 재사용합니다.
2. 상위 선택자 줄이기: 선택자의 깊이를 줄이고, 가능한 경우 단순한 클래스 이름을 사용합니다.
3. 미디어 쿼리 단순화: 공통 스타일을 기반으로 미디어 쿼리 내에서 스타일을 변경합니다.

## 구현 명세서
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

## 구현 화면
|모바일 헤더|모바일 푸터|모바일 네비게이션 바|
|----|---|---|
|![sqrt3 github io_fe-project_(Hodu Mobile)-first](https://github.com/user-attachments/assets/cd494ac6-cd86-4629-b4e4-c44fbda54628)|![sqrt3 github io_fe-project_(Hodu Mobile)](https://github.com/user-attachments/assets/61d1d729-0e2d-4c91-b065-ec310dea841e)|![sqrt3 github io_fe-project_(Hodu Mobile)-nav](https://github.com/user-attachments/assets/3390a996-25ed-4c25-bfd9-f626b3fce755)|

|PC 메인화면|PC 이메일 유효성 검사 실패|PC 이메일 유효성 검사 성공|
|---|---|---|
|![sqrt3 github io_fe-project_(PC_1920_1080)](https://github.com/user-attachments/assets/73d32f33-93b1-4c3f-9290-406f414bd814)|![sqrt3 github io_fe-project_(PC_1920_1080)-email-validator-fail](https://github.com/user-attachments/assets/9f7f3108-b4c7-49aa-bc84-5b0a36eaac2e)|![sqrt3 github io_fe-project_(PC_1920_1080)-email-validator-success](https://github.com/user-attachments/assets/adb36a50-472f-4dc4-b1c3-7d65bddb69a2)|
|PC 갤러리|PC 스크롤 탑 버튼 호버|PC 스크롤 탑 버튼 요소|
|![sqrt3 github io_fe-project_(PC_1920_1080)-gallery](https://github.com/user-attachments/assets/99459268-0d40-4a9a-81a4-78a32f46ef7e)|![sqrt3 github io_fe-project_(PC_1920_1080)-hover](https://github.com/user-attachments/assets/2b7fdb9f-20b8-4eb8-8032-9610f4c9313f)|![sqrt3 github io_fe-project_(PC_1920_1080)-topbtn](https://github.com/user-attachments/assets/031e6689-ab40-471f-9342-ec929ca52c90)|

  
## 개발하며 느낀 점
프론트엔드를 거의 만져본 적이 없었는데, 이번 프로젝트를 진행하면서 HTML의 시멘틱 구조, CSS 선택자의 우선 순위, Flexbox의 특징 등<br />
여러 가지를 한꺼번에 배우고 해결할 수 있었습니다.<br />

특히 Flexbox를 사용할 때, 여백이 없는 상태에서 화면의 왼쪽으로 자꾸 붙는 상황에 직면했었는데,<br />
이를 해결하면서 많은 것을 배울 수 있었습니다.<br />

이번 기회를 통해 HTML과 CSS 작업 시 어떤 태그를 사용하는 것이 좋을지<br />
그리고 접근성 측면에서 어떻게 대응해야 하는지를 배우게 되었습니다.<br />

한 가지 아쉬운 점은 Figma에서 구현한 디자인과 완벽하게 일치시키는 것이 목표였지만<br />
경험 부족으로 인해 몇 군데 미세하게 일치하지 않는 부분이 있었습니다.<br />

Media Query를 사용하여 모바일 화면에서도 적절히 보이게 하는 작업이 쉽지 않았지만<br />
요즘 대부분의 사람들이 모바일로 웹을 본다는 점을 생각하면 꼭 필요한 작업이라고 생각됩니다.

### 참고
- [인프런 HTML/CSS 베이스캠프 강의](https://www.inflearn.com/course/html-css-%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%BA%A0%ED%94%84)
- [Figma 구현 페이지](https://www.figma.com/design/s9RCnA6dSi3QHHeMDFHKE6/EST-%EC%98%A4%EB%A5%B4%EB%AF%B8(BE)_HTML%2FCSS%2FJS?node-id=104924-12&t=bBf7xI1ULuudbZps-0)

# 투두리스트 리액트로 만들어보기!
## 컴포넌트 설명
### TodoTemplate
  - 화면을 가운데로 정렬시켜주며, 앱 타이틀(일정 관리)을 보여 줍니다.
  - children으로 내부 JSX를 props로 받아와서 렌더링해 줍니다.

### TodoInsert
  - 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다. state를 통해 인풋의 상태를 관리합니다.

### TodoListItem
  - 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트 입니다. todo 객체를 props로 받아와서 상태에 따라 다른 스타일 UI를 보여줍니다.

### TodoList
  - todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의todoListItem 컴포넌트로 변환하여 보여줍니다.


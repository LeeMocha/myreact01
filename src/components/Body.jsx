
// ** 리액트 훅 (HOOK)
// => 클래스 컴포넌트가 가지고 있던 유용한 기능을 
//    함수컴포넌트에서도 사용가능하도록 개발하여 제공하는 기능들
//    use~~ 로 명명됨 (useEffect, useContext, useReducer, useCallBack, useMemo 등)
//    HOOK(갈고리) : 클래스 기능을 낚아채듯 가져와 사용한다데서 유래..

// ** useRef (Reference)
// => DOM 요소를 직접 제어 할 수 있음. 
//    ( DOM 노드, 엘리먼트, 리액트 컴포넌트의 주소값 참조 가능
//      JS 비교 : document.getElementById('root')   ) 

// => useRef는 상태 값을 참조하되 그게 렌더링을 일으키지는 않게 하기 위해 사용하는 리액트 훅

// => current 속성을 가지고 있는 객체를 반환. 
//    인자로 넘어온 초깃값을  이 current 속성에 할당하며 이 속성은 값을 변경하여도
//    리액트 컴포넌트는 리렌더링 되지 않으며,
//    리액트 컴포넌트가 리렌더링 되는 경우도 이 속성의 값을 잃지 않음. 

// => ref 는 렌더링 중에 읽거나 쓰려고 할 경우 순수기능을 잃고 예상치 못한 결과를 낼 수도 있어서
//    event handler 에서 주로 사용함.

// => 입력폼 초기화, 포커스하기 등에 사용

// 1) JSX 컴포넌트 기본규칙
// => 컴포넌트명은 대문자로 시작 (1컴포넌트 1화일, 대부분 컴포넌트명 과 화일명 동일)
// => {JS 표현식} : 기본자료형, 산술식,..객체, 배열 등
// => 단, 컨텐츠 또는 값(리터럴) 을 표현하는 위치에서
//    객체, 배열명 직접사용은 불허
// => class속성은 class가 JS 예약어 이므로 className 으로 사용
// => 모든 Tag 는 닫힘 규칙 
// => 최상위 Tag 규칙 (필요시 <div> 또는 <React.Fragment> Tag 로 감싸줌)
// => 조건부 랜더링 : 삼항식({} 내에서 가능), 조건문(JSX 에서는 사용불가능)

// 2) Css, 스타일 적용하기
// => 인라인 스타일링 : style={{스타일...}}
//    HTML 의경우 <h1 style="color:black; backgroundColor:Orange">
// => 스타일파일 분리
//  -> 일반 css 화일
//    - Body.css (컴포넌트화일명 과 동일)  ,
//    - import './Body.css' : 컴포넌트 imnport 와 달리 real_File_path 만 명시함
//  -> Sass (syntactically awesome stylesheets, 사스)
//    - 자주 사용되는 CSS 전처리기 (pre-processor) 중 하나임.
//    - 확장된 CSS 문법을 사용하여 CSS 코드를 쉽게 작성 할 수 있도록 해주며
//    - 코드의 재활용성과 가독성을 높여줌
//    - 확장자 .scss  .sass 를 지원하고 이 둘은 문법의 차이가 있으며
//       .scss 문법이 더 일반적임.
//    - 주요 차이점 : .sass 는 중괄호와 {} 와 세미콜론 ;  을 지원하지 않음
//    - 여러 파일에서 사용되는 내용은 따로 분리하여 관리 
//      (utils.scss 라는 파일명 주로 사용됨)

// 3) 클래스명 중복 방지 를 위한 이름 규칙 (Naming Rule)
// => App.css 참고 하면  컴포넌트명-클래스명 형식으로 작성
// => BEM Naming : BEM 규칙을 준주하며 용도를 명확하게 포함하여 작성
//    - BEM (Block , Element, Modifier)
//    - Block: 가장 큰 단위로 독립적인 개체를 의미
//    - Element: Block을 구성하는 단위로 Block에 속하며 BEM의 Element는 중첩하지 않는다.
//    - Modifier: 상태를 뜻하는데, 특정한 행동 또는 동작을 의미.

// ** Props, 컴포넌트에 값 전달하기
// => Props(Properties)객체 : 부모에서 자식으로 값 전달
// => 그러므로 Body 컴포넌트에 Props 로 값을 전달하기위해서는
//    App 컴포넌트에서 전달해야함. ( name 값을 Body 로 전달)

// ** React Event (Html 과 차이점) 
// => 이벤트 핸들러 카멜표기  
// => 콜백함수처럼 함수 그자체를 전달
// => onClick={onClickHandler}
// => 기본이벤트 제거 ( return false 대신 e.preventDefault() 명시적으로 호출해야함 )

// ** 이벤트객체 활용 실습

// ** State

export default function Body (props) {

    // ** 부모로 부터 전달된 props 확인
    // => props 객체 구조 분해 적용
    console.log(props)
    const {name , country}   = props;

    return (
        <div className="body">
            <h2>여기는 Bodt 영역 입니다 ~~</h2>
            <h3>* props.name = {name} , props.country={country}</h3>
        </div>
    );
}
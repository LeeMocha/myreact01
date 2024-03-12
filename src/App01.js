import './App.css';
import Footer from './components/Footer';
import {data as recipes} from './components01/recipeData'
import Menu from './components01/Menu';

// ** Counter App
// => 숫자 더하기, 빼기만 있는 초간단 앱

// ** 요구사항 분석
// => UI
//    -> 1 Page 에 Count 버튼이 있는 Controller 와 결과를 출력하는 Viewer 2개 영역 
//       즉, App.js 외에 Controller,  Viewer 2개의 컴포넌트로 구성
//    -> Controller : 6개의 버튼 ( -1, -10, -100, +100, +10, +1 )
//    -> css : 적절하게 중앙에 위치하도록 App.css 수정

// => 기능구현
//    -> State 이용
//    -> Controller 의 버튼을 클릭하면 State값 변경 -> Viewer에 전달되어 출력됨
//    -> State 정의 위치 비교
//       ( Controller,  Viewer 사이는 Props로 전달 불가, 그러므로 부모인 App 에 정의 )

function App() {

  return (
    <div className="App">
      
      <h2>* 요리 백과 *</h2>
      <Menu recipes={recipes}/>
      <Footer/>
    </div>
  );
}

export default App;

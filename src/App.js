import './App.css';
import Body from './components02/Body01';
import Footer from './components/Footer';
import MyHeader from './components/Header';
import Recipe from './components01/Recipe';
// ** import
// => 컴포넌트는 MyComp from real_File_path; 
//    내부 코드에서 MyComp 이름으로 인식


function App() {
  // 실습 : 객체를 정의하고 컴포넌트로 전달하여 출력하기
  // Test1) Header 로 전달
  const bestDress ={
    color : 'Red',
    style : 'long',
    price : 99000,
    size : ['small', 'medium', 'large']
  }
  
  // Test2) Body 로 전달
  const name = "GreenComputer";

  const recipe = {
    name : "차돌된장찌개", 
    ingredients : [{name : "소금", amount : "50ml"},
    {name : "차돌박이", amount:"600g"},
    {name : "호박", amount:"100g"},
    {name : "된장", amount:"50ml"}], 
    steps : ["1단계", "2단계"]
  }


  return (
    <div className="App">
      <MyHeader className="App-header" bestDress={bestDress} />
      <Body name={name} country={'경기도 성남시'}/>
      <Recipe {...recipe}/>
      <Footer />
    </div>
  );
}

export default App;

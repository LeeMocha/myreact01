// ** 1컴포넌트 1화일
// => 그러므로  export default 많이 사용됨.

function Header (props){
    return (
        <header>
            <h1>** Header **</h1>
            <h3>안녕 하세요 ~~</h3>
            <p>금주의 Best Dress : color={props.bestDress.color}, style={props.bestDress.style}, price={props.bestDress.price}</p>
            <p>size는 {props.bestDress.size.length} 개의 종류가 있습니다.</p>
        </header>
    );
}

export default Header;
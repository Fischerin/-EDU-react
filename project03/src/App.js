
import './App.css';
import MenuItem from './component/MenuItem';


function App() {


  /*  
  컴포넌트란? 나만의 커스텀 태그다!
  - 반복되는 코드를 하나로 묶어서 컴포넌트
  - 원하는 코드를 묶어서 하나의 태그로 사용한다.

조건)
  1. 반드시 대문자로 시작해야한다.
  -> 기존 HTML태그(DOM요소)와 구분하기 위함
  -> 예를들어 버튼이라는 컴포넌트와 버튼이라는 HTML태그를 구분하기 위해서 
      컴포넌트는 Button / 태그는 button
  
  */

  let price = 4000
  let salePrice = 2000

  return (
    <div>
      <MenuItem name = "이름" menu="아메리카노" price={salePrice}></MenuItem>
      <MenuItem name = "이름2" menu="민초"price={salePrice}></MenuItem>
      <MenuItem name = "이름3" menu="레인보우샤베트" price={price}></MenuItem>
    </div>
  );
}

//App 컴포넌트를 내보내겠습니다.
export default App;

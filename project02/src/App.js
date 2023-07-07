import logo from './logo.svg';
import './App.css';

function App() {

  let fontColor = prompt("색깔을 입력해주세요.")
  let backColor = prompt("배경색 입력해주세요")

  // let name = "승환"
  
  let name = prompt ("이름을 말해주세요")


  // JSX문법 규칙 4번째 
  //JSX 문법에서 스타일 적용 시, 객체 형태로 사용해야 한다.
  const style = {
    color : fontColor,
    backgroundColor: backColor,
    textAlign: 'center'
  
  }

  let toDay = new Date();
  console.log(toDay)
  //해당 년을 뽑아오기
  let year = toDay.getFullYear()
  console.log(toDay.getFullYear())
  //해당 월을 뽑아오기
  let month = toDay.getMonth()+1
  console.log(toDay.getMonth()+1)
  //해당 일
  let date = toDay.getDate()
  console.log(toDay.getDate())

  let season = ""

  if(month >= 3 && month <= 5){
    // console.log("봄");
    season = "봄"
  }else if (month >= 6 && month <=8){
    season = "여름"+"🎊"
    // print("여름")
  }else if (month >= 9 && month <=11){
    season = "가을"
    // print("가을")
  }else{
    season = "겨울"
    // print("겨울")
  }


  return (
    // <h1 style={style}>{name}</h1>,
    <div>
      <h1>{year}{month}{date}</h1>,
      <hr></hr>,
      <h2 style={style}>{name}님 지금은 {season}입니다. 좋은 하루 보내세요!</h2>
    </div>
    


  
    




  );
}

export default App;

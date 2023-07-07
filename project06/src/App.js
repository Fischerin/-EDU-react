
import './App.css';
import{Routes, Route, useNavigate} from 'react-router-dom'
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import Board from './pages/Board';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, ButtonGroup } from 'react-bootstrap';




/* 라우팅 기능을 사용해보자! 

      사용자가 요청한 URL에 따라 그에 적합한 페이지를 보여주는 것

      EX) 사용자가 "메인페이지 보여줘 <- Main Page 제공

      로그인 페이지 보여줘 <- Login Page 제공

      -> 이러한 과정을 Routing이라고 한다. 

- 리액트는 Single Page Application 
  리액트는 single page application 이므로, 신규 페이지를 불러오는 것이 아니라
  하나의 페이지에서 내가 필요한 데이터만 가져와서 교체

-> 우리는 'React-Router-Dom' 사용

1) 설치: npm install react-router-dom
2) BrowserRouter import 
- 사용자가 입력한 주소를 감지하는 역할
- 내가 사용할 Component를 감싸주는 역할


3) Routes - Route
3-1) Routes : 여러 경로(Route)를 감싸서, 하위 경로 중 조건에 맞는 경로 하나만 렌더링 해주는 역할
ex) 클라이언트  "나 A페이지 줘"
Routes : "ㅇㅇ 여기있어" 하고 Route를 준다
(과거에는 switch라는 문법이름으로 쓰였다)

3-2) Route : 경로
-> 필수속성 2가지(path, element)
->path (경로): 사용자가 이렇게 요청 했을 때
->element(컴포넌트) : 이 컴포넌트를 보여주세요!

*/



function App() {


  const nav=useNavigate()



  return (
    <div>
      
        <h1>Welcome to React Router!</h1>

        {/* 상단바 생성 */}

       <div>
          <ButtonGroup aria-label="Basic example">
            <Button variant="dark" onClick={()=>nav('./')}>Main</Button>
            <Button variant="warning" onClick={()=>nav('./login')}>Login</Button>
            <Button variant="dark" onClick={()=>nav('./about')}>About</Button>
            <Button variant="warning"onClick={()=>nav('./board')}>Board</Button>
            <Button variant="dark" onClick={()=>nav('./detail')}>Detail</Button>


          </ButtonGroup>
        </div>



        {/* 필요한 페이지 가져다주는 애 빼먹어선 안됨! */}
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/board' element={<Board/>}></Route>
          <Route path='/detail/:num' element={<Detail/>}></Route>

          

          {/* 설정한 페이지 외 모든 페이지에서 떠야한다. */}

          <Route path='*' element={<NotFound/>}></Route>


        </Routes>








    </div>
  );
}

export default App;

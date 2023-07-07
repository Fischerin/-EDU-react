


import React from 'react'
import MemberBox from './component/MemberBox';


function App() {


    /*
    상위 컴포넌트에서 보낸 값을 하위 컴포넌트에서 받는 방법
    함수의 형태이기 때문에, 값은 함수의 매개변수를 통해서 받는다.

    Case 1. (props) => (~ props.name~)

    Case 2. 객체 비구조화 할당
    - 객체 안에 속성만 꺼내서, 마치 그것이 변수인 것처럼 사용
    */

    // let person = {
    //     name : '요나레임',
    //     gender : 'W'
    // }

    // console.log(person.name);

    // let {name, gender} = {
    //     name : '요나레임2',
    //     gender : 'W'
    // }

    // console.log(name);





    return(

    
    <div>
        <div>
            <MemberBox name = '강유빈' gender = '여' song = 'ciki-사이' > </MemberBox>
            <MemberBox name = '송솔' gender = '남' song = 'BTS - 다이너마이트'></MemberBox>
            <MemberBox name = '김도운' gender = '남' song = '10cm - 부동의 첫사랑'></MemberBox>
        </div>
    </div>
    


    );
}



export default App;

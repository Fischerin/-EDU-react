import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {


    /* 화면에 영화 랭킹을 띄워주자! */

    let movieUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230601';
  
    /* 방법 1. jQuery + aJax 방식
      -> 리액트에서는 jQuery 라이브러리를 사용할 필요가 없기 때문에 효율적이지 않음

    방법2. fetch API
    방법3. Axios
    
    
    Q. API를 언제 가지고 와야할까?
    A. 화면이 MOUNT된 직후! useEffect 사용!
    왜? 몇 초 동안 화면 자체가 안뜨면 사용자가 불편하니까
    화면 먼저 띄운 뒤 데이터 가져오면 괜찮다!*/


      useEffect(()=>{
        getDataWithAxios()
      }, [])
      
    // useEffect(()=>{getDataWithFetch()
    // }, [])

    // Case 1. fetch
    // const getDataWithFetch = () =>{
    //   console.log('getDataWithFetch')

    //   fetch(movieUrl)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(()=>console.error('error!'))
    // }


//     만약 프론트에서 백으로 보내줘야할 정보가 있따면?

    // fetch(movieUrl, {
    //   id: 'seonzeti'
    // })


    // case2. axios 
    const getDataWithAxios = ()=>{
      console.log('getDataWithAxios');
      axios(movieUrl)
      .then(res => console.log(res.data))



      // 만약 프론트에서 백으로 보내줘야할 정보가 있따면? 

      // 1. get 방식으로 데이터를 보내주는 경우
      axios.get(movieUrl, {id: ''})
      .then(res =>console.log(res))


      // 2. post 방식? axios.post()


    }

  return (

    <div className='APP'>
      <h1>🎊6월의 영화 데이터</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      <div></div>
    </div>
  )
}

export default App

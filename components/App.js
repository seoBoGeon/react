import React, {useState, useEffect} from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";
import '../css/new.css'

// css
// import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';  

import MyPage from './MyPage';

import Register from './Register';

const App =()=> {
  const [name, setName] = useState('');
  const [mode, setMode] = useState('Main'); //Main, MyPage, Register
  const userData = {
    email : 'atio132@naver.com',
    password: '123',
    name : '서보건',
    affiliation : '라인컴퓨터아트학원',
    major : '프론트엔드',
    phone : '010-0000-0000'
  }
  const navigate = useNavigate();
  const toInfo =(e)=>{
    e.preventDefault();
    setMode('MyPage');
    navigate('/MyPage');
    console.log(mode);
  }
  const createDone =(e)=>{
    e.preventDefault();
    setMode('Main');
    navigate('/');
    alert('회원가입이 완료되었습니다.');
    console.log(mode);
  }
  const toRegister =(e)=>{
    e.preventDefault();
    setMode('Register');
    navigate('register_check');
    console.log(mode);
  }
  const getContents =()=>{
    let contents = [];
    if(mode === 'Main' || mode === 'MyPage'){
      contents.push(
        <HeaderAdmin userName={userData.name} name={name}/>,
          <Routes>,
            <Route path='/' element={<LoginForm userData={userData} toInfo={toInfo} setName={setName} toRegister={toRegister}></LoginForm>} />,
            <Route path='/MyPage' element={<MyPage name={name} navigate={navigate} userData={userData}></MyPage>} />,
            <Route path='/register_check' element={<Register createDone={createDone}></Register>} />,
          </Routes>,
        <Footer/>
      );
    }else if(mode === 'Register'){
      contents.push(
        <Routes>,
          <Route path='/register_check' element={<Register createDone={createDone}></Register>} />,
        </Routes>
      );
    }return contents;
  }
  
  return (
    <div className="App">
      {getContents()}
    </div>
  );
}

export default App;
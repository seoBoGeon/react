import React from 'react';
import { Link } from 'react-router-dom'
import '../css/new.css'

const LoginForm =(props)=> {
    const _toInfo = props.toInfo;
    const _userData = props.userData;
    const _setName = props.setName;
    const _toRegister = props.toRegister;
    const checking =(e)=>{
        e.preventDefault();
        const email_element = document.getElementById('email_val');
        const pass_element = document.getElementById('password_val')
        if(_userData.email === email_element.value && _userData.password === pass_element.value) {
            alert('로그인에 성공했습니다.');
            _toInfo(e);
            _setName(_userData.name);
        }else{
            alert('로그인에 실패했습니다.');
        }
        console.log(_userData);
    }
        return (
            <section className="main">
                <div className="m_login">
                <h3><span><img src={require("../img/main/log_img.png")} alt="" />
                </span>LOGIN</h3>
                <div className="log_box">
                    <form  onSubmit={(e)=>{checking(e)}}>
                    <div className="in_ty1">
                        <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                        <input type="text" id="email_val" name="email" placeholder="email" />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2">
                            <img src={require("../img/main/m_log_i2.png")} alt="" />
                        </span>
                        <input type="password" id="password_val" placeholder="비밀번호" />
                    </div>
                    <ul className="af">
                        <li><Link to={'/register_check'} onClick={(e)=>_toRegister(e)}>회원가입</Link></li>
                        <li className="pwr_b"><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                    <Link to={'/userPage'} />
                    <button className="s_bt" type="submit">로그인</button>
                    </form>
                </div>
                </div>
            </section>
        );
}

export default LoginForm;
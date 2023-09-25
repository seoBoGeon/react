import React from 'react';
import { throttle } from "lodash";
import '../css/new.css'

const MyPage =(props)=> {
  const _userData = props.userData;
  const emailParts = _userData.email.split("@");
  const phoneParts = _userData.phone.split("-");
  return (
    <div>
            <section className="sub_wrap" >
                <article className="s_cnt re_1 ct1">
                    <div className="li_top">
                        <h2 className="s_tit1" style={{textAlign: "center"}} >회원정보</h2>
                        <form action='/Register' method="post" name="frm" /* onSubmit={update()} */>
                            <div className="re1_wrap">
                                <div className="re_cnt ct2">
                                    <table className="table_ty1">
                                        <tr className="re_email">
                                            <th>이메일</th>
                                            <td>
                                                <input id="email_val" type="text" name="email1" value={emailParts[0]} readOnly />
                                                <span className="e_goll">@</span>
                                                <input id="email_val" type="text" name="email1" value={emailParts[1]} readOnly />
                                            </td>
                                        </tr>
                                        <tr hidden>
                                            <th hidden>비밀번호</th>
                                            <td hidden>
                                                <input id="pwd_val" type="password" name="password1"
                                                       placeholder="비밀번호를 입력해주세요." />
                                            </td>
                                        </tr>
                                        <tr hidden>
                                            <th hidden>비밀번호 확인</th>
                                            <td hidden>
                                                <input id="pwd_cnf_val" type="password" name="password2"
                                                       placeholder="비밀번호를 다시 입력해주세요." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>성명</th>
                                            <td>
                                                <input id="name_val" type="text" name="userName" value={_userData.name} readOnly />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>소속 기관</th>
                                            <td>
                                                <input id="affiliation_val" type="text" name="affiliation" value={_userData.affiliation} readOnly />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>전공</th>
                                            <td>
                                                <input id="major_val" type="text" name="major" value={_userData.major} readOnly />
                                            </td>
                                        </tr>
                                        <tr className="tr_tel">
                                            <th>핸드폰</th>
                                            <td>
                                                <input id="phone1_val" name="phone1" max="999" value={phoneParts[0]} readOnly />
                                                <span className="tel_dot">-</span>
                                                <input id="phone2_val" name="phone2" max="9999" value ={phoneParts[1]} maxlength="4" readOnly />
                                                <span className="tel_dot">-</span>
                                                <input id="phone3_val" name="phone3" max="9999" value ={phoneParts[2]} maxlength="4" readOnly />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            {/* <div className="btn_confirm">
                                <button className="bt_ty bt_ty2 submit_ty1" type="submit">정보 수정</button>
                            </div> */}
                        </form>
                    </div>
                </article>
            </section>
        </div>
  )
}

export default MyPage;
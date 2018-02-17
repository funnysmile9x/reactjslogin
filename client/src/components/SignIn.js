import React, { Component } from 'react';
// tự reload tai trang
import {
    Link
  } from 'react-router-dom'
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
          email:'',
          password:'',
        }
    }
    signUp(){
        console.log('this.state', this.state);
    }
    render() {
        return (

<div className="login-screen">
    <div className="login-center">
        <div className="container min-height" style={{marginTop: 20}} >
        	<div className="row">
                <div className="col-xs-4 col-md-offset-8">
                    <div className="login" id="card">
                    	<div className="front signin_form"> 
                        <p>Đăng nhập</p>
                          <form className="login-form">
                              <div className="form-group">
                                  <div className="input-group">
                                      <input type="email" className="form-control" placeholder="Địa chỉ Email"/>
                                      <span className="input-group-addon">
                                          <i className="glyphicon glyphicon-envelope"></i>
                                      </span>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <div className="input-group">
                                      <input type="password" className="form-control" placeholder="Mật khẩu"/>
                                      <span className="input-group-addon">
                                          <i className="glyphicon glyphicon-lock"></i>
                                      </span>
                                  </div>
                              </div>
                              <div className="checkbox">
                              <label><input type="checkbox"/>Ghi nhớ tài khoản.</label>
                              </div>
                              
                              <div className="form-group sign-btn">
                                  <input type="submit" className="btn" value="Đăng nhập"/><br />
                                  <a href="" className="forgot">Quên mật khẩu?</a>
                                  <p><Link to="sign-up" id="flip-btn" className="signup signup_link">Đăng ký một tài khoản mới</Link> </p>
                              </div>
                          </form>
                        </div>
                        <div className="back signup_form" style={{opacity: 0}} > 
                          <p>Sign Up for Your New Account</p>
                          {/* <form className="login-form">
                              <div className="form-group">
                                  <div className="input-group">
                                      <input type="text" className="form-control" placeholder="Username"/>
                                      <span className="input-group-addon">
                                          <i className="glyphicon glyphicon-user"></i>
                                      </span>
                                  </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <input type="text" className="form-control"/>
                                  <span className="input-group-btn"><button type="button" className="btn btn-cyan"><span className="fa fa-refresh"></span></button></span>
                                </div>
                              </div>
                              <div className="form-group">
                                  <div className="input-group">
                                      <input type="password" className="form-control" placeholder="Confirm Password"/>
                                      <span className="input-group-addon">
                                          <i className="glyphicon glyphicon-lock"></i>
                                      </span>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <div className="input-group">
                                      <input type="email" className="form-control" placeholder="Email"/>
                                      <span className="input-group-addon">
                                          <i className="glyphicon glyphicon-envelope"></i>
                                      </span>
                                  </div>
                              </div>
                              
                              <div className="form-group sign-btn">
                                  <input type="submit" className="btn" value="Sign up"/>
                             
                                  <p>You have already Account So <a href="#" id="unflip-btn" className="signup">Log in</a></p>
                              </div>
                          </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        );
    }
}

export default SignIn;






import React, { Component } from 'react';
// tự reload tai trang
import {
    Link
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        background: '#FFFF99',
        transform: 'translate(-50%, -50%)'
    },

};
class SignIn extends Component {
    //state lưu trử giá tri input , các control
    // state dc tao trong constructor

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phone: '',
            password: '',
            modalIsOpen: false

        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.handleClickSignUp = this.handleClickSignUp.bind(this)
    }
    onChange = (e) => {
        //tao ra 1 biến target
        var target = e.target;
        var email = target.name;
        var value = target.value;
        // luu lan luot email
        this.setState({
            [email]: value
        });
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
        // chuyen den trang dang nhap
         this.props.history.push("/sign-in");
    }

    onSubmit = (e) => {
        console.log(this.state)
    }

  
    handleClickSignUp = () => {
        let that = this
        // console.log("user", this.state.email)
        // console.log("pass", this.state.password)
        axios.post('http://localhost:3001/insert', {
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        }).then(function (response) {
            console.log(response);

            // toast("Đăng kí thành công!", {
            //     position: toast.POSITION.BOTTOM_RIGHT
            // });
            // that.props.history.push("/sign-in");
            that.setState({ modalIsOpen: true });

        }).catch(function (error) {
            console.log('err:', error)
        });
    }



    render() {
        // Tach fie html rieng, file js controler rieng, 
        // hien tai dang lam  test thi vay, nhung sau nay phai tach reing 
        return (


            <div className="login-screen">
                {/* <ToastContainer /> */}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    
                    style={customStyles}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"

                    }}>
                    
                    <div id="full_description">
                        <p>Bạn đã đăng kí thành công, chuyển đến trang đăng nhập</p>
                    </div>
                
                    <button type="button" className="btn btn-danger" onClick={this.closeModal}>Đồng ý</button>
               
                </Modal>

              

                <div className="login-center">
              
                    <div className="container min-height" style={{ marginTop: 20 }} >
                        <div className="row">
                            <div className="col-xs-4 col-md-offset-8">
                                <div className="login" id="card">
                                    <div className="front signin_form">
                                        <p>Đăng ký tài khoản</p>
                                        <form className="login-form" onSubmit = {this.onSubmit} >
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Họ tên"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.onChange}

                                                />
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-user"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <div className="input-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Địa chỉ email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                // onChange={(event) => this.handleUserInput(event)}
                                                //onBlur={this.handleBlurInputEmail}
                                                />
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-envelope"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="tel" className="form-control" placeholder="Số điện thoại"
                                                    name="phone"
                                                    value={this.state.phone}
                                                    onChange={this.onChange}
                                                />
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-phone"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="password"
                                                    className="form-control"
                                                    placeholder="Mật khẩu"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChange}

                                                />
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group sign-btn">
                                            <input
                                                type="button"
                                                className="btn"
                                                value="Đăng Ký"
                                                onClick={this.handleClickSignUp}
                                            // su kien nut dang ky dau chua them
                                            // them vo di
                                            />
                   
                                            <p>Đã có tài khoản ? <Link to="/sign-in" id="unflip-btn" className="signup">Đăng nhập</Link></p>
                                        </div>

                                          {/* <button type="button" className="btn" onClick={this.openModal}> open modal</button> */}
                                        </form>
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






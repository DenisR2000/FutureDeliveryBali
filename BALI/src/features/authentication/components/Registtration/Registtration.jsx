import React from 'react';
import '../login/Login.css'
import { Role } from '../Role'
import loadingAnimation from '../../../../assets/gifs/Loading_icon.gif'
import { HOST } from '../../../../data/constants/constants';

class Registtration extends React.Component {

    constructor(props) {
        super(props)
        this.makeRequest = this.makeRequest.bind(this)
        this.onClickPasswordVisible = this.onClickPasswordVisible.bind(this);
        this.handleForm = this.handleForm.bind(this)

        this.state = {
            userName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
            error: "",
            loading: ""
        }
    }

    onClickPasswordVisible(e) {
        e.preventDefault()
        var inp_password = document.getElementById('password')
        if (inp_password.type == 'password') {
            inp_password.type = 'username'
        } else {
            inp_password.type = 'password'
        }
    }

    async makeRequest() {
        console.log(this.state.email);
        try {
            if (this.state.userName === undefined || this.state.password === undefined) {
                return 0;
            }
            const datasToSend = {
                userName: this.state.userName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.passwordConfirm,
            }
            const response = await fetch(`${HOST}/api/Account/Register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datasToSend)
            })

            const data = await response.json()
            if (response.ok === true) {
                console.log(data)
                sessionStorage.setItem('access_token', data.access_token);
                sessionStorage.setItem('userId', data.userId);
                sessionStorage.setItem('roles', data.roles);
                this.setState({ error: "" })
                data.roles.forEach(role => {
                    if (role == Role.MainAdmin || role == Role.Admin) {
                        window.location = '/'
                    }
                    else if (role == Role.Developer) {
                        window.location = `/`
                    }
                    else if (role == Role.User) {
                        window.location = '/'
                    }
                })
            } else {
                this.setState({ error: data.error, loading: "" })
                console.log(data);
                console.log(response.status, response.error)
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    handleForm(e) {
        e.preventDefault()
        this.setState({ loading: loadingAnimation })
        
        const { userName, lastName, password, email, passwordConfirm } = e.target
        const userNameValue = userName.value;
        const lastNameValue =  lastName.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        const confirmPassswordValue = passwordConfirm.value;
        //console.log(userNameValue, " ", lastNameValue, " ", emailValue,  " ", passwordValue,  " ", confirmPassswordValue);=
        this.setState({
            userName: userNameValue,
            lastName: lastName.value,
            email: email.value,
            password: passwordValue,
            passwordConfirm: passwordConfirm.value,
        }, () => this.makeRequest())
    }

    render() {
        
        return(
            <>
                <div id='main__container' className="main__container">
                    <form onSubmit={this.handleForm} className="main__container-login">
                        <div className="header__logo__container">
                            <span className="span" style={{ color: "#333333", borderRadius: "5px", borderColor: "#333333", padding: "5px" }}>Logo</span> 
                            <span className="service__name" style={{ color: "#333333" }}>Service name</span> 
                        </div>
                        <div style={{ marginBottom: "20px" }}>Будь ласка, введіть свою інформацію для входу</div>
                        <div className="form-input">
                            <div>Імья</div>
                            <input id="username" type="username" className="inputForm" defaultValue={"TestUserName"} placeholder="Alex" required="required" title="Your username" name="userName" />
                        </div>
                        <div className="form-input">
                            <div>Фамілія</div>
                            <div className="password-wrapper">
                                <input id="lastName" type="text" className="inputForm" defaultValue={"TestLastName"} placeholder="Klar" required="required" title="Your lastName" name="lastName" />
                            </div>
                        </div>
                        <div className="form-input">
                            <div>Емейл</div>
                            <div className="password-wrapper">
                                <input id="email" type="text" className="inputForm" defaultValue={"test@gmail.com!"} placeholder="" required="required" title="Your email" name="email" />
                            </div>
                        </div>
                        <div className="form-input">
                            <div>Пароль</div>
                            <div className="password-wrapper">
                                <input id="password" type="password" className="inputForm" defaultValue={"Qwerty1!"} placeholder="*************" required="required" title="Your password" name="password" />
                                <div onClick={e => this.onClickPasswordVisible(e)} className="eye"></div>
                            </div>
                        </div>
                        <div className="form-input">
                            <div>Повторний Пароль</div>
                            <div className="password-wrapper">
                                <input id="passwordConfirm" type="password" className="inputForm" defaultValue={"Qwerty1!"} placeholder="*************" required="required" title="Your passwordConfirm" name="passwordConfirm" />
                                <div onClick={e => this.onClickPasswordVisible(e)} className="eye"></div>
                            </div>
                        </div>
                        <span className="text-center">
                            {this.state.loading !== "" ?
                                <div style={{ marginBottom: '10px', width: '50px', height: '50px' }}>
                                    <div>
                                        <img style={{ width: "40px" }} src={this.state.loading} alt="..." />
                                    </div>
                                </div>
                                :
                                <></>
                            }
                            <div style={{ color: "red" }}><h3 style={{ fontSize: "1.25em" }}>{this.state.error}</h3></div>
                        </span>
                        <div>
                            <button type="submit" className="enter-button">Вхід</button>
                        </div>
                    </form >
                </div>
            </>
        )
    }
}

export default Registtration
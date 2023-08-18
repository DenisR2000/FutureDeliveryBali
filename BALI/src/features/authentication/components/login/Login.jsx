import React from 'react';
import loadingAnimation from '../../../../assets/gifs/Loading_icon.gif'
import { Role } from '../Role'
import './Login.css'
import { HOST } from '../../../../data/constants/constants';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.handleForm = this.handleForm.bind(this)
        this.makeRequest = this.makeRequest.bind(this)
        this.onClickPasswordVisible = this.onClickPasswordVisible.bind(this);

        this.state = {
            userName: "",
            password: "",
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

    async makeRequest(userNameValue, passwordValue) {
        try {
            console.log(userNameValue, passwordValue);

            if (userNameValue === undefined || passwordValue === undefined) {
                return 0;
            }
            const datasToSend = {
                UserName: userNameValue,
                Password: passwordValue
            }
            const response = await fetch(`${HOST}/api/Account/Login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: userNameValue,
                    password: passwordValue
                })
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

        const { userName, password } = e.target
        const userNameValue = userName.value;
        const passwordValue = password.value;

        this.setState({
            userName: userNameValue,
            password: passwordValue
        }
            , () => this.makeRequest(userNameValue, passwordValue)
        )
    }

    render() {
        return (
            <div className='main__container'>
                <form onSubmit={this.handleForm} className="main__container-login">
                    <div className="header__logo__container">
                        <span className="span" style={{ color: "#333333", borderRadius: "5px", borderColor: "#333333", padding: "5px" }}>Logo</span> 
                        <span className="service__name" style={{ color: "#333333" }}>Service name</span> 
                    </div>
                    <div style={{ marginBottom: "20px" }}>Будь ласка, введіть свою інформацію для входу</div>
                    <div className="form-input">
                        <div>Логін</div>
                        <input id="username" type="username" className="inputForm" defaultValue={"RachkovskyiDenis"} placeholder="JohnDoe_123123" required="required" title="Your username" name="userName" />
                    </div>
                    <div className="form-input">
                        <div>Пароль</div>
                        <div className="password-wrapper">
                            <input id="password" type="password" className="inputForm" defaultValue={"tolik050103SANDsand123%"} placeholder="*************" required="required" title="Your password" name="password" />
                            <div onClick={e => this.onClickPasswordVisible(e)} className="eye"></div>
                        </div>
                    </div>
                    <div>
                        <a className='login-a' href='/passwordreset'>Забули пароль?</a>
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
        )
    }
}

export default Login
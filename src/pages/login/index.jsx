import React from "react"
import "./index.css"
import { Link } from "react-router-dom"

const Login = () => {
    const phrase = 'A experiência é uma escola onde são caras as lições, mas em nenhuma outra os tolos podem aprender.'
    return (
        <div className="login-main">
            <div className="login-square">
                <div className="login-image">
                    <div className="image">
                        <img src={process.env.PUBLIC_URL + 'books.png'} alt="books" />
                    </div>
                    <div className="image-text">
                        <p id="title">Bem vindo</p>
                        <p>{phrase}</p>
                    </div>
                </div>
                <div className="login-details">
                    <div className="login-title">
                        <h2>Administração escolar</h2>
                    </div>
                    <div className="login-form">
                        <form method="POST" action="javascript:void(0);">
                            <label for="email" id="email-label">Email</label>
                            <input type="email" autoComplete="off" name="username" id="email" />
                            <label for="password">Senha</label>
                            <input type="password" autoComplete="off" name="password" id="pass" />
                            <p>Esqueceu a senha?</p>
                            <Link to={'/menu'} style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '10vh', justifyContent: 'center' }}><button id="sign">Entrar</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
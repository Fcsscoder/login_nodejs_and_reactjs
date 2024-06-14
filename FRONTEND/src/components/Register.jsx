import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async';

const Register = ({toggleDiv}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const checkUser = (name, email, password) => {
        if(name && email && password) {
            if(email.includes('@')) {
                if(password.length >= 6)
                    return true
            } 
        }

        return false
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        let login = {
            name: name,
            email: email,
            password: password
        }

        login = JSON.stringify(login)

        if(checkUser(name, email, password)) {
            const response = await fetch('http://localhost:3000/createuser', {
                method: 'POST',
                body: login,
                headers: { 'Content-Type': "application/json" }
            })

            if(!response.ok) {
                if(response.status === 401) {
                     return setError('Email já está em uso')
                }
            } 

            toggleDiv()
        } else {
            setError('Email ou senha inválidos')
        }
    };

  return (
    <div className='user-container'>
        <Helmet>
            <title>Registrar</title>
        </Helmet>
        <div className="register-container">
            <h2>Registrar</h2>
            <form className="form-container">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nome"  
                    required
                    onChange={(e) => setName(e.target.value)}
                    />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"  
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    type="text" 
                    name="password" 
                    placeholder="Senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button 
                    type="submit" 
                    className="btn-register" 
                    onClick={(e) => {handleRegister(e)}}>Cadastrar</button>
            </form>
            <p>{error}</p>
            <button 
                className="btn-back" 
                onClick={() => {toggleDiv()}}>
                Voltar
            </button>
        </div>
    </div>
  )
}

export default Register
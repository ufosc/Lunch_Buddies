import React, { useState } from 'react';

import { Login, SignUp } from './Login';

export default function AuthScreen({
    navigation
}: any) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoginPage, setIsLoginPage] = useState(true);

    const navigateTo = (screen: any) => {
        navigation.navigate(screen);
    };

    const toggleLogin = () => {
        setIsLoginPage(!isLoginPage);
    }

    const loginHandler = () => {
        navigateTo("Start");
    }

    const signupHandler = () => {
        if(password == confirmPassword) {
            setMessage('');
            fetch('/login/createAccount', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(response => {
                navigateTo("Start");
            })
            .catch(error => {
                setMessage(error);
            })
        }
        else {
            setMessage('Passwords do not match');
        }
    }

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }
   
    return (
        isLoginPage? 
        <Login 
            navigateTo={navigateTo} 
            toggleLogin={toggleLogin}
            onSubmitHandler={loginHandler}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword} 
            message={message}
        />
        : 
        <SignUp 
            navigateTo={navigateTo} 
            toggleLogin={toggleLogin} 
            onSubmitHandler={signupHandler}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword} 
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            message={message}
        />
    )    
}

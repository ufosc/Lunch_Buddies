import React, { useState } from 'react';

import { Login, SignUp } from './Login';

export default function AuthScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const [isLoginPage, setIsLoginPage] = useState(true);

    const nagivateTo = (screen) => {
        navigation.navigate(screen);
    };

    const toggleLogin = () => {
        setIsLoginPage(!isLoginPage);
    }

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const onSubmitHandler = () => {}

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }
   
    return (
        isLoginPage? 
        <Login 
            navigateTo={nagivateTo} 
            toggleLogin={toggleLogin}
            onSubmitHandler={onSubmitHandler} 
        />
        : 
        <SignUp 
            navigateTo={nagivateTo} 
            toggleLogin={toggleLogin} 
            onSubmitHandler={onSubmitHandler}
        />
    )    
}

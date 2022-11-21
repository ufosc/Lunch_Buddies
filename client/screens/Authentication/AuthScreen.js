import React, { useState } from 'react';
// import { Platform } from 'react-native';

import { Login, SignUp } from './Login';

// const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
const API_URL = "192.168.1.22:8080"

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

    const onLoggedIn = async (token) => {
        try {
            const res = await fetch(`${API_URL}/private`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
            })
            try {
                const jsonRes = await res.json();
                if (res.status === 200) {
                    setMessage(jsonRes.message);
                }
            } catch(err) {
                console.log(err);
            }
        } catch(err) {
            console.log(err);
        }
    }

    const onSubmitHandler = async () => {
        // const res = await fetch("192.168.1.22:8080/api/test");
        try {
            const res = await fetch('')
            // const res = await fetch("https://localhost:8080/api/test");
        } catch(err) {
            console.log(err);
        }
        // const payload = {
        //     email,
        //     password,
        //     name,
        //     confirmPassword,
        // }
        // try {
        //     console.log(`${API_URL}/${isLoginPage ? 'login' : 'signup'}`)
        //     const res = await fetch(`${API_URL}/${isLoginPage ? 'login' : 'signup'}`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(payload),
        //     })
        //     try {
        //         const data = await res.json()
        //         if (res.status !== 200) {
        //             setIsError(true);
        //             setMessage(data.message);
        //         } else {
        //             onLoggedIn(data.token)
        //             setIsError(false);
        //             setMessage(data.message);
        //             console.log(message)
        //         }
        //     } catch(err) {
        //         console.log(err);
        //     }
        // } catch(err) {
        //     console.log(err);
        // }
    };

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

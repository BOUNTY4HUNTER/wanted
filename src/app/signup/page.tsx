'use client';

import React, { useState } from 'react';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            // Your server endpoint for user registration
            const signUpEndpoint = 'https://example.com/api/signup';

            const response = await fetch(signUpEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            // Check if the request was successful (status code 2xx)
            if (response.ok) {
                console.log('User successfully registered!');
            } else {
                console.error('Failed to register user');
            }
        } catch (error) {
            console.error('An error occurred during registration', error);
        }
    };

    return (
        <div className="mx-auto flex flex-col items-center justify-center text-xl bg-primary-1">
            <div className="font-extrabold text-5xl my-32 text-primary-5">
                회원가입
            </div>

            <input
                className="border border-solid border-black rounded-lg p-4 w-96 h-12 mb-3"
                type="text"
                placeholder="아이디를 입력해 주세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="border border-solid border-black rounded-lg p-4 w-96 h-12 mb-3"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="border border-solid border-black rounded-lg p-4 w-96 h-20 bg-primary-5 text-white"
                onClick={handleSignUp}
            >
                회원 가입
            </button>
        </div>
    );
}

'use client';

import React from 'react';

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center text-xl bg-primary-1">
            <div className="font-extrabold text-5xl mb-20 mt-32 text-primary-5">
                WANTED
            </div>
            <div className="mx-auto justify-center flex flex-col w-5/6">
                <input
                    className="flex border border-solid border-black rounded-lg p-2 h-9 mb-3"
                    type="text"
                    placeholder="아이디를 입력해 주세요"
                />
                <input
                    className="flex border border-solid border-black rounded-lg p-2 h-9 mb-8"
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                />
            </div>
            <button className="flex justify-center items-center rounded-lg w-5/6 h-9 bg-primary-5 text-white mx-auto">
                로그인
            </button>
            <div className="mt-7 underline">회원가입</div>
            <div className="mt-2 mb-52 underline">아이디/비밀번호 찾기</div>
        </div>
    );
}

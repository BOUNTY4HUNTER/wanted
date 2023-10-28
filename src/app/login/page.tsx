import React from 'react';

export default function Login() {
    return (
        <div className="mx-auto flex  flex-col items-center justify-center text-xl bg-primary-1">
            <div className="font-extrabold text-5xl my-32 text-primary-5">WANTED</div>
            <div>
                <input
                    className="border border-solid border-black rounded-lg p-4 w-96 h-4 mb-3"
                    type="text"
                    placeholder="아이디를 입력해 주세요"
                />
                <input
                    className="border border-solid border-black rounded-lg p-4 w-96 h-4 mb-3"
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                />
            </div>
            <button className="border border-solid border-black rounded-lg p-4 w-96 h-20 bg-primary-5 text-white">
                {' '}
                로그인{' '}
            </button>
            <div className="mt-7 underline">회원가입</div>
            <div className="underline">아이디/비밀번호 찾기</div>
        </div>
    );
}

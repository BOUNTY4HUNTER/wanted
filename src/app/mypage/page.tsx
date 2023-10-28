import React from 'react';
import ProfileImg from '$/images/profile.png';
import Image from 'next/image';
import MyPageButton from '$/images/mypage.png';

export default function Mypage() {
    return (
        <div className="flex flex-col flex-1 h-full bg-primary-1">
            <section className="flex flex-col bg-primary-4 m-4 p-4">
                <div className="flex">
                    <Image
                        className="h-[86px] w-[86px]"
                        src={ProfileImg}
                        alt="프로필 이미지"
                    />
                    <div>
                        <div className="text-font-title text-2xl text-bold mt-4">
                            닉네임
                        </div>
                        <div>2022.09.30 가입</div>
                    </div>
                    <div>프로필 수정</div>
                </div>
                <hr className="flex m-3" />
                <div className="flex">
                    <div className="flex flex-col flex-1">
                        <span className="flex justify-center">내가 수배한</span>
                        <span className="text-3xl text-bold flex justify-center">
                            7 건
                        </span>
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="flex justify-center">내가 습득한</span>
                        <span className="text-3xl text-bold flex justify-center">
                            {' '}
                            11 건
                        </span>
                    </div>
                </div>
            </section>
            <hr />
            <section className="flex justify-around">
                <div>
                    <Image
                        src={MyPageButton}
                        style={{
                            width: '60px',
                            height: '60px',
                        }}
                        alt="마이페이지"
                    />
                    <span>공지사항</span>
                </div>
                <div>
                    <Image
                        src={MyPageButton}
                        style={{
                            width: '60px',
                            height: '60px',
                        }}
                        alt="알림설정"
                    />
                    <span>알림설정</span>
                </div>
                <div>
                    <Image
                        src={MyPageButton}
                        style={{
                            width: '60px',
                            height: '60px',
                        }}
                        alt="고객센터"
                    />
                    <span>고객센터</span>
                </div>
                <div>
                    <Image
                        src={MyPageButton}
                        style={{
                            width: '60px',
                            height: '60px',
                        }}
                        alt="키워드"
                    />
                    <span>키워드</span>
                </div>
            </section>
        </div>
    );
}

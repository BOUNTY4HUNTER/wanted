import React from 'react';
import MainLogo from '@/components/common/MainLogo';

export default function Header() {
    return (
        <header>
            <div className="w-[80vw] mx-auto flex">
                <MainLogo
                    style={{
                        height: '100%',
                        width: '10%',
                    }}
                />
            </div>
        </header>
    );
}

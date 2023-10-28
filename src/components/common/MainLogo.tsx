import Image from 'next/image';
import React from 'react';
import WantedLogo from '$/images/LOGO.jpg';

export default function MainLogo({ style }: { style?: React.CSSProperties }) {
    return <Image style={style} src={WantedLogo} alt="logo" />;
}

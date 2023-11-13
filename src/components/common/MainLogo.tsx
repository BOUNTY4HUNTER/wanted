import Image from 'next/image';
import React from 'react';
import WantedLogo from '$/images/logos/main_white.png';
import { ImageProps } from 'next/dist/shared/lib/get-img-props';

export default function MainLogo(props: Omit<ImageProps, 'src' | 'alt'>) {
    return <Image src={WantedLogo} alt="메인 로고" {...props} />;
}

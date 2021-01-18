import React from 'react';
import { Medium, Small } from './Text';

export default ({ text, to, className }: { text: string; to: string; className?: string }) => {
    return <li className={`hover:text-wine font-medium ${className}`}>
        <a href={to}><Medium>{text}</Medium></a>
    </li>;
};

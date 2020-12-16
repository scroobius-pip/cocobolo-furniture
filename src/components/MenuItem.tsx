import React from 'react';

export default ({ text, to, className }: { text: string; to: string; className?: string }) => {
    return <li className={`hover:text-wine font-medium ${className}`}>
        <a className=' text-lg' href={to}>{text}</a>
    </li>;
};

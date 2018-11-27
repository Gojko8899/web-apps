import React from 'react';

export const BlogItem = ({ title, text }) => {

    console.log(title)
    return (
        <li className="collection-item avatar">
            <a className="title">{title}</a>
            <p>{text}</p>
        </li>
    );
};
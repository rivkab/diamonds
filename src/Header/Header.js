import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <header className="Header">
          <h1 className="Header_title">{props.title}</h1>
        </header>
    );
}
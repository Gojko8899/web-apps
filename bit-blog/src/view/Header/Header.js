import React from 'react';

const MyHeader = () => {

    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">BIT BLOG</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html"></a>Home</li>
                    <li><a href="badges.html">Authors</a></li>
                    <li><a href="collapsible.html">About</a></li>
                </ul>
            </div>
        </nav>
    )

}

export { MyHeader }
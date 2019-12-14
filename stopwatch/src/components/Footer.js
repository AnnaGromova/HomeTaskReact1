import React from 'react';
import '../index.css';

function Footer() {
    const myLink1 = "https://vk.com/mariya.chumerina";

    return (
        <footer>
            <div className="container">
                Look my <a href={myLink1}  target="_blank" className="vk-link">vk page</a>!
            </div>
        </footer>
    );
}

export default Footer;
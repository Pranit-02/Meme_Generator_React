import React from "react";

export default function Navbar() {
    return (

        <header className="header">
            <div className="header-left">
                <img src="./src/assets/TrollFace.png" className="header--image" />
                <h3 className="header--title">Meme Generator</h3>
            </div>
            <div className="header-right">
                <h3 className="header--project">React Course - Project 3</h3>
            </div>
        </header>
    )
}
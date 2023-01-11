import { useState, useEffect } from "react";

export default function randomRGB() {
    const [rgb, setRGB] = useState([0, 0, 0]);

    useEffect(() => {
        const rgbElem = document.querySelector('.rgb');
        rgbElem.style.color = `rgb(${rgb.join(',')})`;
    });

    return (
        <div>
            <p className="RGB">Random RGB: {rgb.join(', ')}</p>
            <button onClick={() => {
                setRGB(rgb.map(()=> {
                    return Math.floor(Math.random() * 256);
                }))
            }}>Random</button>
        </div>
    );

    
};
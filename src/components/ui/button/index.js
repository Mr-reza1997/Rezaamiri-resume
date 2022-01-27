import React, { useState, useEffect } from 'react';
import './button.scss';
const Button = () => {

    const [themeState, setThemeState] = useState(false);
    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') {
            setThemeState(true);
        }
    }, []);

    useEffect(() => {
        if (themeState) {
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }, [themeState]);

    return (
        <>
            <div class="toggleWrapper">
                <input
                    type="checkbox"
                    class="dn"
                    id="dn"
                    onChange={() => setThemeState(!themeState)}
                />
                <label for="dn" class="toggle">
                    <span class="toggle__handler">
                        <span class="crater crater--1"></span>
                        <span class="crater crater--2"></span>
                        <span class="crater crater--3"></span>
                    </span>
                    <span class="star star--1"></span>
                    <span class="star star--2"></span>
                    <span class="star star--3"></span>
                    <span class="star star--4"></span>
                    <span class="star star--5"></span>
                    <span class="star star--6"></span>
                </label>
            </div>
            {/* </div> */}
        </>
    );
};

export default Button;

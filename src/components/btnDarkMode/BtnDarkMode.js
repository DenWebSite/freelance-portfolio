import { useEffect, useRef } from 'react';
import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from './../../utils/detectDarkMode';

import './BtnDarkMode.css'

import sun from './../../img/icons/sun.svg'
import moon from './../../img/icons/moon.svg'


function BtnDarkMode() {
    const btnRef = useRef(null);

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        });
    }

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode === 'dark');
        btnRef.current?.classList.toggle('dark-mode-btn--active', darkMode === 'dark');
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark')
        btnRef.current.classList.toggle('dark-mode-btn--active')
    }, [darkMode]);

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}

export default BtnDarkMode
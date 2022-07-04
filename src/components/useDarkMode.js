import { useState, useEffect } from 'react'

export const useDarkMode = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
       localStorage.setItem('theme', theme)
    }, [theme])

    function themeToggler() {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return [theme, themeToggler]

    // const [theme, setTheme] = useState('light');
    // const setMode = mode => {
    //     window.localStorage.setItem('theme', mode)
    //     setTheme(mode)
    // };

    // const themeToggler = () => {
    //     theme === 'light' ? setMode('dark') : setMode('light')
    // };

    // useEffect(() => {
    //     const localTheme = window.localStorage.getItem('theme');
    //     localTheme ? setTheme(localTheme) : setMode('light')
    // }, []);

    // return [theme, themeToggler]
};

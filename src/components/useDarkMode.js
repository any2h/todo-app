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
};

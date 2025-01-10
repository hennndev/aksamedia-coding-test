import { useState } from 'react'
import useTheme from '../hooks/useTheme'
// components
import { LuMoon, LuSun } from 'react-icons/lu'

const DarkMode = () => {
    const {colorTheme, setTheme} = useTheme()
    const [isDark, setIsDark] = useState(
        colorTheme === "light" ? true : false
    )
 
    const toggleDarkModeHandler = (checked: boolean) => {
        setTheme(colorTheme)
        setIsDark(checked)
    }
    return (
        !isDark ? (
            <LuMoon onClick={() => toggleDarkModeHandler(true)} className='text-xl text-gray-600 dark:text-gray-300 cursor-pointer'/>
        ) : (
            <LuSun onClick={() => toggleDarkModeHandler(false)} className='text-xl text-gray-600 dark:text-gray-300 cursor-pointer'/>
        )
    )
}

export default DarkMode
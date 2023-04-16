import React, { useEffect, useState } from 'react'
import '../component/Toggle.css';
const Toggle = () => {
    const [theme,setTheme]=useState("light-theme");
    const toggleTheme =()=>{
          if(theme === "dark"){
            setTheme('light-theme');
          }  
          else{
            setTheme('dark-theme')
          }
    }
    useEffect(()=>{
        document.body.className=theme;
    }, [theme]);
  return (
    <div>
        <button className='btnl' onClick={()=>toggleTheme()}>
            Mode
        </button>
    </div>
  )
}

export default Toggle
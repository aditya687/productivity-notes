import React from 'react'

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
             {/*the heading of our notes app*/}
            <h1><span style={{ color:"blueviolet"}}>Memo</span> Personal</h1>
         {/*this is our toggle button 
        using this button we can change the background theme for our application*/}
        <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">

                <h1>💡</h1>

        </button>
        </div>
    )
}

export default Header

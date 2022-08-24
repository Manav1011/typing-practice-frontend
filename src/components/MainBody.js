import React from 'react'
import DisplayPara from './DisplayPara'
import UserInteract from './UserInteract'


const MainBody = ({Theme, ThemeText, ThemeBackground}) => {
  return (
    <div className={`${ThemeText}`} >
        <DisplayPara Theme={Theme} ThemeBackground={ThemeBackground} />
        <UserInteract Theme={Theme} ThemeBackground={ThemeBackground} />
    </div>
  )
}

export default MainBody
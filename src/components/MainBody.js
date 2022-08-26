import React from 'react'
import DisplayPara from './DisplayPara'
import {useState,useEffect} from 'react'
import UserInteract from './UserInteract'


const MainBody = ({Theme, ThemeText, ThemeBackground}) => {
  const [ParaContent, setContent] = useState([]);  
  useEffect(() => {    
    setContent(['Loading ....'])
    fetch('https://ten-fingers-django.herokuapp.com',{
      'method':'GET',
    }).then((response) => {
      return response.json()
    }).then((data) => {
      setContent(data.split(/(\s+)/).filter( e => e.trim().length > 0));
    })
  }, []);
  return (
    <div className={`${ThemeText} mx-5`} >
        <DisplayPara content={ParaContent} Theme={Theme} ThemeBackground={ThemeBackground} />
        <UserInteract content={ParaContent} Theme={Theme} ThemeBackground={ThemeBackground} />
    </div>
  )
}

export default MainBody
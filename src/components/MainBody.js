import React from 'react'
import DisplayPara from './DisplayPara'
import {useState,useEffect} from 'react'
import UserInteract from './UserInteract'


const MainBody = ({Theme, ThemeText, ThemeBackground,Level,Sound}) => {
  const [ParaContent, setContent] = useState([]);  
  const [Reload,setReload]=useState(false)
  
  useEffect(() => {    
    if (Level === 'Easy'){
      setContent(['Loading ....'])
      fetch('https://ten-fingers-django.herokuapp.com/Easy',{
        'method':'GET',
      }).then((response) => {        
        return response.json()        
      }).then((data) => {
        setContent(data.split(/(\s+)/).filter( e => e.trim().length > 0));
      })
    }

    
    else if (Level === 'Medium'){
      setContent(['Loading ....'])
      fetch('https://ten-fingers-django.herokuapp.com/Medium',{
        'method':'GET',
      }).then((response) => {
        return response.json()
      }).then((data) => {
        setContent(data.split(/(\s+)/).filter( e => e.trim().length > 0));
      })
    }
    else if (Level === 'Extreme'){
      setContent(['Loading ....'])
      fetch('https://ten-fingers-django.herokuapp.com/Extreme',{
        'method':'GET',
      }).then((response) => {
        return response.json()
      }).then((data) => {
        setContent(data.split(/(\s+)/).filter( e => e.trim().length > 0));
      })
    }
    else if (Level === 'Hard'){
      setContent(['Loading ....'])
      fetch('https://ten-fingers-django.herokuapp.com/Hard',{
        'method':'GET',
      }).then((response) => {        
        return response.json()
      }).then((data) => {        
        setContent(data[0].split(/(\s+)/).filter( e => e.trim().length > 0));
      })
    }
  }, [Level,Reload]);
  return (
    <div className={`${ThemeText}`} >
        <DisplayPara content={ParaContent} Theme={Theme} ThemeBackground={ThemeBackground} />
        <UserInteract Sound={Sound} content={ParaContent} setReload={setReload} Reload={Reload} Theme={Theme} ThemeBackground={ThemeBackground} />
    </div>
  )
}

export default MainBody
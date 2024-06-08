import React from 'react'
import DisplayPara from './DisplayPara'
import {useState,useEffect} from 'react'
import UserInteract from './UserInteract'
import { produceEasy, produceMedium,produceHard } from '../utils/ProduceWords'


const MainBody = ({Theme, ThemeText, ThemeBackground,Level,Sound}) => {
  const [ParaContent, setContent] = useState(null);  
  const [Reload,setReload]=useState(false)
  

  useEffect(() => {    
    produceHard()
    if (Level === 'Easy'){
      produceEasy().then((res) => {          
        setContent(res)
      })
    }

    
    else if (Level === 'Medium'){ 
      produceMedium().then((res) => {          
        setContent(res)
      })
    }
  }, [Level,Reload]);
  return (
    <div className={`${ThemeText}`} >
        {ParaContent ? <DisplayPara content={ParaContent} Theme={Theme} ThemeBackground={ThemeBackground} /> : null}
        {ParaContent ? <UserInteract Sound={Sound} content={ParaContent} setReload={setReload} Reload={Reload} Theme={Theme} ThemeBackground={ThemeBackground} /> : null}
    </div>
  )
}

export default MainBody
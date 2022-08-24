import React from 'react'
import DisplayPara from './DisplayPara'
import {useState,useEffect} from 'react'
import UserInteract from './UserInteract'


const MainBody = ({Theme, ThemeText, ThemeBackground}) => {
  const [ParaContent, setContent] = useState([]);
  let para = `Life is a mixture of ups and downs and one who has life must have seen various colours of life. Sometimes the colours are vivid and bright and sometimes they are just black and white. Life is a challenge and one who has the courage and strength to face it bravely is the one who goes through it and emerges as a great and successful person in life. Every person who has life is given various opportunities to make his life happy and prosperous and the one who understands this surely succeed in life. People who think that life is easy must know how people who don’t have a home to live and food to eat survive on this planet.`;
  useEffect(() => {
    setContent(para.split(/(\s+)/).filter( e => e.trim().length > 0));
  }, []);
  return (
    <div className={`${ThemeText}`} >
        <DisplayPara content={ParaContent} Theme={Theme} ThemeBackground={ThemeBackground} />
        <UserInteract content={ParaContent} Theme={Theme} ThemeBackground={ThemeBackground} />
    </div>
  )
}

export default MainBody
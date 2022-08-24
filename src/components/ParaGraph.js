import React from 'react'
import UserInput from "./UserInput";

const ParaGraph = ({content}) => {
  
    var stringArray = content.split(/(\s+)/).filter( e => e.trim().length > 0)
  return (
    <>
    <div className="form-control" style={{border: '1px solid black',padding: '100px'}}>
        {
            stringArray.map( (value,index) => {
                return <div className='bg-opacity-25' key={index} id={index} style={{display: 'inline-block'}}>{value}&nbsp;</div>
            })
        }
    </div>    
    {/* <UserInput content={stringArray}/> */}
    </>
  )
}

export default ParaGraph
import React from 'react'
import {useState,useEffect} from 'react'



const UserInput = ({content}) => {
    const [Counter,setCounter]=useState(0)
    const [CorrectWords,setCorrectWords]=useState(1)
    const [WrongWords,setWrongWords]=useState(1)  
    const [CharCounter,setCharCounter]=useState(0)
    const [Char2Counter,set2CharCounter]=useState(0)
    const [CorrectChars,setCorrectChars]=useState(1)
    const [WrongChars,setWrongChars]=useState(1)
    const [seconds, setSeconds] = useState(0);    
    const [CurrentCharArray,setCurrentCharArray]=useState([])
    const [GlobalCounter,setGlobalCounter]=useState(0)


    const OnChangeHandler =(event) => {
        let value = event.target.value
        let lastChar=value.charAt(value.length-1)
        let CurrentWord=content[Counter]+' '
        if(CharCounter == 0){
        for ( let i=0; i < CurrentWord.length; i++ ) {
            CurrentCharArray.push ( [CurrentWord[i],false] );
        }           
        }
        if (lastChar === CurrentWord.charAt(Char2Counter)){
            console.log("True")
            CurrentCharArray[GlobalCounter][1]=true
            setGlobalCounter(GlobalCounter + 1)
            setCharCounter(CharCounter + 1)
            set2CharCounter(Char2Counter + 1)
            console.log(CurrentCharArray)
        }
        else{    
            console.log("False")
            console.log(GlobalCounter)
            CurrentCharArray[GlobalCounter][1]=false   
            console.log(CurrentCharArray)
        }
    }
    
    const OnSpaceHandler=(event)=>{
        document.getElementById(Counter).classList.add('bg-secondary')
        if(event.keyCode === 32){
            setCharCounter(0)
            set2CharCounter(0)
            console.log(CurrentCharArray)
            var value=event.target.value            
            if (value.length === 1){
                event.target.value=''
            }
            else{
            setCounter(Counter +1 )
            if((event.target.value).trim()===content[Counter]){
                document.getElementById(Counter).classList.remove('bg-secondary')      
                document.getElementById(Counter + 1).classList.add('bg-secondary')
                document.getElementById(Counter).classList.add('text-success')
                setCorrectWords(CorrectWords +1)
            }
            else{
                document.getElementById(Counter).classList.remove('bg-secondary')
                document.getElementById(Counter + 1).classList.add('bg-secondary')
                document.getElementById(Counter).classList.add('text-danger')
                setWrongWords(WrongWords + 1)
            }
            event.target.value=''
        }
        }        
        else if(event.keyCode === 8){                          
            setWrongChars(WrongChars - 1)
            set2CharCounter(Char2Counter - 1)
            // setGlobalCounter(GlobalCounter - 1) 

        }
    }
    const ResetCounter =() => {
        setCounter(0)
    }
  return (
    <div className="container d-flex" style={{margin :"10px"}}>
        <input className="form-control me-5" type="text" onKeyUp={(e)=> OnSpaceHandler(e)} onChange={(e) => OnChangeHandler(e)} /><button className="btn btn-secondary me-2" id="Timer">1:00</button><button className="btn btn-primary" onClick={ResetCounter}><i className="bi bi-arrow-clockwise"></i></button>

        <div className="container">
            <h1 id="CorrectChars"></h1>
            <h1 id="WrongChars"></h1>
        </div>
    </div>
  )
}

export default UserInput
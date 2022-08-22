import React from 'react'
import {useState,useEffect} from 'react'



const UserInput = ({content}) => {
    const [Counter,setCounter]=useState(0)
    const [CorrectWords,setCorrectWords]=useState(1)
    const [WrongWords,setWrongWords]=useState(1)  
    const [CharCounter,setCharCounter]=useState(0)
    const [TimerCharCounter,setTimerCharCounter]=useState(0)
    // const [seconds, setSeconds] = useState(59);
    const [CorrectChars,setCorrectChars]=useState(0)
    const [WrongChars,setWrongChars]=useState(0)
    const [seconds, setSeconds] = useState(0);


    const OnChangeHandler =(event) => {
        // if(TimerCharCounter == 0){
        //     timer()
        // }
        let value = event.target.value
        let lastChar=value.charAt(value.length-1)
        let CurrentWord=content[Counter]+' '
        if (lastChar === CurrentWord.charAt(CharCounter)){
            setCorrectChars(CorrectChars + 1)
            document.getElementById("Correctwords").innerHTML=CorrectChars
            // console.log(CorrectChars)
        }
        else{
            setWrongChars(WrongChars + 1)
            document.getElementById("Wrongwords").innerHTML=WrongChars
            // console.log(WrongChars)
        }
        setCharCounter(CharCounter + 1)        
        setTimerCharCounter(TimerCharCounter + 1)
    }

    const timer = () =>{
        console.log(CorrectChars)
    }


    const OnSpaceHandler=(event)=>{
        document.getElementById(Counter).classList.add('bg-secondary')
        if(event.keyCode === 32){
            setCharCounter(0)
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
            setCharCounter(CharCounter - 2)
        }
    }
    const ResetCounter =() => {
        setCounter(0)
    }
  return (
    <div className="container d-flex" style={{margin :"10px"}}>
        <input className="form-control me-5" type="text" onChange={(e) => OnChangeHandler(e)} onKeyUp={(e)=> OnSpaceHandler(e)} /><button className="btn btn-secondary me-2" id="Timer">1:00</button><button className="btn btn-primary" onClick={ResetCounter}><i className="bi bi-arrow-clockwise"></i></button>

        <div className="container">
            <h1 id="Correctwords"></h1>
            <h1 id="Wrongwords"></h1>
        </div>
    </div>
  )
}

export default UserInput
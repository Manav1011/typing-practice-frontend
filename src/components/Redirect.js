import {React,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Redirect = () => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('/')
    },[])
  return (
    <>
    {null}
    </>
  )
}

export default Redirect
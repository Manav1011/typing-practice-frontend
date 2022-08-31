import {useState,useEffect} from 'react'
import NavBar from "./components/Navigation";
import {Helmet} from 'react-helmet';
import MainBody from './components/MainBody';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Redirect from './components/Redirect';
import Footer from './components/Footer';


function App() {
  const [Theme,setTheme]=useState('Dark')
  const [ThemeBackground,setThemeBackground]=useState()
  const [ThemeText,setThemeText]=useState()
  const [Level,setLevel]=useState('Easy')
  const [Sound,setSound]=useState('Cream')


  useEffect(() => {
    if (localStorage.getItem('Sound')) {
      setSound(localStorage.getItem('Sound'))
    }
  },[Sound])



  useEffect(() => {
    if(localStorage.getItem('Level')){
      setTheme(localStorage.getItem('Level'))
    }

      if(localStorage.getItem('Theme')){
        setTheme(localStorage.getItem('Theme'))
      }

      if(Theme === 'Lawrencium'){
        setThemeText('text-light')
        setThemeBackground(`background: #0f0c29;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `)
      }
      else if(Theme === 'Light'){
        setThemeText('text-dark')
        setThemeBackground(`background: #8e9eab;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `)
      }
      else if(Theme === 'Dark'){
        setThemeText('text-light')        
        setThemeBackground(`background: #000000;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `)
      }
      else if(Theme === 'Royal'){
        setThemeText('text-light')
        setThemeBackground( `background: #141E30;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `)
      }
      else if(Theme === 'Netflix'){
        setThemeText('text-light')
        setThemeBackground(`background: #8E0E00;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        ` )
      }
      else if(Theme === 'ManOfSteel'){
        setThemeText('text-light')
        setThemeBackground(`background: #780206;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #061161, #780206);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #061161, #780206); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `)
      }
      else if(Theme === 'LoveAndLiberty'){
        setThemeText('text-light')
        setThemeBackground(`background: #200122;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #6f0000, #200122);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #6f0000, #200122); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `)
      }
  localStorage.setItem('theme',Theme)
  },[Theme])  
  
  return (
  <div className="App">
    <BrowserRouter>
       <Helmet>
                <style>{`body {${ThemeBackground}}`}</style>
            </Helmet>
    <NavBar Theme={Theme} Level={Level} setTheme={setTheme} setLevel={setLevel} Sound={Sound} setSound={setSound}/>
    <Routes>
      <Route path='/' exact element={<MainBody Level={Level} Sound={Sound} Theme={Theme} ThemeText={ThemeText} ThemeBackground={ThemeBackground}/>}/>
      <Route path='/redirect' exact element={<Redirect Sound={Sound}/>}/>
      </Routes>
      <Footer Theme={Theme} />
    </BrowserRouter>
  </div>
  )
}

export default App;

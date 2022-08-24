import ParaGraph from "./components/ParaGraph";
import {useState,useEffect} from 'react'
import NavBar from "./components/Navigation";
import {Helmet} from 'react-helmet';


function App() {
  const [Theme,setTheme]=useState()
  const [ThemeBackground,setThemeBackground]=useState()
  const [ThemeText,setThemeText]=useState()

  useEffect(() => {
    if(localStorage.getItem('theme')){
      console.log("Exist")
      setTheme(localStorage.getItem('theme'))
    }
    else{
      setTheme('Dark')
    }
  },[])
  useEffect(() => {
      localStorage.setItem('theme',Theme)
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
        setThemeText('bg-light')
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
  
  },[Theme])


  const [ParaContent, setContent] = useState("");
  useEffect(() => {
    let para = `Life is a mixture of ups and downs and one who has life must have seen various colours of life. Sometimes the colours are vivid and bright and sometimes they are just black and white. Life is a challenge and one who has the courage and strength to face it bravely is the one who goes through it and emerges as a great and successful person in life. Every person who has life is given various opportunities to make his life happy and prosperous and the one who understands this surely succeed in life. People who think that life is easy must know how people who don’t have a home to live and food to eat survive on this planet.`;
    setContent(para);
  }, []);
  return (
  <div className="App">
       <Helmet>
                <style>{`body {${ThemeBackground}}`}</style>
            </Helmet>
    <NavBar Theme={Theme} setTheme={setTheme}/>
    {/* <ParaGraph content={ParaContent}/> */}
  </div>
  )
}

export default App;

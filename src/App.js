import ParaGraph from "./components/ParaGraph";
import {useState,useEffect} from 'react'


function App() {
  const [ParaContent, setContent] = useState("");
  useEffect(() => {
    let para = `Life is a mixture of ups and downs and one who has life must have seen various colours of life. Sometimes the colours are vivid and bright and sometimes they are just black and white. Life is a challenge and one who has the courage and strength to face it bravely is the one who goes through it and emerges as a great and successful person in life. Every person who has life is given various opportunities to make his life happy and prosperous and the one who understands this surely succeed in life. People who think that life is easy must know how people who don’t have a home to live and food to eat survive on this planet.`;
    setContent(para);
  }, []);
  return <div className="App">
    <ParaGraph content={ParaContent}/>
  </div>;
}

export default App;

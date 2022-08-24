import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';
import {useState,useEffect} from 'react'

function DisplayPara({Theme,ThemeBackground}) {    
    const [ParaContent, setContent] = useState([]);    
    useEffect(() => {     
        let para = `Life is a mixture of ups and downs and one who has life must have seen various colours of life. Sometimes the colours are vivid and bright and sometimes they are just black and white. Life is a challenge and one who has the courage and strength to face it bravely is the one who goes through it and emerges as a great and successful person in life. Every person who has life is given various opportunities to make his life happy and prosperous and the one who understands this surely succeed in life. People who think that life is easy must know how people who don’t have a home to live and food to eat survive on this planet.`;
        setContent(para.split(/(\s+)/).filter( e => e.trim().length > 0));
      }, []);
      document.getElementById(33).focus()
  return (
    <div className="mt-4 mx-5">
            <Helmet>
                <style>{`.ParaCard {${ThemeBackground}}`}</style>
            </Helmet>
      <Card className="ParaCard" border={Theme=='Light'? 'dark' : 'light'} style={{fontSize: '1.5rem', maxHeight: '30vh' , overflow: 'scroll'}}>
        <Card.Body> 
          {
            ParaContent.map( (value,index) => {
                return <div className='bg-opacity-25' key={index} id={index} style={{display: 'inline-block'}}>{value}&nbsp;</div>
            })
        }
        
        </Card.Body>
      </Card>    
    </div>
  );
}

export default DisplayPara;
import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';

function DisplayPara({content,Theme,ThemeBackground}) {          
  return (
    <div className="mt-4 mx-5">
            <Helmet>
                <style>{`.ParaCard {${ThemeBackground}}`}</style>
            </Helmet>
      <Card className="ParaCard" border={Theme=='Light'? 'dark' : 'light'} style={{fontSize: '1.5rem', maxHeight: '30vh' , overflow: 'scroll'}}>
        <Card.Body> 
          {
            content.map( (value,index) => {
                return <div className='bg-opacity-25' key={index} id={index} style={{display: 'inline-block'}}>{value}&nbsp;</div>
            })
        }
        
        </Card.Body>
      </Card>    
    </div>
  );
}

export default DisplayPara;
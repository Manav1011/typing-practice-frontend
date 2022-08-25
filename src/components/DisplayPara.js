import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';

function DisplayPara({content,Theme,ThemeBackground}) {          
  return (
    <div className={`mt-4 mx-5 border ${Theme=='Light'? 'border-dark': 'border-light'}`}>
      <div className="m-4">
            <Helmet>
                <style>{`.ParaCard {${ThemeBackground}}`}</style>
            </Helmet>
      <Card className="ParaCard "  style={{fontSize: '1.3rem', maxHeight: '30vh' , overflow: 'scroll'}}>
        <Card.Body> 
          {
            content.map( (value,index) => {
                return <div className='bg-opacity-25 pt-2' key={index} id={index} style={{display: 'inline-block'}}>{value}&nbsp;</div>
            })
        }
        
        </Card.Body>
      </Card>    
    </div>
    </div>
  );
}

export default DisplayPara;
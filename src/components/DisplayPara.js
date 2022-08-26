import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';

function DisplayPara({content,Theme,ThemeBackground}) {          
  return (
    <div className={`mt-4`}>
      <div className="">
            <Helmet>
                <style>{`.ParaCard {${ThemeBackground}}`}</style>
            </Helmet>
      <Card className="ParaCard container"  style={{fontSize: '1.2rem', maxHeight: '25vh' , overflow: 'scroll'}}>
        <Card.Body> 
          {
            content.map( (value,index) => {
                return <div className='fw-lighter bg-opacity-25 pt-2' key={index} id={index} style={{display: 'inline-block'}}>{value}&nbsp;</div>
            })
        }
        
        </Card.Body>
      </Card>    
    </div>
    </div>
  );
}

export default DisplayPara;
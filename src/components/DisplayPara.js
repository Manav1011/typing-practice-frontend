import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';

function DisplayPara({content,Theme,ThemeBackground}) {          
  return (
    <div className={`mt-5`} >
          
      <Card className="ParaCard bg-transparent border border-0"  style={{maxHeight: '25vh' , overflow: 'scroll'}}>
        <Card.Body> 
          {
            content.map( (value,index) => {
                return <div className='text-muted srounded' key={index} id={index} style={{display: 'inline-block'}}>{
                  value 
                  }
                   &nbsp;</div>
            })
        }
        
        </Card.Body>
      </Card>    
    </div>    
  );
}

export default DisplayPara;
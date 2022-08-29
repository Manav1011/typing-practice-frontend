import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';

function DisplayPara({content,Theme,ThemeBackground}) {          
  return (
    <div className={`mt-4 mx-5`}>
      <div className="">
            <Helmet>
                <style>{`.ParaCard {${ThemeBackground}}`}</style>
            </Helmet>
      <Card className="ParaCard"  style={{fontSize: '2rem', maxHeight: '50vh' , overflow: 'scroll'}}>
        <Card.Body> 
          {
            content.map( (value,index) => {
                return <div className='fw-normal bg-opacity-50 pt-2' key={index} id={index} style={{display: 'inline-block'}}>{value} &nbsp;</div>
            })
        }
        
        </Card.Body>
      </Card>    
    </div>
    </div>
  );
}

export default DisplayPara;
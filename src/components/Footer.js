import React from 'react'
import Card from 'react-bootstrap/Card';


const Footer = ({Theme}) => {
  return (
    <div className="w-100 position-fixed bottom-0">
    <Card body className='bg-transparent border border-0 text-center'>    
    <div className='container'>
        <hr className={`${Theme=='Light'? 'text-dark' : 'text-light'}`}/>
    <a href="https://github.com/Manav1011/typing-practice-frontend" className="href"><i className="bi bi-github me-3"></i></a>
    <a href="https://www.instagram.com/manav_shah1011/?igshid=YmMyMTA2M2Y%3D" className="href"><i className="bi bi-instagram"></i></a>
    </div>
    </Card>
    </div>
  )
}

export default Footer
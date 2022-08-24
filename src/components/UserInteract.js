import React from 'react'
import {Helmet} from 'react-helmet';

const UserInteract = ({Theme , ThemeBackground}) => {
  return (
    <div className="mt-4 mx-5 UserInteraction">
         <Helmet>
                <style>{`.UserInput {${ThemeBackground}}`}</style>
            </Helmet>
      <form className='d-flex' role="search">
        <input id='UserInput' autoFocus className={`form-control me-2 UserInput ${Theme == 'Light' ? 'text-dark' : 'text-light'}`} placeholder="Start Typing..." />                
        <span className={`btn border ${Theme=='Light'? 'border-dark text-dark' : 'border-light text-light'}`} disabled >1:00</span>
      </form>
    </div>
  )
}

export default UserInteract
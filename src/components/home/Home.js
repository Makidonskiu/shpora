import React from 'react';
import { Link } from "react-router-dom"
import './home.css'

export const Home = ({children}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Основная теория по библиотеке React</h1>
        <div className='sitebar'>
        <div className='menu'>
          <Link to={'/components'}><p className='cur'>Components</p></Link>
          <Link to={'/props'}><p className='cur'>Props</p></Link>
          <Link to={'/state'}><p className='cur'>State</p></Link>
          <Link to={'/lifecycle'}><p className='cur'>LifeCycle</p></Link>
          <Link to={'/events'}><p className='cur'>Events</p></Link>
          <Link to={'/key'}><p className='cur'>Key</p></Link>
          <Link to={'/refs'}><p className='cur'>Refs</p></Link>
          <Link to={'/asynchronous'}><p className='cur'>Asynchronous requests</p></Link>
          <Link to={'/virtual'}><p className='cur'>Virtual DOM</p></Link>
          <Link to={'/fragment'}><p className='cur'>Fragment</p></Link>
          <Link to={'/react-memo'}><p className='cur'>React.memo</p></Link>
          <Link to={'/useeffect'}><p className='cur'>useEffect</p></Link>
          <Link to={'/router'}><p className='cur'>Router 6</p></Link>
          <Link to={'/context'}><p className='cur'>Context</p></Link>
          <Link to={'/form'}><p className='cur'>Form</p></Link>
        </div>
        {children}
        </div>
      </header>
    </div>
  );
};

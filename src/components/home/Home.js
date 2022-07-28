import React from 'react';
import { Link } from "react-router-dom"
import './home.css'

export const Home = ({children}) => {
  const [thema , setThema] = React.useState(null)
  const onClick = (i) => {
    setThema(i)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Основная теория по библиотеке React</h1>
        <div className='sitebar'>
        <div className='menu'>
          <Link to={'/components'}><p onClick={()=> onClick(1)} className={thema === 1? 'thema' : 'cur'}>Components</p></Link>
          <Link to={'/props'}><p onClick={()=> onClick(2)} className={thema === 2? 'thema' : 'cur'}>Props</p></Link>
          <Link to={'/state'}><p onClick={()=> onClick(3)} className={thema === 3? 'thema' : 'cur'}>State</p></Link>
          <Link to={'/lifecycle'}><p onClick={()=> onClick(4)} className={thema === 4? 'thema' : 'cur'}>LifeCycle</p></Link>
          <Link to={'/events'}><p onClick={()=> onClick(5)} className={thema === 5? 'thema' : 'cur'}>Events</p></Link>
          <Link to={'/key'}><p onClick={()=> onClick(6)} className={thema === 6? 'thema' : 'cur'}>Key</p></Link>
          <Link to={'/refs'}><p onClick={()=> onClick(7)} className={thema === 7? 'thema' : 'cur'}>Refs</p></Link>
          <Link to={'/asynchronous'}><p onClick={()=> onClick(8)} className={thema === 8? 'thema' : 'cur'}>Asynchronous requests</p></Link>
          <Link to={'/virtual'}><p onClick={()=> onClick(9)} className={thema === 9? 'thema' : 'cur'}>Virtual DOM</p></Link>
          <Link to={'/fragment'}><p onClick={()=> onClick(10)} className={thema === 10? 'thema' : 'cur'}>Fragment</p></Link>
          <Link to={'/react-memo'}><p onClick={()=> onClick(11)} className={thema === 11? 'thema' : 'cur'}>React.memo</p></Link>
          <Link to={'/useeffect'}><p onClick={()=> onClick(12)} className={thema === 12? 'thema' : 'cur'}>useEffect</p></Link>
          <Link to={'/router'}><p onClick={()=> onClick(13)} className={thema === 13? 'thema' : 'cur'}>Router 6</p></Link>
          <Link to={'/context'}><p onClick={()=> onClick(14)} className={thema === 14? 'thema' : 'cur'}>Context</p></Link>
          <Link to={'/form'}><p onClick={()=> onClick(15)} className={thema === 15? 'thema' : 'cur'}>Form</p></Link>
        </div>
        {children}
        </div>
      </header>
    </div>
  );
};

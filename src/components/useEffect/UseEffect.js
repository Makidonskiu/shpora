import React from "react";

const p1 = `import {useEffect} from 'react';`
const p2 = `useEffect ( () => { }, [])`
const p3 = `useEffect ( () => { }, [name])`
const p4 = `useEffect ( () => { } )`
const p5 = `useEffect ( () => {
  return () => {};
})`

export const UseEffect = () => {
  return (
    <div className="content">
      <h2>UseEffect</h2>
      <p className="text-p">Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
      <p className='example'>{p1}</p>
      <p className="text-p">Хук позволяет использовать 3 метода жизненного цикла:</p>
      <ul>
      <li>componentDidMount()</li>
      <li>componentDidUpdate(prevProps, prevState)</li>
      <li>componentWillUnmount()</li>
      </ul>
      <p className="text-p">UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</p>
      <p className='example'>{p2}</p>
      <p className="text-p">UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</p>
      <p className='example'>{p3}</p>
      <p className="text-p">UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</p>
      <p className='example'>{p4}</p>
      <p className="text-p">UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</p>
      <p className='example'>{p5}</p>
    </div>
  )
}

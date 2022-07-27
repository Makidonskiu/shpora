export const UseEffect = () => {
  return (
    <div className="content">
      <h2>UseEffect</h2>
      <p className="text-p">Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
      <p className='example'>import useEffect from 'react';</p>
      <p className="text-p">Хук позволяет использовать 3 метода жизненного цикла:</p>
      <ul>
      <li>componentDidMount()</li>
      <li>componentDidUpdate(prevProps, prevState)</li>
      <li>componentWillUnmount()</li>
      </ul>
      <p className="text-p">UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</p>
      <p className='example'></p>
      <p className="text-p">UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</p>
      <p className='example'></p>
      <p className="text-p">UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</p>
      <p className='example'></p>
      <p className="text-p">UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</p>
      <p className='example'></p>
    </div>
  )
}

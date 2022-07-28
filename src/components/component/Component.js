import React from 'react'

const test = `function Welcome() { 
  return <h1>Привет, мир! </h1>;
}`
const test2 = `class Welcome extends React.Component {
  render() {
      return <h1>Привет, мир!</h1>;
  }
}`

export const Component = () => {
  return (
    <div className='content'>
        <h2>Компоненты</h2>
        <p className='text-p'>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</p>
        <p className='text-p'>Компоненты бывают функциональные и классовые.</p>
        <p className='text-p'>Проще всего объявить React-компонент как функцию:</p>
        <p className='example'>{test}</p>
        <p className='text-p'>Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.</p>
        <p className='text-p'>Ещё компоненты можно определять как классы ES6:</p>
        <p className='example'> {test2}</p>
          <p className='text-p'>Компонента должна себя вести как чистая функция.</p>
          <p className='text-p'>«Чистой» называется функция, которая:</p>
          <ul>
            <li>Для одинаковых входных данных всегда возвращает один результат.</li>
            <li>Не имеет побочных эффектов (то есть не изменяет внешние состояния).</li>
            <li>Не зависит от внешних состояний.</li>
          </ul>
    </div>
  )
}

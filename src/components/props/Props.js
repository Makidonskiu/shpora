import React from 'react'

const p1 = 
`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}`
const p2 = 
` class Welcome extends React.Component {
  render() {
      return <h1>Привет, {this.props.name}</h1>;
  }
}`
const p3 = `const element = <Welcome name="Алиса" />;`
const p4 = 
`function Welcome (props) {
  return <h1> Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`

const ul1 = `Мы передаём React-элемент <Welcome name="Алиса"> в ReactDOM.render().`
const ul2 = `React вызывает наш компонент Welcome с пропсами {name: 'Алиса'}.`
const ul3 = `Наш компонент Welcome возвращает элемент <h1>Привет, Алиса</h1> в качестве результата.`
const ul4 = `React DOM делает минимальные изменения в DOM, чтобы получилось <h1>Привет, Алиса</h1>.`

export const Props = () => {
  return (
    <div className='content'>
      <h2>Props</h2>
      <p className='text-p'>То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами.</p>
      <p className='text-p'>Функциональные компоненты свойства принимают в качестве аргумента.</p>
      <p className='text-p'>Props представляют собой объект, содержащие свойства.</p>
      <p className='text-p'>Обратиться к ним можно - props.имя-свойства.</p>
      <p className='text-p'>Props - только для чтения.</p>

      <pre className='example'>{p1}</pre>

      <p className='text-p'>Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью this.props.имя-свойства.</p>

      <pre className='example'>{p2}</pre>

      <p className='text-p'>Элементы могут описывать и наши собственные компоненты:</p>

      <pre className='example'>{p3}</pre>

      <p className='text-p'>Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы».</p>
      <p className='text-p'>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>

      <pre className='example'>{p4}</pre>

      <ol>
        <li>{ul1}</li>
        <li>{ul2}</li>
        <li>{ul3}</li>
        <li>{ul4}</li>
      </ol>
    </div>
  )
}

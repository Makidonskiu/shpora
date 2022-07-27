import React from 'react'

export const Props = () => {
  return (
    <div className='content'>
      <h2>Props</h2>
      <p className='text-p'>То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами.</p>
      <p className='text-p'>Функциональные компоненты свойства принимают в качестве аргумента.</p>
      <p className='text-p'>Props представляют собой объект, содержащие свойства.</p>
      <p className='text-p'>Обратиться к ним можно - props.имя-свойства.</p>
      <p className='text-p'>Props - только для чтения.</p>

      <p className='example'></p>

      <p className='text-p'>Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью this.props.имя-свойства.</p>

      <p className='example'></p>

      <p className='text-p'>Элементы могут описывать и наши собственные компоненты:</p>

      <p className='example'></p>

      <p className='text-p'>Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы».</p>
      <p className='text-p'>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>

      <p className='example'></p>

      <ol>
        {/* <li>Мы передаём React-элемент <{Welcome}  name="Алиса" > в ReactDOM.render().</li> */}
        {/* <li>React вызывает наш компонент Welcome с пропсами {{name: 'Алиса'}}.</li> */}
        <li>Наш компонент Welcome возвращает элемент <h5> Привет, Алиса</h5> в качестве результата.</li>
        <li>React DOM делает минимальные изменения в DOM, чтобы получилось <h5>Привет, Алиса</h5>.</li>
      </ol>
    </div>
  )
}

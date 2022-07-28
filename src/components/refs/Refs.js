import React from 'react'

const p1 = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}`
const p2 = `import { useRef } from 'react';

function MyComponent () {
    const refContainer = useRef(initialValue);
    return (
        <div ref={refContainer} />
    );
}`

export const Refs = () => {
  return (
    <div className='content'>
      <h2>Refs</h2>
      <p className='text-p'>Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().</p>
      <p className='text-p'>Есть несколько хороших примеров использования ссылок:</p>
      <ul>
        <li>Управление фокусом, выделение текста или воспроизведение медиаресурсами.</li>
        <li>Выполнение анимаций в императивном подходе.</li>
        <li>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
      </ul>
      <p className='text-p'>Ссылки создаются с использованием React.createRef() и добавляются к React-элементам с помощью атрибута ref. Ссылки обычно присваиваются свойству экземпляра, когда компонент создаётся таким образом, чтобы на них можно было ссылаться по всему компоненту.</p>
      <p className='example'>{p1}</p>
      <p className='text-p'>В функциональных компонентах используется хук useRef:</p>
      <p className='example'>{p2}</p>
      <p className='text-p'>useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.</p>
    </div>
  )
}

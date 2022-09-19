import React from 'react';

const p1 = 
`constructor(props) {
  super(props);
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}`
const p2 = 
`render () {
  return (
      <div>
          'Hello'
      </div>
  )
}`
const p3 = `componentDidMount()`
const p4 = 
`componentDidUpdate(prevProps, prevState) {
  if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
  }
}
`
const p5 = 
`componentWillUnmount() {
  alert("The component named Header is about to be unmounted.");
}
`

export const LifeCycle = () => {
  return (
    <div className='content'>
      <h2>Методы жизненного цикла</h2>
      <p className='text-p'>Основные методы жизненного цикла:</p>
      <p className='text-p'>1. constructor ()</p>
      <p className='text-p'>Обычно в React конструкторы используются только для двух целей:</p>
      <ul>
        <li>Инициализация локального состояния путем присвоения объекта this.state.</li>
        <li>Привязка методов обработчика событий к экземпляру.</li>
      </ul>
      <pre className='example'>{p1}</pre>
      <p className='text-p'>2. render ()</p>
      <p className='text-p'>Рендеринг компонента. Отдает JSX.</p>
      <pre className='example'>{p2}</pre>
      <p className='text-p'>3. componentDidMount()</p>
      <p className='text-p'>componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево). Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к DOM-элементам.</p>
      <pre className='example'>{p3}</pre>
      <p className='text-p'>4. componentDidUpdate(prevProps, prevState)</p>
      <p className='text-p'>Вызывается после обновления компонента. В качестве парапметров передаются старые значения объектов: props и state.</p>
      <pre className='example'>{p4}</pre>
      <p className='text-p'>5. componentWillUnmount()</p>
      <p className='text-p'>Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.</p>
      <pre className='example'>{p5}</pre>
      <p className='text-p'>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
    </div>
  );
};

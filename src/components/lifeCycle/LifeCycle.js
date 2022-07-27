import React from 'react';

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
      <p className='example'></p>
      <p className='text-p'>2. render ()</p>
      <p className='text-p'>Рендеринг компонента. Отдает JSX.</p>
      <p className='example'></p>
      <p className='text-p'>3. componentDidMount()</p>
      <p className='text-p'>componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево). Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к DOM-элементам.</p>
      <p className='example'>componentDidMount()</p>
      <p className='text-p'>4. componentDidUpdate(prevProps, prevState)</p>
      <p className='text-p'>Вызывается после обновления компонента. В качестве парапметров передаются старые значения объектов: props и state.</p>
      <p className='example'></p>
      <p className='text-p'>5. componentWillUnmount()</p>
      <p className='text-p'>Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.</p>
      <p className='example'></p>
      <p className='text-p'>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
    </div>
  );
};

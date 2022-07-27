import React from 'react';

import './state.css';

export const State = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="content">
      <h2>State</h2>
      <p className="text-p">
        State (состояние) в React – это объект простого JS, позволяющий отслеживать данные
        компонента. Состояние компонента может меняться. Смена состояния компонента зависит от
        функциональности приложения. Изменения могут основываться на ответе от пользователя, новых
        сообщениях с сервера, ответа сети и т.д.
      </p>
      <p className="text-p">
        Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения
        состояния компонента необходимо делать внутри компонента – инициализация и обновление
        состояния компонента.
      </p>
      <p className="example"></p>
      <p className="text-p">Единственный допустимый способ обновления состояния компонента – через setState().</p>
      <p className="text-p">Так нельзя менять состояние: this.state.username='Mark'</p>
      <p className="text-p">1 способ изменить state:</p>
      <p className="example"></p>
      <p className="text-p">2 способ изменить state:</p>
      <p className="example"></p>
      <p className="text-p">В функциональных компонентах state создается с помощью хука useState()</p>
      <p className="text-p">Чтобы воспользоваться им, необходимо импортировать useState из 'react':</p>
      <p className="example"></p>
      <p className="text-p">
        Хук useState() принимается в качестве параметра первоначальное значение для переменной, а
        возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.
      </p>
      <p className="text-p">При объявлении state часто используют деструктурирующее присваивание:</p>
      <p className="example"></p>
      <div className="count">
        <button onClick={() => setCount(count - 1)}>-1</button>
        Счетчик : {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      <p className="text-p">Примером работы со state является счётчик, который изменяется при нажатии на кнопку.</p>
      <p className="text-p">Код имеет следующий вид:</p>
      <p className="example"></p>
    </div>
  );
};

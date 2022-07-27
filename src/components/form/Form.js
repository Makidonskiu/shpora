import React from 'react'

export const Form = () => {
  return (
    <div className='content'>
      <h2>Работа с формами</h2>
      <p className='text-p'>В React мы можем использовать все стандартные элементы форм, которые есть в html, однако здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с формами в React.</p>
      <p className='example'></p>
      <p className='text-p'>Чтобы контролировать введенные значения, в конструкторе устанавливается объект state:</p>
      <p className='example'>{"this.state = {name: ''};"}</p>
      <p className='text-p'>При определении поля ввода каждое поле связывается с определенным значением в state:</p>
      <p className='example'></p>
      <p className='text-p'>Так, источником значения для поля ввода имени является объект this.state.name.</p>
      <p className='text-p'>Для отслеживания изменений в поле ввода нам надо определить обработчик для события change с помощью атрибута onChange. Этот обработчик будет срабатывать при каждом нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет доступно только для чтения.</p>
      <p className='text-p'>Суть каждого обработчика заключается в изменении значений в this.state:</p>
      <p className='example'></p>
      <p className='text-p'>С помощью e.target.value получаем введенное значение. После обновления новое значение this.state.name отобразится в поле ввода.</p>
    </div>
  )
}

import React from 'react'

export const Fragments = () => {
  return (
    <div className='content'>
      <h2>Фрагмент</h2>
      <p className='text-p'>С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.</p>
      <p className='text-p'>Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:</p>
      <p className='example'></p>
      <p className='text-p'>Заменяем теги div на Fragment:</p>
      <p className='example'></p>
      <p className='text-p'>Существует сокращенная запись (импортировать не нужно):</p>
      <p className='example'></p>
      <p className='text-p'>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
    </div>
  )
}

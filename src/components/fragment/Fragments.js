import React from 'react'

const p1 = `import { Fragment } from 'react';`
const p2 = 
`class ChildComponent extends React.Component {
  render() {
      return (
          <Fragment>
              <h1>Hello Child Component</h1>
          </Fragment>
      )
  }
}`
const p3 = 
`class ChildComponent extends React.Component {
  render() {
      return (
          <>
              <h1>Hello Child Component</h1>
          </>
      )
  }
}`

export const Fragments = () => {
  return (
    <div className='content'>
      <h2>Фрагмент</h2>
      <p className='text-p'>С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.</p>
      <p className='text-p'>Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:</p>
      <pre className='example'>{p1}</pre>
      <p className='text-p'>Заменяем теги div на Fragment:</p>
      <pre className='example'>{p2}</pre>
      <p className='text-p'>Существует сокращенная запись (импортировать не нужно):</p>
      <pre className='example'>{p3}</pre>
      <p className='text-p'>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
    </div>
  )
}

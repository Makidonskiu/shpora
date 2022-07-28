import React from 'react'

const p1 = `const MyComponent = React.memo(function MyComponent(props) {
  /* рендер с использованием пропсов */
});`
const p2 = `function MyComponent(props) {
  /* рендер с использованием пропсов */
}
function areEqual(prevProps, nextProps) {
  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
}
export default React.memo(MyComponent, areEqual);`
const p3 = `shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqual (nextProps, this.props) ||
         !shallowEqual (nextState, this.state);
}`

export const ReactMemo = () => {
  return (
    <div className='content'>
      <h2>React.memo</h2>
      <p className='example'>{p1}</p>
      <p className='text-p'>React.memo — это компонент высшего порядка.</p>
      <p className='text-p'>Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент.</p>
      <p className='text-p'>Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</p>
      <p className='text-p'>React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.</p>
      <p className='text-p'>По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.</p>
      <p className='example'>{p2}</p>
      <p className='text-p'>Этот метод предназначен только для оптимизации производительности.</p>
      <p className='text-p'>Аналогом в классовых компонентах выступает метод shouldComponentUpdate()</p>
      <p className='example'>{p3}</p>
    </div>
  )
}

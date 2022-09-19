import React from 'react'

const p1 = `const MyContext = React.createContext(defaultValue);`
const p2 = `<MyContext.Provider value={value}> </MyContext.Provider>`
const p3 = `
<MyContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`
const p4 = `const value = useContext(MyContext);`

export const Context = () => {
  return (
    <div className='content'>
      <h2>Контекст</h2>
      <p className='text-p'>Контекст разработан для передачи данных для всего дерева React-компонентов, не прокидывая через пропсы.</p>
      <p className='text-p'>Создать контекст:</p>
      <pre className='example'>{p1}</pre>
      <ul><li>defaultValue - дефолтное значение или объект для получения через контекст</li></ul>
      <p className='text-p'>Вызывая React.createContext мы получаем объект, который содержит два компонента:</p>
      <p className='text-p'>1. Компонент Provider. Благодаря ему все дочерние компоненты могут получать значения, которые мы ему передаем.</p>
      <pre className='example'>{p2}</pre>
      <p className='text-p'>Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider. Один Provider может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.</p>
      <p className='text-p'>2. Компонент Consumer - это React-компонент, который подписывается на изменения контекста.</p>
      <p className='text-p'>Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().</p>
      <pre className='example'>{p3}</pre>
      <p className='text-p'>Хук useContext. Принимает один параметр - это объект контекста, получаемый при вызове React.createContext и возвращает текущее значение контекста для этого контекста.</p>
      <p className='text-p'>Текущее значение контекста определяется пропом value ближайшего MyContext.Provider над вызывающим компонентом в дереве.</p>
      <pre className='example'>{p4}</pre>
      <p className='text-p'>Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения контекста. Если повторный рендер компонента затратен, вы можете оптимизировать его с помощью мемоизации.</p>
      <p className='text-p'>Контекст лучше всего создавать в отдельном файле.</p>
    </div>
  )
}

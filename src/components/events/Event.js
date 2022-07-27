import React from 'react';

import './event.css';

export const Event = () => {
  const [isToggleOn, setIsToggleOn] = React.useState(true);
  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }
  return (
    <div className="content">
      <h2>Обработка событий</h2>
      <p className='text-p'>События в React именуются в стиле camelCase вместо нижнего регистра.</p>
      <p className='text-p'>С JSX вы передаёте функцию как обработчик события вместо строки.</p>
      <p className='text-p'>Популярные обработчики событий: onClick, onChange</p>
      <p className='text-p'>Существует множество поддерживаемых событий, вот общий список:</p>
      <ul>
        <li>Буфер обмена: onCopy, onCut, onPaste</li>
        <li>Составление/ввод данных: onCompositionEnd, onCompositionStart, onCompositionUpdate</li>
        <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
        <li>Фокусировка: onFocus, onBlur</li>
        <li>Форма: onChange, onInput, onSubmit</li>
        <li>
          Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit,
          onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave,
          onMouseMove, onMouseOut, onMouseOver, onMouseUp
        </li>
        <li>Выделение: onSelect</li>
        <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
        <li>UI: onScroll</li>
        <li>Колёсико мышки: onWheel</li>
        <li>
          Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange, onEmptied, onEncrypted,
          onEnded, onError, onLoadedData, onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying,
          onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate,
          onVolumeChange, onWaiting
        </li>
        <li>Изображение: onLoad, onError</li>
        <li>Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration</li>
        <li>Переход: onTransitionEnd</li>
      </ul>
      <p className="example"></p>
      <p className='text-p'>
        В React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно
        вызвать preventDefault.
      </p>
      <p className="example"></p>
      <p className='text-p'>
        В компоненте, определённом с помощью ES6-класса, в качестве обработчика события обычно
        выступает один из методов класса. Например, этот компонент Toggle рендерит кнопку, которая
        позволяет пользователю переключать состояния между «Включено» и «Выключено»:
      </p>
      <p className="example"></p>
      <p className='text-p'>Результат кода:</p>
      <button className={'toggle__btn'} onClick={() => handleClick()}>
        {isToggleOn ? 'Включено' : 'Выключено'}
      </button>
      <p className='text-p'>Этот же код, но переписанный на функциональную компоненту:</p>
      <p className="example"></p>
      <p className='text-p'>Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например, если id — это идентификатор строки, можно использовать следующий вариант:</p>
      <p className="example"></p>
    </div>
  );
};

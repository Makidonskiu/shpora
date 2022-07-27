import { Route, Routes } from 'react-router-dom';

import { Home } from './components/home/Home';

import './App.css';
import { 
  Asynchronous,
  Props,
  State,
  LifeCycle,
  Component,
  Event,
  Key,
  Refs,
  VirtualDom,
  Fragments,
  ReactMemo,
  UseEffect,
  Router,
  Context,
  Form
} from './components/index';

function App() {
  return (
    <Home>
      <Routes>
        <Route path="/shpora/components" element={<Component />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/lifecycle" element={<LifeCycle />} />
        <Route path="/events" element={<Event />} />
        <Route path="/key" element={<Key />} />
        <Route path="/refs" element={<Refs />} />
        <Route path="/asynchronous" element={<Asynchronous />} />
        <Route path="/virtual" element={<VirtualDom />} />
        <Route path="/fragment" element={<Fragments />} />
        <Route path="/react-memo" element={<ReactMemo />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/router" element={<Router />} />
        <Route path="/context" element={<Context />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Home>
  );
}

export default App;

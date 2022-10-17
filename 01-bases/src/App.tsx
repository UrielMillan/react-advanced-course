import { Counter } from './bases/Counter';
import {CounterBy} from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect';
import { CounterEffectHook } from './bases/CounterEffectHook';
//import { CounterReducerComponent } from './bases/CounterReducerComponent';
import {CounterReducerComponent} from './counter-reducer/CounterReducer';

function App() {
  return (
    <>
     <Counter/>
     <CounterBy/>
     <CounterEffect/>
     <CounterEffectHook/>
     <CounterReducerComponent/>
    </>
  );
}

export default App;

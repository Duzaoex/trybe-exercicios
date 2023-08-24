import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from './redux/actions';
import "./App.css";

type RootState = {
  count: number;
};

function App() {
  const count = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
      <div>
      <h1>Contador</h1>
      <h2>{ count.count }</h2>
      <button onClick={ () => dispatch(actionCreator()) }>Incrementa 1</button>
      <button onClick={ () => dispatch(actionCreator(5)) }>Incrementa 5</button>
      <button onClick={ () => dispatch(actionCreator(-1)) }>Incrementa 5</button>
      <button onClick={ () => dispatch(actionCreator(-5)) }>Incrementa 5</button>
    </div>
  );
}

export default App;

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function App() {

  const store = useSelector(store => store);
  const dispatch = useDispatch();
  console.log('store ↓');
  console.log(store);


  return (
    <div >
      <button onClick={() => dispatch({ type: 'LOAD_DATA' })}>kekwww</button>
      kek
    </div>
  );
}

export default App;

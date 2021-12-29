// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './App.css';

function App() {

  const store = useSelector(store => store);
  // const dispatch = useDispatch();
  console.log('store ↓');
  console.log(store);


  return (
    <div className="container">

      <div>
        <Link to={'/blog'}>
          Blog
        </Link>

      </div>
    </div>
  );
}

export default App;

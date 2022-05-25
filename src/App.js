import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const error = useSelector((state) => state.cats.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Cats Spices gallery</h1>
      <p> lots of cats</p>
      <hr />
      <h1>{error}</h1>
      <div className="gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                alt={cats.name}
                src={cat.image.url}
                width="200"
                height="200"
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

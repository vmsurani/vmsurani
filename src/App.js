import "./App.css";
import Login from "./Login";
import { createStore } from "redux";

import { Provider } from "react-redux";

import authReducer from "./Reducer";


const store = createStore(authReducer);

function App() {
  return (
    <>
      <Provider store={store}>
        <Login />
      </Provider>
    </>
  );
}

export default App;

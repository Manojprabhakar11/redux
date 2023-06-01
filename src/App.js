import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import ButtonAction from "./component/ButtonAction";

function App() {
  return (
    <Provider store={store}>
      <ButtonAction />
    </Provider>
  );
}

export default App;

import Root from "./src/navigation/index";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;

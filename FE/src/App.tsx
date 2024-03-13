import UserTabs from "./components/Tabs/tabs";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <UserTabs />
    </Provider>
  );
}

export default App;

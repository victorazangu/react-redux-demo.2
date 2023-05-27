import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
            <NewCakeContainer/>
				<HooksCakeContainer />
				<CakeContainer />
				<IceCreamContainer />
			</div>
		</Provider>
	);
}

export default App;

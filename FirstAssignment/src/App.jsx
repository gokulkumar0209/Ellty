import { useState } from "react";
import Home from "./Pages/HomePage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className=" h-screen w-screen">
			<Home />
		</div>
	);
}

export default App;

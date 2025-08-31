import CardHeader from "./components/CardHeader"
import CardItems from "./components/CradItems"
import Header from "./components/Header"

function App() {
	const cardItemsLenght = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	return (
		<div className="w-full flex items-center flex-col justify-center">
			<Header />
			<CardHeader />
			<div className="grid grid-cols-2 gap-4 p-4">
				{cardItemsLenght.map((item) => (
					<CardItems key={item} />
				))}
			</div>
		</div>
	)
}

export default App

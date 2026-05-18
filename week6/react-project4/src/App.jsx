import CounterPanelOne from "./components/CounterPanelOne"
import CounterPanelTwo from "./components/CounterPanelTwo"
import CounterPanelThree from "./components/CounterPanelThree"
import CounterPanelFour from "./components/CounterPanelFour"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-2 gap-6">
        <CounterPanelOne />
        <CounterPanelTwo />
        <CounterPanelThree />
        <CounterPanelFour />
      </div>
    </div>
  )
}

export default App

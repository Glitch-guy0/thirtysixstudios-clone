import Canvas from "./Canvas";
import "./index.css";



export default function App() {
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <Canvas startIndex={0} />

      <Canvas startIndex= {151}/>
    </div>
  )
}
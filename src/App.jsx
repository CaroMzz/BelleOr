import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import AppRouter from "./AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
      <ItemListContainer message={"¡Bienvenido a Belle Or!"}></ItemListContainer>
    </div>
  )
}

export default App

import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  const categories = ["Anillos", "Cadenitas", "Pulseras", "Aros", "Conjuntos"]

  return (
    <div>
      <NavBar categoriesNav = {categories}></NavBar>
      <ItemListContainer message={"¡Bienvenido a Belle Or!"}></ItemListContainer>
    </div>
  )
}

export default App

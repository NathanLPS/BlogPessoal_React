import './App.css'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
     <Home 
        titulo = "Componente Home"
        texto = "Este texto foi enviado pelo Componente App."
     />
    <Contador />
    <Tarefa />
    </>
  )
}

export default App

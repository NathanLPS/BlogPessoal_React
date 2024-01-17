import { useState } from "react";


interface homeProps {
  titulo: string;
  texto: string;
}

function Home(props: homeProps) {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>

      {
        isLogged ? (
          <div>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <button onClick={() => setIsLogged(true)}>Entrar</button>
          </div>
        )
      }

    </>
  )
}

export default Home

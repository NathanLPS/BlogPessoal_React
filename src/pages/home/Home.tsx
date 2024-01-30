import { Link } from "react-router-dom"
import ListaPostagem from "../../components/postagens/listapostagens/ListaPostagem"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div id="container" className="
                flex 
                justify-center 
                bg-yellow-400
                ">
                <div id="subcontainer" className="
                    container 
                    grid 
                    grid-cols-2 
                    text-black
                    ">
                    <div id="texto" className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                        <h2 className="
                            text-5xl
                            font-bold
                        ">Bem Vindos!</h2>
                        <p className="text-xl">Compartilhe conosco sua música de preferência</p>
                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                            <Link to="/postagens">
                                <button className= 'border rounded px-4 hover:bg-white'>
                                    Ver Todas as Postagens
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div id="imagem" className="
                        flex 
                        justify-center
                        ">
                        <img
                            src="https://ik.imagekit.io/id3pm8vmy/musica.jpg?updatedAt=1706011936088"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagem />
        </>
    )
}
export default Home
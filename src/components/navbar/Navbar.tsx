import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    let component: ReactNode

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', "sucesso")
        navigate('/login')
    }

    if (usuario.token !== "") {
        component = (

            <div className='w-full bg-yellow-400 text-black border-black 
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Minha Música</Link>
                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {component}
        </>
    )
}
export default Navbar
import { useContext, useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import CardPostagem from '../cardpostagem/CardPostagem';
import { DNA } from 'react-loader-spinner';
import Postagem from '../../../models/Postagem';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function ListaPostagens() {
    const [postagens, setPostagens] = useState<Postagem[]>([]);
  
    let navigate = useNavigate();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
  
    useEffect(() => {
      if (token === '') {
        ToastAlerta('Você precisa estar logado', 'info');
        navigate('/');
      }
    }, [token]);
  
    async function buscarPostagens() {
      try {
        await buscar('/postagens', setPostagens, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error: any) {
        if (error.toString().includes('403')) {
          ToastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        }
      }
    }
  
    useEffect(() => {
      buscarPostagens();
    }, [postagens.length]);
    return (
      <>
        {postagens.length === 0 && (
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {postagens.map((postagem) => (
            <CardPostagem key={postagem.id} post={postagem} />
          ))}
        </div>
      </>
    );
  }
  
  export default ListaPostagens;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext'
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-white text-3xl font-bold cursor-pointer p-0'>
          Ca<span className='bg-orange-500 h-0 px-4  rounded cursor-pointer text-white text-5xl '>z</span>co
        </h1>
      </Link>
      {user?.email ? (
        <div>
          {/* Botão de pesquisa */}

          
          
          <Link to='/search' >
          
          <button className='text-white pr-2 '>
          <BsSearch className='  flex-initial inline mx-1 align-middle '/>Buscar | 
          </button>
          
          </Link>




          <Link to='/account'>
            <button className='text-white pr-4 '>Lista</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Sair
          </button>









        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Entrar</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-orange-500 px-6 py-2 rounded cursor-pointer text-white'>
              Inscreva-se
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import Header from "../../Header";
import React, { useEffect,useState } from 'react';

const Home = () => {
    const [contador, setContador] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    const decrementar = () => {
        setContador(contador - 1)
    };

   useEffect(()=>{
    document.title = ` Contador ${contador}`
   },[contador])
    return (
        <>  <Header />
            <div className={darkMode ? 'centro dark' : 'centro'}>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
                <h1>Contagem: {contador}</h1>
                <button onClick={decrementar}>Decrementar</button>
            </div>
            <div onClick={() => setDarkMode(!darkMode)} className="switch">
                {darkMode ? 'Acender' : 'Apagar'} Luz
            </div>
            
        </>
    );
}

export default Home
import React from 'react'
import './estilo.css'

const Accordion = () => {
     
    const [active, setActive] = React.useState(false);

    return(
        <>
            <div className={active ? 'accordion active' : 'accordion'} onClick={() => setActive(!active)}>
                <h3>Titulo da sanfona</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptate?</p>
            </div>
        </>
    );
}

export default Accordion
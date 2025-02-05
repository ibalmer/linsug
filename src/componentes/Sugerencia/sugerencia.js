import './sugerencia.css';

export function Sugerencia({srcAvatar, dscAvatar, nombreUsuario, descripcion,descripcionOpcional}){
    return(
        <section className='sug-sec'>
            <img className='avatar' src={srcAvatar} alt={dscAvatar}></img>
            <div className='datos'>
            <h4 className='usuario'>{nombreUsuario}</h4>
                <div className='desc'>
                    <p className='texto-desc'>{descripcion}</p>
                    <i class="fa-solid fa-circle"></i>
                    <p className='texto-desc'>{descripcionOpcional}</p>
                </div>
            <button className='button'>
                <i class="fa-solid fa-plus"></i>
                <p>Seguir</p>
            </button>
            </div>
        </section>
        )
};
import './SugBox.css';
import { Sugerencia } from '../Sugerencia/sugerencia';
import avatar from './img/avatar.jpg';


export function SugBox(){
    let sugList = [
        {
            srcAvatar: avatar,
            dscAvatar: 'la imagen',
            nombreUsuario:'Juan Perez',
            descripcion: 'Empresa',
            descripcionOpcional: 'Articulos de importacion.',
            verificado: true
        },
        {
            srcAvatar: avatar,
            dscAvatar: 'la imagen',
            nombreUsuario:'don Perez',
            descripcion: 'Empresa',
            descripcionOpcional: 'Articulos de importacion.',
            verificado: false
        },
        {
            srcAvatar: avatar,
            dscAvatar: 'la imagen',
            nombreUsuario:'Juan Perez',
            descripcion: 'Empresa',
            descripcionOpcional: 'Articulos de importacion.',
            verificado: false
        },
        {
            srcAvatar: avatar,
            dscAvatar: 'la imagen',
            nombreUsuario:'don Perez',
            descripcion: 'Empresa',
            descripcionOpcional: '',
            verificado: true
        },
        {
            srcAvatar: avatar,
            dscAvatar: 'la imagen',
            nombreUsuario:'Juan Perez',
            descripcion: 'Empresa',
            descripcionOpcional: 'Articulos de importacion.',
            verificado: false
        }
    ];
    return(
        <>
            <div className='sug-cont'>
                <h3 className='add'>Añadir a tu feed</h3>
                <ul className='sug-list'>
                    {
                        sugList.map(sug => (
                            <Sugerencia 
                            srcAvatar={sug.srcAvatar} 
                            dscAvatar={sug.dscAvatar} 
                            nombreUsuario={sug.nombreUsuario}
                            descripcion={sug.descripcion}
                            descripcionOpcional={sug.descripcionOpcional}
                            />
                        ))
                    }
                </ul>
                <h5 className='recomendaciones'>Ver todas las recomendaciones<i class="fa-solid fa-arrow-right"></i></h5>
            </div>
        </>
    )
};
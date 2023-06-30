import notfound from '../../TodoEmpty/img404.webp';
const NotFound = () => {

  return (
    <div className='notfound-container'>
      <h1>pagina no encontrada</h1>
      <img src={notfound} alt="pagina no encontrada"  className='imageNotfound'/>
    </div>
  );
}

export {NotFound}
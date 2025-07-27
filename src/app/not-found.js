const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Página no encontrada</h1>
      <p className="not-found-description">
        La funcionalidad que estás buscando no existe o fue movida.
      </p>
      <a href="/" className="button-primary">
        Volver al inicio
      </a>
    </div>
  );
};
export default NotFound;

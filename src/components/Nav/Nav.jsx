import "./Nav.css";

function Nav({ fnSubmit, fnClick, fnOnChange, dataOptions }) {
  return (
    <nav>
      <form onSubmit={fnSubmit} >
        <div className="form-floating input-group mb-3 " >
          <input
            type="text"
            className="form-control" 
            id="floatingInputValue"
          />
          <label htmlFor="floatingInputValue">
            Nombre específico de un pokemon:
          </label>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            id="button-addon1"
          >
            Buscar
          </button>
        </div>
      </form>
      <div>
        
        <div id="options" className="form-floating">
          <input type="text" onChange={fnOnChange} className="form-control" id="floatingInputValue"/>
          <label htmlFor="floatingInputValue">Filtra según escribes:</label>
          <ul>
            {dataOptions?.map((pokemon, i) => (
              <li key={i}>
                <button value={pokemon.name} onClick={fnClick}>
                  {pokemon.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <button onClick={fnClick} value="pikachu" className="btn btn-info">
            Pikachu
          </button>
        </div>
        <div>
          <button onClick={fnClick} value="charizard" className="btn btn-info">
            Charizard
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

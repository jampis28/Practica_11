import "./Card.css";

function Card({ data }) {
  return (
    <section>
      <div>
        <img src={data.sprites?.other.home.front_default} alt={data.name} />
      </div>
      <table className="table table-sm table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col" >Propiedad</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">ID</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td scope="row">Nombre</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td scope="row">Altura</td>
            <td>{data.height}</td>
          </tr>
          <tr>
            <td scope="row">Peso</td>
            <td>{data.weight}</td>
          </tr>
          <tr>
            <td>Experiencia base</td>
            <td>{data.base_experience}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Card;

import style from './CarDetails.module.css';

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div className={style.card}>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Carro novo!</p>}
    </div>
  );
};

export default CarDetails;

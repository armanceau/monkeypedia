import { Link } from "react-router";
import "./Card.css";

interface CardProps {
  name: string;
  image: string;
  family: String;
  id: Number;
}

const Card = ({ name, image, id, family }: CardProps) => {
  return (
    <div className="card">
      <img src={image ?? ""} className="card-img" alt={name} />
      <div>{name}</div>
      <div>{family}</div>
      <div>
        {id !== undefined ? (
          <Link to={id.toString()}>Info</Link>
        ) : (
          <span>Pas d'info</span>
        )}
      </div>
    </div>
  );
};

export default Card;

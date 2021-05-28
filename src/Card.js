import './Card.css'; 

function Card(props) {
  return (
    <div className="card"> 
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>{props.footer}</p>
    </div>
  );
}

export default Card;

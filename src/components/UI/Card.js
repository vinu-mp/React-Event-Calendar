import './Card.css';

function Card(props) {
  const classes = props.classes + ' card'
  return <div className={classes}>{props.children}</div>
}

export default Card;

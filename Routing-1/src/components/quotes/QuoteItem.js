import { Link, useHistory } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  const history = useHistory();
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>

      <Link to={`${history.location.pathname}/${props.id}`} className='btn'>View Fullscreen</Link>
    </li>
  );
};

export default QuoteItem;

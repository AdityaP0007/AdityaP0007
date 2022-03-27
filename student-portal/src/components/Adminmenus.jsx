import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Adminmenus = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action" tag="a" to="/">
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add_student"
      >
        Add Student
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add_faculty"
      >
        Add Faculty
      </Link>
    </ListGroup>
  );
};

export default Adminmenus;

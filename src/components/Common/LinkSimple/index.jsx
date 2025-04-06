import { Link } from "react-router";

function LinkSimple({ children, linkTo = "#", linkTarget = "_self" }, props) {
  return (
    <Link to={linkTo} target={linkTarget} {...props}>
      {children}
    </Link>
  );
}

export default LinkSimple;

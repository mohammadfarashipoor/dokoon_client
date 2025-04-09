import { Link } from "react-router";

function LinkSimple(
  { children, linkTo = "#", linkTarget = "_self", className = "" },
  props
) {
  return (
    <Link className={className} to={linkTo} target={linkTarget} {...props}>
      {children}
    </Link>
  );
}

export default LinkSimple;

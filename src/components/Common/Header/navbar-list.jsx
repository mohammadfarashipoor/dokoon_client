import {
  faBars,
  faFilm,
  faHandshake,
  faLink,
  faPercent,
  faPlus,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const navbarList = [
  {
    title: "دسته بندی کالاها",
    icon: (
      <FontAwesomeIcon className="icon-icon" aria-hidden="true" icon={faBars} />
    ),
    children: true,
  },
  {
    title: "دمو محصولات",
    icon: (
      <FontAwesomeIcon className="icon-icon" aria-hidden="true" icon={faFilm} />
    ),
    link: "#",
  },
  {
    title: " تخفیفات و پیشنهادات",
    icon: (
      <FontAwesomeIcon
        className="icon-icon"
        aria-hidden="true"
        icon={faPercent}
      />
    ),
    link: "#",
  },
  {
    title: " دکوون امن",
    icon: (
      <FontAwesomeIcon
        className="icon-icon"
        aria-hidden="true"
        icon={faUserSecret}
      />
    ),
    link: "#",
  },
  {
    title: "دکوون پلاس",
    icon: (
      <FontAwesomeIcon className="icon-icon" aria-hidden="true" icon={faPlus} />
    ),
    link: "#",
  },
  {
    title: "دکوون کلاب",
    icon: (
      <FontAwesomeIcon className="icon-icon" aria-hidden="true" icon={faLink} />
    ),
    link: "#",
  },
  {
    title: "مَسای پی",
    icon: (
      <FontAwesomeIcon
        className="icon-icon"
        aria-hidden="true"
        icon={faHandshake}
      />
    ),
    link: "#",
  },
  {
    title: "سوالی دارید؟",
    link: "#",
  },
  {
    title: "فروشنده شوید",
    link: "#",
  },
];
export default navbarList;

import {
  faBars,
  faCartArrowDown,
  faFilm,
  faHandshake,
  faLink,
  faMap,
  faPercent,
  faPlus,
  faUserLarge,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import LinkSimple from "../LinkSimple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemCart from "@/components/Store/ItemCart";
import navbarList from "./navbar-list.jsx";
import CategoryList from "./category-list.json";
function Header() {
  return (
    <header className="Masai-header default">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4 col-5">
            <div className="logo-area default">
              <LinkSimple linkTo="/">
                <img src="assets/img/logo.png" alt="" />
              </LinkSimple>
            </div>
          </div>
          <div className="col-lg-8 col-md-5 col-sm-8 col-7">
            <div className="search-area default">
              <form action="#" className="search">
                <input type="text" placeholder="جستجو" />
                <button type="submit">
                  <img src="/src/assets/img/search.png" alt="" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="user_head">
              <LinkSimple linkTo="/login" className="iconhead">
                <FontAwesomeIcon
                  className="font-20"
                  aria-hidden="true"
                  icon={faUserLarge}
                />
              </LinkSimple>
            </div>
            <div className="cart dropdown masai_dropdown">
              <span className="divider"></span>

              <LinkSimple
                className="dropdown-toggle iconhead"
                data-toggle="dropdown"
                id="navbar_a"
              >
                <FontAwesomeIcon
                  className="font-20"
                  aria-hidden="true"
                  icon={faCartArrowDown}
                />
              </LinkSimple>

              <div className="dropdown-menu" aria-labelledby="navbar_a">
                <ul className="m_cart-list">
                  <li className="m_cart_li1">
                    <LinkSimple linkTo="/produt/:id" className="m_cart-item">
                      <ItemCart
                        title="شیائومی مدل Poco X4"
                        count="1"
                        color="مشکی"
                        imgSrc="assets/img/product_img/p_9.jpg"
                      />
                    </LinkSimple>
                  </li>
                </ul>
                <div className="m_cart-header">
                  <div className="m_cart-total">
                    <span>مجموع سبد:</span>
                    <span> ۳۵,۲۵۳,۵۰۰</span>
                    <span> تومان</span>
                  </div>
                </div>
                <div className="btn_cart">
                  <LinkSimple linkTo="/cart" className="btn btn_sabad">
                    مشاهده سبد
                  </LinkSimple>
                  <LinkSimple
                    linkTo="/payment"
                    className="btn btn_pardakht btn-main-masai"
                  >
                    پرداخت
                  </LinkSimple>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="nav_header">
        <ul className="nav__ullist">
          {navbarList &&
            navbarList.map((item, indexItem) => (
              <li key={indexItem} className="list_style">
                {item.icon && item.icon}
                <a href="#" className="list__link">
                  {item.title}
                </a>
                {item.children && (
                  <div className="submeno">
                    <ul className="main_meno-drobdown">
                      {CategoryList.map((child, indexChild) => (
                        <li key={indexChild} className="child_mno-drobdown">
                          <LinkSimple className="run">{child.title}</LinkSimple>
                          {child.megaChildren && (
                            <div className="mega_meno">
                              <ul className="list_drobdown--item">
                                {child.headLink && (
                                  <li className="list_drobdown--items border_left--red">
                                    <LinkSimple
                                      linkTo={child.headLink.link}
                                      className="list__drobdown--link texr_header block_block"
                                    >
                                      {child.headLink.title}
                                    </LinkSimple>
                                  </li>
                                )}
                                {child.megaChildren.map(
                                  (megaChild, indexMegaChild) => (
                                    <>
                                      <li
                                        key={indexMegaChild}
                                        className="list_drobdown--items border_left--red"
                                      >
                                        <LinkSimple
                                          linkTo={megaChild.link}
                                          className="list__drobdown--link texr_header"
                                        >
                                          {megaChild.title}
                                        </LinkSimple>
                                      </li>
                                      {megaChild.children &&
                                        megaChild.children.map(
                                          (minChild, indexMiniChild) => (
                                            <li className="list_drobdown--items">
                                              <LinkSimple
                                                linkTo={minChild.link}
                                                className="list__drobdown--link"
                                              >
                                                {minChild.title}
                                              </LinkSimple>
                                            </li>
                                          )
                                        )}
                                    </>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          <ul className="nav_header-2">
            <li className="list_style">
              <FontAwesomeIcon
                icon={faMap}
                className="icon-icon"
                aria-hidden="true"
              />
              <a href="order-address.html" className="list__link">
                انتخاب موقعیت
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

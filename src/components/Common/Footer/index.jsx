import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ServiceItem from "../ServiceItem";
import WidgetMenu from "../WidgetMenu";
import LinkSimple from "../LinkSimple";
function Footer() {
  return (
    <footer className="main-footer default">
      <div className="back-to-top ">
        <LinkSimple>
          <span className="icon">
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
          <span>بازگشت بالا</span>
        </LinkSimple>
      </div>
      <div className=" servicesbg">
        <div className="footer-services container  space-10">
          <div className="row">
            <ServiceItem
              title="ضمانت اصل بودن"
              srcImg="/src/assets/img/ico/png-4.png"
            />
            <ServiceItem
              title="پرداخت در محل"
              srcImg="/src/assets/img/ico/png-1.png"
            />
            <ServiceItem
              title="ارسال سریع"
              srcImg="/src/assets/img/ico/png-2.png"
            />
            <ServiceItem
              title="فرصت 7 روزه استرداد"
              srcImg="/src/assets/img/ico/png-5.png"
            />
            <ServiceItem
              title="پشتیبانی تلفنی"
              srcImg="/src/assets/img/ico/png-3.png"
            />
            <ServiceItem
              title="هدیه نقدی"
              srcImg="/src/assets/img/ico/png-7.png"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid space-30 bg-map">
        <div className="footer-widgets container">
          <div className="row">
            <WidgetMenu title="درباره ما">
              <p className="about_footer">
                قالب مَسای یک پکیج کامل ایرانی با هدف بی نهایت قالب HTML و
                WordPress و به روز رسانی همیشگی است، که تمام ویژگی های لازم
                طراحی سایت را در نظر میگیرد
              </p>
            </WidgetMenu>
            <WidgetMenu title="خدمات مشتریان">
              <ul className="footer-menu">
                <li>
                  <LinkSimple>ارسال فوری</LinkSimple>
                </li>
                <li>
                  <LinkSimple>پشتیبانی سریع</LinkSimple>
                </li>
                <li>
                  <LinkSimple>بازگشت وجه</LinkSimple>
                </li>
                <li>
                  <LinkSimple>بسته بندی کالا</LinkSimple>
                </li>
              </ul>
            </WidgetMenu>
            <WidgetMenu title="با مَسای شاپ">
              <ul className="footer-menu">
                <li>
                  <LinkSimple>تامین کالا همکار</LinkSimple>
                </li>
                <li>
                  <LinkSimple>تخفیف سازمانی</LinkSimple>
                </li>
                <li>
                  <LinkSimple>تماس با ما</LinkSimple>
                </li>
                <li>
                  <LinkSimple>درباره ما</LinkSimple>
                </li>
              </ul>
            </WidgetMenu>
            <WidgetMenu title="مجوزات">
              <div className="License_img">
                <LinkSimple linkTarget="_blank">
                  <img src={"/src/assets/img/License_2.png"} alt="" />
                </LinkSimple>
                <LinkSimple linkTarget="_blank">
                  <img src={"/src/assets/img/License_1.png"} alt="" />
                </LinkSimple>
              </div>
            </WidgetMenu>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <p>این قالب به وسیله گروه نرم افزاری میم پشتیبانی میشود.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

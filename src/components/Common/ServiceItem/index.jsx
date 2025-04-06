function ServiceItem({ srcImg = "", title = "" }) {
  return (
    <div className="service-item col-2 contact-box text-center">
      <img src={srcImg} className="width-40" />
      <span className="title-1 light-black">{title}</span>
    </div>
  );
}

export default ServiceItem;

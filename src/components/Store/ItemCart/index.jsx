function ItemCart({
  imgSrc = "",
  title = "",
  count = "",
  color,
  size,
  children,
}) {
  return (
    <div className="m_cart-item-content">
      <div className="m_cart-item-image">
        <img src={imgSrc} />
      </div>
      <div className="m_cart-item-details">
        <div className="m_cart-item-title">{title}</div>
        <div className="m_cart-item-params">
          <div className="m_cart-item-props">
            <span>تعداد : {count}</span>
            {color && <span>رنگ: {color}</span>}
            {size && <span>سایز: {size}</span>}
            {children && children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;

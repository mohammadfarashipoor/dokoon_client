function WidgetMenu({ title = "", children }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="widget-menu widget card">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

export default WidgetMenu;

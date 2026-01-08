const Item = ({ id, title, amount, category, date, image }) => {
  return (
    <div className="expense-card">
      <span className="item-id-badge">#{id.toString().slice(0, 4)}</span>
      <div className="image-container">
        <img src={image} alt={title} className="item-image" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <span className="category-label">{category}</span>
          <time className="item-date">{date}</time>
        </div>
        <h3 className="item-title" title={title}>
          {title}
        </h3>
        <p className="item-amount">${amount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Item;

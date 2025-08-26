function Card({ item }) {
  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="img">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="content">
            <h1 className="name">{item.name}</h1>
            <h2 className="year">{item.year}</h2>
            <span className="price">{item.price}</span>
            <span className="vol">{item.vol}</span>
            <span className="run">{item.run}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

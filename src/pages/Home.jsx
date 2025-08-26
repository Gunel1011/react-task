import Card from "../components/card";
import { data } from "../db/data";
function Home() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            <div className="box">
              {data.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RemoveTodo } from "./Reducer";

export default function Cart() {
  const data = useSelector((state) => state?.todos);
  const dispatch = useDispatch();

  function DeleteItem(product) {
    dispatch(RemoveTodo(product));
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h3 style={{ textAlign: "center" }}>Card</h3>
        {data &&
          data.map((product) => (
            <div className="col-md-3 my-3" key={product.id}>
              <Card style={{ width: "18rem" }} className="text-center h-100">
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>

                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Button
                    className="btn-danger"
                    onClick={() => DeleteItem(product)}
                  >
                    Delete Item
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}

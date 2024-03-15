import { useQuery } from "@tanstack/react-query";
import fetchNotes from "./FetchApi";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddTodo } from "./Reducer";

export default function Product() {
  const dispatch = useDispatch();

  const AddData = (product) => {
    dispatch(AddTodo(product));
  };

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchNotes,
  });

  const cards =
    data &&
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
            <Button className="btn-primary" onClick={() => AddData(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    ));

  return (
    <>
      <h4 style={{ textAlign: "center" }}>Product Dashboard</h4>
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </>
  );
}

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={`https://via.placeholder.com/300x200?text=Card+Image+${
                  idx + 1
                }`} // Replace with actual image URLs
                alt={`Card Image ${idx + 1}`}
              />
              <Card.Body>
                <Card.Title className="text-primary">
                  Card Title {idx + 1}
                </Card.Title>
                <Card.Text className="text-muted">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light text-center">
                <button className="btn btn-primary btn-sm">Learn More</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;

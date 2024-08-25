import './App.css'
import { CardBody, CardTitle, Col, Container, Row, Card, CardSubtitle, CardHeader } from 'react-bootstrap'

function App() {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader>Assets</CardHeader>
              <CardBody>
                <Card.Title>Available Components</Card.Title>
                <Card.Subtitle>These are the available categories</Card.Subtitle>
                <ul>
                <li>Back end</li>
                <li>Front end</li>
                <li>Infrastructure</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>List of Available Components</CardHeader>
              <CardBody>
                <Card.Title>Available Components per Category</Card.Title>
                <Card.Subtitle>These are the available components</Card.Subtitle>
                Components available for your category
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>Component Details</CardHeader>
              <CardBody>
                <Card.Title>Details of The Selected Component</Card.Title>
                <Card.Subtitle>Details of the Selected Component</Card.Subtitle>
                Details of the selected component
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App

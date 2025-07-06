import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProblemList from './components/ProblemList';
import ProblemDetail from './components/ProblemDetail';
import Leaderboard from './components/Leaderboard';

function App() {
  const [selectedId, setSelectedId] = React.useState(null);
  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={4}><ProblemList onSelect={setSelectedId} /></Col>
        <Col md={5}><ProblemDetail id={selectedId} /></Col>
        <Col md={3}><Leaderboard /></Col>
      </Row>
    </Container>
  );
}

export default App;
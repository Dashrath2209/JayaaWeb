import React, { useState } from "react";
import RepoList from "./components/RepoList";
import CommitStats from "./components/CommitStats";
import PullRequests from "./components/PullRequests";
import { Container, Row, Col, Form } from "react-bootstrap";

function App() {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState(null);

  return (
    <Container className="p-4">
      <Form.Group className="mb-3">
        <Form.Label>GitHub Organization/Username</Form.Label>
        <Form.Control
          value={owner}
          onChange={e => setOwner(e.target.value)}
          placeholder="e.g. your-org"
        />
      </Form.Group>
      <Row>
        <Col md={3}><RepoList owner={owner} onSelect={setRepo}/></Col>
        <Col md={5}><CommitStats owner={owner} repo={repo}/></Col>
        <Col md={4}><PullRequests owner={owner} repo={repo}/></Col>
      </Row>
    </Container>
  );
}

export default App;
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function AuthPrompt() {
  return (

    <div className="d-flex justify-content-center my-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body className="text-center">
          <Button variant="dark">Log in or create account</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AuthPrompt;
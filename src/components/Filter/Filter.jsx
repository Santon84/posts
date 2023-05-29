import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
function Filter({handleSearch, filter}) {
  return (
    <div>
      
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" >
            <Form.Control onChange={(e) => handleSearch(e.target.value)} defaultValue={filter} className="form-control" type="search" placeholder="Поиск..." />
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}

export default Filter

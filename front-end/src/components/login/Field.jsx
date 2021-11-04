import React from "react";
import Form from "react-bootstrap/Form";

const Field = (props) => {
  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{props.name}</Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder} />
        {props.muted && (
          <Form.Text className="text-muted">{props.muted}</Form.Text>
        )}
      </Form.Group>
    </div>
  );
};

export default Field;

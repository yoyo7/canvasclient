import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
class ChangeKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      site: "",
      cors: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    
    const target = event.target;
    const value = target.value
    const name = target.name
    this.setState({
        [name]: value
      });
  }
  

  handleSubmit(event) {
    
    window.localStorage.setItem("apikey", this.state.key);
    window.localStorage.setItem("site", this.state.site);
    window.localStorage.setItem("cors", this.state.cors);
    event.preventDefault();
  }

  render() {
    return (
    <Container>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicKey">
          <Form.Label>API Key</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter canvas api key"
            value={this.state.key}
            onChange={this.handleInputChange}
            name="key"
          />
        </Form.Group>
        <Form.Group controlId="formBasicSite">
          <Form.Label>Canvas Site</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter canvas url key"
            value={this.state.site}
            onChange={this.handleInputChange}
            name="site"
          />
        </Form.Group>
        <Form.Group controlId="formBasicSite">
          <Form.Label><a href="https://github.com/Rob--W/cors-anywhere">Cors Anywhere Server</a></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter cors anywhere url e.g. : localhost:8081"
            value={this.state.cors}
            onChange={this.handleInputChange}
            name="cors"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    );
  }
}

export default ChangeKey;

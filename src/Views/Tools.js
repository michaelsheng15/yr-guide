import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./Tools.css";
import { BiGitPullRequest } from "react-icons/bi";
import { BiCube } from "react-icons/bi";
import { BiCollection } from "react-icons/bi";





const Tools = () => {
  return (
    <div>
      <NavCard />
      <div className="tools-header">
        <h1>Tools</h1>
        <p>Tools and applications used across York Region departments.</p>
      </div>

      <Container className="tools-container">
        <div>
          <Row className="tools-row">
            <h3 className='tools-sub-header'>Request Systems <BiGitPullRequest /></h3>
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>E-Request</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>ITSR/Jira</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="tools-row">
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Mobile Device Request</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>MyTechSupport</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <Container className="tools-container">
        <div>
          <Row className="tools-row">
            <h3 className='tools-sub-header'>IT Exclusive Tools <BiCube /></h3>
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Active Directory</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Cisco Unity</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="tools-row">
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Dell Knowledge Base</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>GoToSupport</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="tools-row">
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Service Manager</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>RC Viewer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <Container className="tools-container">
        <div>
          <Row className="tools-row">
            <h3 className='tools-sub-header'>York Region Applications <BiCollection /></h3>
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>E-Request</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>ITSR/Jira</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="tools-row">
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Mobile Device Request</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>MyTechSupport</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="tools-row">
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Mobile Device Request</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>MyTechSupport</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="tools-row">
            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Mobile Device Request</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tools-col">
              <Card className="tools-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>MyTechSupport</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Tools;

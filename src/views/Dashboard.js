

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// import Card from 'react-bootstrap/Card';

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
 
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Rating Vs Time</h5>
                    <CardTitle tag="h2">1010 Rating</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1"
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Month-Wise
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2"
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Year-Wise
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                     
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
          <Card className="card-chart">
          {/* <Card.Img variant="top" className='imgs' src="https://resources.esportsinsider.com/esportsinsider/2020/06/Ecricket-World-Series.jpg" /> */}
              <CardHeader>
              
                <h3 className="card-category"><h2>Tournaments Status</h2></h3>
                <CardTitle tag="h3">
                  {/* <i className="tim-icons icon-send text-success" /> */}
                </CardTitle>
              </CardHeader>
              <CardBody>
               
                <img src='https://lh3.googleusercontent.com/g0Jw-I6-gH2DVCpnl3u8QKZVT_meR9lcJlpyeSZ-MyvwLnyEZvgyrY5frldA8HCv55s=w280-rwa' height='200px' width='250px'></img>
                
              </CardBody>
            </Card>

           
          </Col>
          <Col lg="4">
          <Card className="card-chart">
          
              <CardHeader>
                <h5 className="card-category"><h2>Your Starred Rating</h2> </h5>
                <CardTitle tag="h3">
                  {/* <i className="AiFillStar icon-send text-success" /> 12,100K */}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <img src="https://www.shutterstock.com/shutterstock/videos/1095126757/thumb/1.jpg?ip=x480" />
                
                
              </CardBody>
            </Card>
            
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                
                <CardTitle tag="h3">
                <h2>Special Skills</h2>
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ul type='none'>
                  <h3>
                  <li>In-Game-Leadering</li>
                  <li>Snipping</li>
                  <li>Good in attacking</li>
                  </h3>
                  
                </ul>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="12">
           
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Past Tornaments</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Tournament Name</th>
                      <th>Organizer</th>
                      <th>Date & time</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Sky E-sports</td>
                      <td>2023-03-29</td>
                      <td className="text-center win">₹10000 Won</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>VLT</td>
                      <td>2023-03-20</td>
                      <td className="text-center win">₹70000 Won</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>S8UL</td>
                      <td>2023-03-15</td>
                      <td className="text-center win">₹10000</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>VLT</td>
                      <td>2023-03-08</td>
                      <td className="text-center lost">Lost</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>S8UL</td>
                      <td>2023-02-21</td>
                      <td className="text-center lost">Lost</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Sky E-sports</td>
                      <td>2023-02-17</td>
                      <td className="text-center win">₹120000 Won</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>S8UL</td>
                      <td>2023-02-05</td>
                      <td className="text-center win">₹15000 Won</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

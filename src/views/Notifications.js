
import React from "react";
import NotificationAlert from "react-notification-alert";

import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function Notifications() {
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <span>Alert!! New Tournament by S8UL on 10-04-2023.
                    Click <a href="#"> here </a> to register
                  </span>
                </Alert>
                <UncontrolledAlert color="info">
                <span>Alert!! New Tournament by new ESPN on 10-04-2023.
                    Click <a href="#"> here </a> to register
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                   Your new Rating is 101.
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                   Thanks for participating in the tournament.Results would be out till eveneing.Stay tuned for updates.
                  </span>
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Invitations</CardTitle>
              </CardHeader>
              <CardBody>
                <UncontrolledAlert color="primary">
                  <span>
                    <b>Team mortal </b>
                    is inviting you for tournament J.J on 10-04-2023
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="info">
                <span>
                    <b>Team mortal </b>
                    is inviting you for tournament J.J on 10-04-2023
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="success">
                <span>
                    <b>Team mortal </b>
                    is inviting you for tournament J.J on 10-04-2023
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="warning">
                <span>
                    <b>Team mortal </b>
                    is inviting you for tournament J.J on 10-04-2023
                  </span>
                </UncontrolledAlert>
               
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Notifications;

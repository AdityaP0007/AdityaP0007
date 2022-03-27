import React from "react";
import { Card, CardBody } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Card className="bg-warning">
        <CardBody>
          <h1 className="headerClass bg-warning">Student Portal Application</h1>
          {/* <p>
            “Portal” is a web system that provides the functions and features to
            authenticate and identify the student and provide them with an easy,
            intuitive, personalized and user-customizable web-interface for
            facilitating access to information and services that are of primary
            relevance and interests to the student
          </p> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Header;

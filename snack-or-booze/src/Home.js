import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </p>
          </CardTitle>
          <p>We offer {snacks.length} snacks and {drinks.length} drinks!</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

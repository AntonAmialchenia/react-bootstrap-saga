import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "../componets/Header";

export const Lyauot: FC = () => {
  return (
    <Container fluid="md">
      <Container fluid>
        <Row>
          <Header />
        </Row>
      </Container>
      <Outlet />
    </Container>
  );
};

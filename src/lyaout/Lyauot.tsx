import React, { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Lyauot: FC = () => {
  return (
    <Container fluid="md">
      <Container fluid>
        <Row>Хеадер</Row>
      </Container>
      <Outlet />
    </Container>
  );
};

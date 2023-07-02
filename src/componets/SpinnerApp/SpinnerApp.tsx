import { Row, Spinner } from "react-bootstrap";

import styles from "./SpinnerApp.module.scss";

export const SpinnerApp = () => {
  return (
    <Row className={styles.wrap}>
      <Spinner
        as="span"
        animation="border"
        role="status"
        aria-hidden="true"
        variant="secondary"
        w-25
        className={styles.spinner}
      />
    </Row>
  );
};

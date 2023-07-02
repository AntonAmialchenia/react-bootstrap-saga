import { Card } from "react-bootstrap";

import avatar from "../../assets/Anton.png";

export const About = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card className="align-items-center" style={{ width: "30rem" }}>
        <Card.Img style={{ maxWidth: "20rem" }} variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>Антон Амельченя</Card.Title>
          <Card.Subtitle>Front-end разработчик</Card.Subtitle>
          <Card.Text>
            Опыт 1 год 2 мес. Обучение и стажировка в IT Академия BELHARD
          </Card.Text>
          <Card.Subtitle>Навыки:</Card.Subtitle>
          <Card.Text>
            Работоспособность, Умение работать в команде, CSS, HTML5, Git, Gulp,
            БЭМ, Angular, npm, JavaScript, Адаптивная верстка, Кроссбраузерная
            верстка, Умение разбираться в чужом коде, SCSS, React, Node.js,
            Typescript, PostgreSQL, Insomnia, Express, Postman, Eslint, Hasky,
            Stylelint, Vite
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href="https://github.com/AntonAmialchenia">
            Github
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

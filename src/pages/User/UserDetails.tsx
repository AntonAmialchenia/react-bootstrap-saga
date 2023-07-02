import { FC } from "react";
import { Container } from "react-bootstrap";
import { PostList } from "../../componets/PostList";
import { useAppSelector } from "../../store/hooks";

const user = {
  name: "Leanne Graham",
  email: "Sincere@april.biz",
  website: "hildegard.org",
};

export const UserDetails: FC = () => {
  const posts = useAppSelector((state) => state.posts.items).filter(
    (post) => post.userId === 1,
  );
  return (
    <Container>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <a href="hildegard.org">{user.website}</a>
      <p>
        Posts <strong>{user.name}:</strong>
      </p>
      <PostList posts={posts} />
    </Container>
  );
};

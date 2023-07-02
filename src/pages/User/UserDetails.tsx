import { FC, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { PostList } from "../../componets/PostList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Link, useParams } from "react-router-dom";
import { getPosts } from "../../store/slices/postSlice";
import { SpinnerApp } from "../../componets/SpinnerApp";
import { getUser } from "../../store/slices/userSlice";

export const UserDetails: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { items, loading: loadingPosts } = useAppSelector(
    (state) => state.posts,
  );
  const { user, loading: loadingUser } = useAppSelector((state) => state.user);

  const posts = items.filter((post) => post.userId === Number(params.id));

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser(Number(params.id)));
  }, [dispatch]);

  return loadingUser ? (
    <SpinnerApp />
  ) : (
    <Container>
      <div className="d-flex justify-content-between">
        <h2>{user.name}</h2>
        <Link to="/">
          <Button>Exit</Button>
        </Link>
      </div>
      <p>Email: {user.email}</p>
      <p>
        Site: <a href="hildegard.org">{user.website}</a>
      </p>
      <p>
        Posts <strong>{user.name}:</strong>
      </p>
      {loadingPosts ? <SpinnerApp /> : <PostList posts={posts} />}
    </Container>
  );
};

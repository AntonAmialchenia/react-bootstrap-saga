import { FC, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { PostList } from "../../componets/PostList";
import { SpinnerApp } from "../../componets/SpinnerApp";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPosts } from "../../store/slices/postSlice";
// import { fetchUser } from "../../store/slices/userSlice";
import { useUser } from "../../store/useUser";

export const UserDetails: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { user, error, fetchUser, isLoading } = useUser((state) => state);
  const { items, status: statusPosts } = useAppSelector((state) => state.posts);
  // const { user, status: statusUser } = useAppSelector((state) => state.user);

  const posts = items.filter((post) => post.userId === Number(params.id));

  useEffect(() => {
    dispatch(fetchPosts());
    fetchUser(Number(params.id));
  }, [dispatch, params.id, fetchUser]);

  return (
    <>
      {error && (
        <>
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получть пользователя. Попробуйте повторить
            попытку позже.
          </p>
        </>
      )}
      {isLoading ? (
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
          {statusPosts === "error" ? (
            <>
              <h2>Произошла ошибка 😕</h2>
              <p>
                К сожалению, не удалось получть посты. Попробуйте повторить
                попытку позже.
              </p>
            </>
          ) : (
            <>
              {statusPosts === "loading" ? (
                <SpinnerApp />
              ) : (
                <PostList posts={posts} />
              )}
            </>
          )}
        </Container>
      )}
    </>
  );
};

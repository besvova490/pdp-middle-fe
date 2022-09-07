import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

// layout
import ListWithSidebar from "../layouts/ListWithSidebar";

// containers
import Post from "../containers/Post";

// helpers
import { PostReachInterface } from "../../__types__/containers/Post.type";
import post from "../../gql/post";


function HomePage() {
  const [fetchPosts, { data }] = useLazyQuery<{ posts: Array<PostReachInterface> }>(post.QUERY_POSTS);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ListWithSidebar>
      {
        (data?.posts || []).map((item, index) => (
          <Post
            key={index}
            id={item.id}
            createdAt={item.createdAt}
            author={item.author}
            thumbnail={`${item.thumbnail}?${index}`}
            description={item.description}
            likesCount={index}
            commentsCount={index}
          />
        ))
      }
      <ListWithSidebar.Sidebar>
          pdp-chat-home-page__side-bar
      </ListWithSidebar.Sidebar>
    </ListWithSidebar>
  );
}

export default HomePage;

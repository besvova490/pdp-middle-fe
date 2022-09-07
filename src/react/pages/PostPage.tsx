import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

// containers
import Post from "../containers/Post";
import PostComments from "../containers/Post/PostComments";

// layout
import ListWithSidebar from "../layouts/ListWithSidebar";

// helpers
import { PostReachInterface } from "../../__types__/containers/Post.type";
import post from "../../gql/post";


function PostPage() {
  const { id } = useParams();

  const { data } = useQuery<{ post: PostReachInterface }>(
    post.QUERY_SINGLE_POST,
    { variables: { id: +(id as string) } }
  );

  const [addComment] = useMutation(post.ADD_POST_COMMENT, {
    refetchQueries: [{ query: post.QUERY_SINGLE_POST, variables: { id: +(id as string) } }],
  });

  return (
    <ListWithSidebar>
      <Post
        key={id}
        author={data?.post.author}
        description={data?.post.description}
        thumbnail={data?.post.thumbnail}
        createdAt={data?.post.createdAt}
      />
      <PostComments
        comments={data?.post.comments || []}
        addComment={e => addComment({ variables: { addCommentId: +(id as string), comment: e } })}
      />
      <ListWithSidebar.Sidebar>
        Sidebar
      </ListWithSidebar.Sidebar>
    </ListWithSidebar>
  );
}

export default PostPage;

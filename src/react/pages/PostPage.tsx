import { useParams } from "react-router-dom";

// containers
import Post from "../containers/Post";
import PostComments from "../containers/Post/PostComments";

// layout
import ListWithSidebar from "../layouts/ListWithSidebar";

const MOCK_POST_DATA = {
  createdAt: new Date(),
  author: { avatar: "https://picsum.photos/100", userName: "Christinegz" },
  thumbnail: "https://picsum.photos/500",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis doloribus numquam obcaecati, tenetur hic temporibus animi ex corrupti, distinctio, sit atque harum voluptatum dolorem est. Vel esse culpa iste?"
};

function PostPage() {
  const { id } = useParams();

  return (
    <ListWithSidebar>
      <Post
        key={id}
        { ...MOCK_POST_DATA }
      />
      <PostComments/>
      <ListWithSidebar.Sidebar>
        Sidebar
      </ListWithSidebar.Sidebar>
    </ListWithSidebar>
  );
}

export default PostPage;

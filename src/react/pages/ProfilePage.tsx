import { useState, useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";

// layout
import ListWithSidebar from "../layouts/ListWithSidebar";

// containers
import Post from "../containers/Post";
import Drawer from "../components/Drawer";
import CreateEditPost from "../containers/CreateEditPost";
import UserProfileDetails from "../containers/UserProfile/components/UserProfileDetails";
import AddPost from "../containers/UserProfile/components/AddPost";
import UserProfileTopBanner from "../containers/UserProfile/UserProfileTopBanner";

// helpers
import { useUserProfile } from "../../context/UserProfileContext";
import { DeepPartial } from "../../__types__/base.type";
import { PostInterface, PostReachInterface } from "../../__types__/containers/Post.type";
import post from "../../gql/post";


function ProfilePage() {
  const [openCreatedPostDrawer, setOpenCreatedPostDrawer] = useState(false);

  const { user } = useUserProfile();
  const [createPost] = useMutation(post.CREATE_POST_MUTATION);
  const [getMyPosts, { data }] = useLazyQuery<{ myPosts: Array<PostReachInterface> }>(post.QUERY_MY_POSTS, { fetchPolicy: "network-only" });

  useEffect(() => {
    getMyPosts();
  }, []);

  const handleCreatePost = (e?: DeepPartial<PostInterface>) => {
    createPost({ variables: e })
      .then(() => {
        getMyPosts();
        toast.success("New post created!");
        setOpenCreatedPostDrawer(false);
      })
      .catch(error => toast.error(error.message))
  }


  return (
    <ListWithSidebar>
      <UserProfileTopBanner
        thumbnail={user?.thumbnailImage || null}
        avatar={user?.avatar || null}
        username={user?.userName}
        fullName={user?.fullName}
      />
      <AddPost onClick={() => setOpenCreatedPostDrawer(true)}/>
      <UserProfileDetails
        description={user?.description}
      />
      {
        data?.myPosts?.map((item, index) => (
          <Post
            key={index}
            author={item.author}
            thumbnail={item.thumbnail}
            description={item.description}
            createdAt={item.createdAt}
          />
        ))
      }
      <ListWithSidebar.Sidebar>
        Sidebar
      </ListWithSidebar.Sidebar>
      <Drawer visible={openCreatedPostDrawer} onClose={() => setOpenCreatedPostDrawer(false)}>
        <CreateEditPost
          onGoBack={() => setOpenCreatedPostDrawer(false)}
          onSubmit={handleCreatePost}
          onError={() => handleCreatePost()}
        />
      </Drawer>
    </ListWithSidebar>
  );
}

export default ProfilePage;

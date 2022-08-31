import { useState } from "react";

// layout
import ListWithSidebar from "../layouts/ListWithSidebar";

// containers
import Drawer from "../components/Drawer";
import CreateEditPost from "../containers/CreateEditPost";
import UserProfileDetails from "../containers/UserProfile/components/UserProfileDetails";
import AddPost from "../containers/UserProfile/components/AddPost";
import UserProfileTopBanner from "../containers/UserProfile/UserProfileTopBanner";

function ProfilePage() {
  const [openCreatedPostDrawer, setOpenCreatedPostDrawer] = useState(false);


  return (
    <ListWithSidebar>
      <UserProfileTopBanner
        thumbnail="https://picsum.photos/500"
        avatar="https://picsum.photos/100"
        username="flat_six_aircooled"
        fullName="Alberto Moreno G"
      />
      <AddPost onClick={() => setOpenCreatedPostDrawer(true)}/>
      <UserProfileDetails/>
      <ListWithSidebar.Sidebar>
        Sidebar
      </ListWithSidebar.Sidebar>
      <Drawer visible={openCreatedPostDrawer} onClose={() => setOpenCreatedPostDrawer(false)}>
        <CreateEditPost onGoBack={() => setOpenCreatedPostDrawer(false)}/>
      </Drawer>
    </ListWithSidebar>
  );
}

export default ProfilePage;

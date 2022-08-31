// layout
import ListWithSidebar from "../layouts/ListWithSidebar";

// containers
import Post from "../containers/Post";


const POSTS_LIST = [
  {
    createdAt: new Date(),
    author: { avatar: "https://picsum.photos/100", userName: "Christinegz" },
    thumbnail: "https://picsum.photos/500",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis doloribus numquam obcaecati, tenetur hic temporibus animi ex corrupti, distinctio, sit atque harum voluptatum dolorem est. Vel esse culpa iste?"
  },
  {
    createdAt: new Date(),
    author: { avatar: "https://picsum.photos/100", userName: "Christinegz" },
    thumbnail: "https://picsum.photos/500",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis doloribus numquam obcaecati, tenetur hic temporibus animi ex corrupti, distinctio, sit atque harum voluptatum dolorem est. Vel esse culpa iste?"
  },
  {
    createdAt: new Date(),
    author: { avatar: "https://picsum.photos/100", userName: "Christinegz" },
    thumbnail: "https://picsum.photos/500",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis doloribus numquam obcaecati, tenetur hic temporibus animi ex corrupti, distinctio, sit atque harum voluptatum dolorem est. Vel esse culpa iste?"
  },
  {
    createdAt: new Date(),
    author: { avatar: "https://picsum.photos/100", userName: "Christinegz" },
    thumbnail: "https://picsum.photos/500",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis doloribus numquam obcaecati, tenetur hic temporibus animi ex corrupti, distinctio, sit atque harum voluptatum dolorem est. Vel esse culpa iste?"
  }
];

function HomePage() {

  return (
    <ListWithSidebar>
      {
        POSTS_LIST.map((item, index) => (
          <Post
            key={index}
            id={index}
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

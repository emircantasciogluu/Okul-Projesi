import PostItem from "./PostItem";

const PostList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <PostItem key={index}></PostItem>
      ))}
    </div>
  );
};

export default PostList;

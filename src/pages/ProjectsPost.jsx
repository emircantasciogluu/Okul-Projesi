import PostList from "../components/PostList";

const ProjectsPost = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-4 my-6">
        <button className="bg-blue-600 border border-slate-300 rounded-full px-4 py-2 text-white">
          All
        </button>
        <button className="bg-transparent border border-slate-300 rounded-full px-4 py-2 ">
          Test
        </button>
        <button className="bg-transparent border border-slate-300 rounded-full px-4 py-2 ">
          Test
        </button>
        <button className="bg-transparent border border-slate-300 rounded-full px-4 py-2 ">
          Test
        </button>
        <button className="bg-transparent border border-slate-300 rounded-full px-4 py-2 ">
          Test
        </button>
        <button className="bg-transparent border border-slate-300 rounded-full px-4 py-2 ">
          Test
        </button>
      </div>
      <PostList></PostList>
    </div>
  );
};

export default ProjectsPost;

const PostCard = ({ post }) => {
  return (
    <div
      className="group relative hover:border-2 overflow-hidden rounded-xl sm:w-[250px]  sm:h-[250px] transition-all p-2"
      style={{ background: "#f1e9fc" }}
    >
      <div>
        <img
          src={post.imagesrc}
          alt="posts cover"
          className="h-[140px] object-cover group-hover:h-[145px] group-hover:w-[255px] transition-all duration-300 z-20 rounded-xl"
        />
      </div>
      <div className="p-2 flex flex-col">
        <p className="text-xs font-semibold line-clamp-2">{post.title}</p>
        <div className="flex justify-between relative top-9">
        <p className="italic text-xs">{post.date}</p>
        <img className="w-3 h-3" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d07edea3eca_Vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;

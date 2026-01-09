const Card = ({ post }) => {
  return (
    <div className="card">
      <p className="card-id">Post #{post.id}</p>
      <h3 className="card-title">{post.title}</h3>
      <p className="card-body">{post.body}</p>
    </div>
  );
};

export default Card;

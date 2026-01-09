import Card from './Card';

const CardContainer = ({ data }) => {
  if (!data) return null;

  return (
    <div className="card-container">
      {data.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CardContainer;

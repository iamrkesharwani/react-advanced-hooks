import Card from './Card';

const CardContainer = ({ data }) => {
  if (!data.length) {
    return <p className="no-data">No results found</p>;
  }

  return (
    <div className="card-container">
      {data.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CardContainer;

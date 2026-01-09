export const queryFetch = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Error in data fetch');
  const data = await res.json();
  return data;
};

import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { queryFetch } from './api/queryFetch';
import CardContainer from './components/CardContainer';
import Hero from './components/Hero';

const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: queryFetch,
  });

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    if (!data) return [];
    if (!searchTerm.trim()) return data;

    const term = searchTerm.toLowerCase();

    return data.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.body.toLowerCase().includes(term)
    );
  }, [data, searchTerm]);

  return (
    <div>
      <Hero
        isLoading={isLoading}
        isError={isError}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CardContainer data={filteredPosts} />
    </div>
  );
};

export default App;

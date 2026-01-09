import { useState, useMemo, useCallback, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { queryFetch } from './api/queryFetch';
import CardContainer from './components/CardContainer';
import Hero from './components/Hero';
import useDebouce from './hooks/useDebouce';

const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: queryFetch,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebouce(searchTerm, 500);

  const functionRef = useRef(null);

  const onSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  if (functionRef.current === null) {
    functionRef.current = onSearchChange;
  } else {
    console.log(
      'Same function reference?',
      functionRef.current === onSearchChange
    );
  }

  const filteredPosts = useMemo(() => {
    if (!data) return [];
    if (!debouncedSearchTerm.trim()) return data;

    const term = debouncedSearchTerm.toLowerCase();

    return data.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.body.toLowerCase().includes(term)
    );
  }, [data, debouncedSearchTerm]);

  return (
    <div>
      <Hero
        isLoading={isLoading || searchTerm !== debouncedSearchTerm}
        isError={isError}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />

      <CardContainer data={filteredPosts} />
    </div>
  );
};

export default App;

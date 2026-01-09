import { queryFetch } from './api/queryFetch';
import CardContainer from './components/CardContainer';
import Hero from './components/Hero';
import { useQuery } from '@tanstack/react-query';

const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: queryFetch,
  });

  return (
    <div>
      <Hero isLoading={isLoading} isError={isError} />
      <CardContainer data={data} />
    </div>
  );
};

export default App;

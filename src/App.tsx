import { RouterProvider } from 'react-router-dom';
import { router } from '@routes/index';

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

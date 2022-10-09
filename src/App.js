import './App.css';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Books from './components/Books/Books';
import BookDetalis from './components/BookDetalis/BookDetalis';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/books',
          loader: () => fetch('https://api.itbook.store/1.0/new'),
          element: <Books></Books>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/books/:postId',
          loader: async ({params}) =>{
            return fetch(`https://api.itbook.store/1.0/books/${params.postId}`)
          },
          element: <BookDetalis></BookDetalis>
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

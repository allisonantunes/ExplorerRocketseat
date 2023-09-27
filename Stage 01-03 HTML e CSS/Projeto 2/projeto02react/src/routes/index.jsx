import { Home } from '../pages/Home'
import { Train } from '../pages/Train'
import { About } from '../pages/About'
import { ErrorPage } from '../components/ErrorPage/ErrorPage'

import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'train',
    element: <Train />
  },
  {
    path: 'about',
    element: <About />
  },
])
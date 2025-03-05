import {App} from './app/app.jsx'
import {Home} from './home/home.jsx'
import {Shop} from './shop/shop.jsx'

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop />}
    ]
  },
];

export default routes;

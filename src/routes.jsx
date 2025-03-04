import {Home} from './home/home.jsx'
import {Shop} from './shop/shop.jsx'

const routes = [
  {
    path: "/",
    element: <Home />,
    chilren: [
      {index:true, element}
    ]
  },
];

export default routes;

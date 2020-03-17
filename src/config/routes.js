import Msite from '../containers/msite'
import Category from '../containers/category'
import Topic from '../containers/topic'
import Cart from '../containers/cart'
import Profile from '../containers/profile'

const routes = [
  {
    id: 'msite',
    path: '/msite',
    exact: true,
    component: Msite
  },
  {
    id: 'item',
    path: '/category',
    exact: true,
    component: Category
  },
  {
    id: 'topic',
    path: '/topic',
    exact: true,
    component: Topic
  },
  {
    id: 'cart',
    path: '/cart',
    exact: true,
    component: Cart
  },
  {
    id: 'profile',
    path: '/profile',
    exact: true,
    component: Profile
  },

]
export default routes
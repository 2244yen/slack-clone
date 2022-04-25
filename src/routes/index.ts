import Home from '../pages/Home';
import Message from '../pages/Message';

export const routes = [{
  path: '',
  element: Home
}, {
  path: '/message',
  element: Message
}, {
  path: '/message/:id',
  element: Message
}]
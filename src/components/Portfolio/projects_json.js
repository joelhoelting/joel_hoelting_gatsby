import bronwyn_roe from './images/bronwyn_roe.jpg';
import freegan_forum from './images/freegan_forum.jpg';
import pj_masks_live from './images/pj_masks_live.jpg';
import react_timer from './images/react_timer.jpg';
import we_will_not_be_silent from './images/we_will_not_be_silent.jpg';
import who_said_it from './images/who_said_it.jpg';

export const projects = [
  {
    title: 'React-Timer',
    url: 'https://react-timer.com',
    description: 'Developer friendly productivity timer built in React.js',
    tools: ['React', 'Radium', 'LocalStorage'],
    image: react_timer
  },
  {
    title: 'Who Said It?',
    url: 'https://whosaidit.co',
    description: 'RESTful quote-picking game built in Rails and CommonJS',
    tools: ['Ruby on Rails', 'JavaScript'],
    image: who_said_it
  },
  {
    title: 'PJ Masks Live',
    url: 'http://pjmaskslive.com',
    description: 'Ticketing website for theatrical version of popular Disney kids tv show',
    tools: ['Middleman', 'HTML5', 'CSS3', 'JavaScript'],
    image: pj_masks_live
  },
  {
    title: 'Freegan Forum',
    url: 'http://freeganforum.com',
    description: 'MVC/CRUD app with customised user authentication system',
    tools: ['Sinatra', 'HTML', 'CSS', 'JavaScript'],
    image: freegan_forum
  },
  {
    title: 'Bronwyn Roe',
    url: 'https://bronwynroe.com',
    description: 'Portfolio website for NYC-based painter, Bronwyn Roe',
    tools: ['Jekyll', 'HTML', 'CSS', 'JavaScript'],
    image: bronwyn_roe
  },
  {
    title: 'We Will Not Be Silent',
    url: 'https://wewillnotbesilent.net',
    description: 'e-Commerce site built with Shopify',
    tools: ['Shopify', 'Slate', 'HTML', 'CSS', 'JavaScript'],
    image: we_will_not_be_silent
  },
];

import bronwyn_roe from './images/bronwyn_roe.png';
import freegan_forum from './images/freegan_forum.png';
import pj_masks_live from './images/pj_masks_live.png';
import react_timer from './images/react_timer.png';
import we_will_not_be_silent from './images/we_will_not_be_silent.png';
import who_said_it from './images/who_said_it.png';

export const projects = [
  {
    title: 'React-Timer',
    url: 'https://react-timer.com',
    description: 'Developer-oriented pomodoro timer built in React',
    tools: ['React', 'Radium', 'LocalStorage'],
    image: react_timer
  },
  {
    title: 'Who Said It?',
    url: 'https://whosaidit.co',
    description: 'Quote picking game built in Ruby on Rails and a modular Javascript pattern',
    tools: ['Ruby on Rails', 'jQuery', 'CSS3'],
    image: who_said_it
  },
  {
    title: 'PJ Masks Live',
    url: 'http://pjmaskslive.com',
    description: 'Ticketing website for the live version of popular Disney kids television show',
    tools: ['Middleman', 'HTML5', 'CSS3', 'Canvas'],
    image: pj_masks_live
  },
  {
    title: 'Freegan Forum',
    url: 'http://freeganforum.com',
    description: 'MVC application built in Ruby & Sinatra featuring a custom user authentication system',
    tools: ['Sinatra', 'HTML', 'CSS', 'Javascript'],
    image: freegan_forum
  },
  {
    title: 'Bronwyn Roe',
    url: 'https://bronwynroe.com',
    description: 'Portfolio website for NYC-based painter, Bronwyn Roe',
    tools: ['Jekyll', 'HTML', 'CSS', 'Javascript'],
    image: bronwyn_roe
  },
  {
    title: 'We Will Not Be Silent',
    url: 'https://wewillnotbesilent.net',
    description: 'e-Commerce site built with Shopify tooling',
    tools: ['Shopify', 'Slate', 'HTML', 'CSS', 'Javascript'],
    image: we_will_not_be_silent
  },
];

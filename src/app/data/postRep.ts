import { IImageSlider } from "../components/carousel/types/IImageSlider";
import { IPost } from "../types/IPost";

export const postsDb:IImageSlider[] = [
  {
    id: 1,
    url: '../assets/business-post.jpg',
    title:'business post',
    description: 'Business post description',
    tags: ['Business', 'meeting'],
    author: 'John'
  },
  {
    id: 2,
    url: '../assets/soccer-post.jpg',
    title:'soccer post',
    description: 'soccer post description',
    tags: ['soccer', 'meeting'],
    author: 'Will'
  },
  {
    id: 3,
    url: '../assets/travel-post.jpg',
    title:'travel post',
    description: 'travel post description',
    tags: ['travel', 'meeting'],
    author: 'Mike'
  },
  {
    id: 4,
    url: '../assets/universe-post.jpg',
    title:'universe post',
    description: 'universe post description',
    tags: ['universe', 'meeting'],
    author: 'Fabio'
  },
  {
    id: 5,
    title:'Drinks',
    description: 'More fun',
    tags: ['drinks'],
    url: '../assets/drink-card.jpg',
    author: 'Wesley'
  },
  {
    id: 6,
    title:'Natural',
    description: 'More fun',
    tags: ['Natural'],
    url: '../assets/natural-card.jpg',
    author: 'Matheus'
  },
  {
    id: 7,
    title:'Robots',
    description: 'More fun',
    tags: ['Robots'],
    url: '../assets/robots-card.jpg',
    author: 'Ruan'
  },
]

export const latestPosts:IPost[] = [
  {
    id: 5,
    title:'Drinks',
    shortDescription: 'More fun',
    tag: 'drinks',
    imageURL: '../assets/drink-card.jpg'
  },
  {
    id: 6,
    title:'Natural',
    shortDescription: 'More fun',
    tag: 'Natural',
    imageURL: '../assets/natural-card.jpg'
  },
  {
    id: 7,
    title:'Robots',
    shortDescription: 'More fun',
    tag: 'Robots',
    imageURL: '../assets/robots-card.jpg'
  },
]

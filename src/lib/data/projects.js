// Projects data

export const projectImageMap = {
  // Map by repository ID (from GitHub API)
  258580131: {
    name: 'Gourmet-Food',
    cover: 'images/projects/gourmet-food.png',
    description: 'Food ordering app using Zomato API',
    technologies: ['React', 'Zomato API', 'JavaScript']
  },
  92606922: { 
    name: 'Chatter',
    cover: 'images/projects/chatter.png',
    description: 'Real-time chat app with Socket.io',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB']
  },
  82116410: { 
    name: 'TaskR',
    cover: 'images/projects/taskr.png',
    description: 'Trello-like task manager application',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB']
  },
  158177168: { 
    name: 'PUBG-Rank-Predictor',
    cover: 'images/projects/pubg.jpg',
    description: 'Machine Learning model to predict PUBG player rankings',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn']
  },
  234808378: { 
    name: 'Human-Activity-Tracker',
    cover: 'images/projects/activity.jpg',
    description: 'ML model to classify human activities from sensor data',
    technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis']
  },
  73320743: {
    name: 'React-Card-Layout',
    cover: 'images/projects/cards.png',
    description: 'Responsive card layout component library',
    technologies: ['React', 'CSS3', 'Responsive Design']
  },
  112024297: { 
    name: 'Lazy-Loader',
    cover: 'images/projects/lazyloader.gif',
    description: 'Performance optimization library for lazy loading images',
    technologies: ['JavaScript', 'Performance Optimization', 'Intersection Observer']
  },
  // UrbanMart - E-commerce Platform
  'urbanmart': {
    name: 'UrbanMart',
    cover: 'images/projects/urbanmart.png',
    description: 'Modern e-commerce platform with product catalog, shopping cart, and responsive design. Features beauty, fragrance, and lifestyle products.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'E-commerce'],
    url: 'https://urbanmart-dun4.onrender.com',
    github: 'https://github.com/anshul2209/urbanmart'
  }
};

// Fallback for projects not in the map
export const defaultProjectImage = 'images/projects/cards.png';

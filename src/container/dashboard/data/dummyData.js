const Dummy_Info = [
  {
    id: 0,
    type: 'DIET',
    duration: '1 min',
    name: 'Rohit Sheety',
    diagonsed: 'Diagonsed Recently',
    title: 'What are the signs and symptoms of skin cancer',
    subtitle:
      'I’ve been facing a few possibble symptoms of skin cancer. I’ve googled the possibilities but i thought i’d ask the community instead',
    location: 'Mumbai',
    numberOfQuestions: 14,
    isLikeSelected: false,
    likes: 20,
    comments: 10,
    profileImg: require('../../../assets/images/profile_img.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'Rohit Sheety',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 1,
    type: 'DIET',
    duration: '1 min',
    name: 'Rohit Sheety',
    diagonsed: 'Diagonsed Recently',
    title: 'Cancer meet at Rajeev Gandhi National Park',
    subtitle: 'tought i’d ask the community instead.',
    location: 'Rajeev gandhi national park, mumbai',
    numberOfQuestions: 14,
    likes: 20,
    comments: 10,
    isLikeSelected: true,
    profileImg: require('../../../assets/images/profileimg2.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'DAVID Sheety',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 2,
    type: 'DIET',
    duration: '1 min',
    name: 'DAVID Sheety',
    diagonsed: 'Diagonsed Recently',
    title: 'What’s the best Hospital in India for cancer?',
    subtitle:
      'My husband has his 3 days transplant assessment in Newcastle next month, strange mix of emotions. For those that have been through this how long did it take following assessment was it until you were t... See More',
    location: 'Rajeev gandhi national park, mumbai',
    numberOfQuestions: 24,
    likes: 20,
    comments: 10,
    isLikeSelected: true,
    profileImg: require('../../../assets/images/profileimg3.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'DAVID Sheety',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 3,
    type: 'DIET',
    duration: '1 min',
    name: 'Rohit Sheety',
    diagonsed: 'Diagonsed Recently',
    title: 'What are the signs and symptoms of skin cancer',
    subtitle:
      'I’ve been facing a few possibble symptoms of skin cancer. I’ve googled the possibilities but i thought i’d ask the community instead',
    location: 'Mumbai',
    numberOfQuestions: 14,
    likes: 10,
    comments: 10,
    isLikeSelected: false,
    profileImg: require('../../../assets/images/profileimg2.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'RAM Sheety',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 4,
    type: 'DIET',
    duration: '1 min',
    name: 'Bahubali',
    diagonsed: 'Diagonsed Recently',
    title: 'Cancer meet at Rajeev Gandhi National Park',
    subtitle: 'ought i’d ask the community instead.',
    location: 'Rajeev gandhi national park, mumbai',
    numberOfQuestions: 24,
    likes: 20,
    comments: 10,
    profileImg: require('../../../assets/images/profileimg2.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'Ram Charan',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 5,
    type: 'DIET',
    duration: '1 min',
    name: 'Prabhas',
    diagonsed: 'Diagonsed Recently',
    title: 'What’s the best Hospital in India for cancer?',
    subtitle:
      'My husband has his 3 days transplant assessment in Newcastle next month, strange mix of emotions. For those that have been through this how long did it take following assessment was it until you were t... See More',
    location: 'Rajeev gandhi national park, mumbai',
    numberOfQuestions: 24,
    likes: 20,
    isLikeSelected: false,
    comments: 10,
    profileImg: require('../../../assets/images/profileimg3.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'Bahubali',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
];

export const ADD_ACTION = [
  {
    icon: 'edit',
    title: 'Create a post',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'question',
    title: 'Ask a Question',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'desk',
    title: 'Start a Poll',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'calendar',
    title: 'Organise an Event',
    subtitle: 'share your thoughts with the community',
  },
];

export const SHARE_ACTION = [
  {
    icon: 'bell',
    title: 'Send as a private message',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'feed',
    title: 'Share as a post',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'shape',
    title: 'Share on Facebook',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'groupcoment',
    title: 'Send via WhatsApp',
    subtitle: 'share your thoughts with the community',
  },
];

export default Dummy_Info;

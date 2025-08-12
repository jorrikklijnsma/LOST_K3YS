const currentYear = new Date().getFullYear();

const content = {
ui: {
  menu: {
    logoAlt: 'Lost K3ys Logo',
    infoPage: 'Info',
    releasesPage: 'Releases',
    bookingPage: 'Booking',
    techPage: 'Tech',
    contact: 'Contact',
    bookUs: 'Book us',
  },
  bookingForm: {
    additionalDetails: 'Tell us more about your event, special requirements, or any other details...',
    placeholders: {
      name: 'Name',
      email: 'Email',
      venue: 'Venue',
      date: 'Event Date',
      eventType: 'Event Type'
    },
    submitButton: 'Send Booking Request',
    responseTime: 'We aim to respond to all booking requests within one business day.'
  },
  footer: {
    tagline: 'Unlocking the frequencies that move your soul.',
    location: 'Based in: Netherlands',
    copyright: `© ${currentYear} LOST K3YS. All rights reserved.`,
    craftedBy: 'Website crafted with ❤️ by Dodoyoyo',
    generalEmail: 'lostk3ys@dodoyoyo.nl',
    domains: ['lostk3ys.com', 'lostk3ys.nl']
  }
},

infoSection: {
  ourStory: {
    title: 'Our Story',
    subTitle: 'The Story Behind:',
    paragraph1: 'Have you ever lost your keys? That moment when you\'re suddenly detached from reality, freed from everything that ties you down. You can\'t just go home, slip back into routine. You\'re forced into a different space where anything feels possible.',
    paragraph2: 'That\'s where we found ourselves - and where our music lives. Lost K3ys represents that liberated world you enter the moment you lose your keys. The space between what is and what could be.',
    paragraph3: 'Our hardstyle tracks are born in this reality. Every song is an invitation to get lost with us, to leave the familiar behind and discover what happens when you stop trying to find your way back.'
  },
  
  jorrik: {
    title: 'Jorrik',
    content: 'The architect behind our raw energy. Years of EDM production taught him how to build tension, create drops that hit exactly right, and take people on a journey through sound. He brings that precision to every Lost K3ys track, crafting the technical foundation that makes you want to lose yourself in the music.'
  },
  
  meinke: {
    title: 'Meinke',
    content: '15+ years of saxophone mastery meets hardstyle passion. Her classical training evolved into something deeper when she discovered the genre that matched her love for both melody and intensity. Whether laying down melodic lines or adding vocals to raw bangers, she brings the soul to every track.'
  },
  
  together: {
    title: 'Together Since 2025',
    content: 'Two creative minds, one unstoppable force in hardstyle music. From melodic anthems to raw destroyers, we create authentic tracks that tell stories and move crowds.'
  }
},

musicSection: {
  title: 'Our Music',
  subTitle: 'Latest Releases',
  description: 'Each track is a journey through sound, crafted to unlock the frequencies that move your soul.',
  viewAllButton: 'View All Releases'
},

processSection: {
  title: 'Our Process',
  subTitle: 'Where Technology Meets Soul',
  intro: 'We blend cutting-edge tools with years of musical experience to create our signature hardstyle sound.',
  
  step1: {
    title: 'Creative Foundation',
    description: 'We start with our musical vision and use modern production tools to explore sonic possibilities.',
    features: ['Custom workflows', 'Sound exploration', 'Creative experimentation']
  },
  
  step2: {
    title: 'Human Enhancement',
    description: 'Our musical expertise and creative vision shape every element into something uniquely Lost K3ys.',
    features: ['Creative direction', 'Melody crafting', 'Emotional tuning']
  },
  
  step3: {
    title: 'Professional Production',
    description: 'Industry-standard tools and techniques ensure our tracks meet the highest quality standards.',
    features: ['Ableton Live production', 'Professional mastering', 'Club-ready quality']
  },
  
  philosophy: {
    title: 'Our Philosophy',
    creativity: {
      title: 'Technology as Partner',
      content: 'We use modern tools not to replace creativity, but to push the boundaries of what\'s possible in hardstyle music.'
    },
    humanTouch: {
      title: 'Soul is Everything',
      content: 'Every track is infused with our personal experiences, emotions, and musical vision. Technology generates possibilities, but we craft the soul of each song.'
    },
    innovation: {
      title: 'Innovation Through Fusion',
      content: 'By combining modern production capabilities with human intuition and years of musical training, we create hardstyle that\'s both technically solid and emotionally powerful.'
    }
  }
},

bookingSection: {
  title: 'Book Us',
  subTitle: 'Ready to Unlock the Experience?',
  description: 'Whether it\'s a festival, club night, or private event, we\'re ready to bring our signature hardstyle experience to your venue.',
  
  whatWeBring: {
    title: 'What We Bring',
    items: {
      energy: 'High-energy hardstyle sets',
      flexible: 'Flexible scheduling', 
      travel: 'Travel throughout Netherlands & Europe',
      communication: 'Professional communication'
    }
  },
  
  technicalRequirements: {
    title: 'Technical Requirements',
    items: [
      'Professional DJ mixer (Pioneer CDJ preferred)',
      'Quality sound system with sub-bass capability',
      'Stage lighting',
      'Power supply for equipment'
    ]
  },
  
  directContact: {
    title: 'Direct Contact',
    email: 'booking@dodoyoyo.nl',
    note: 'For urgent requests, use the contact form above for fastest response.'
  },

  response: {
    note: 'We aim to respond to all booking requests within one business day.',
  }
}
};

export { content };
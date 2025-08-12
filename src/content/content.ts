const currentYear = new Date().getFullYear();

const content = {
ui: {
  menu: {
    logoAlt: 'LOST K3YS Logo',
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
    subTitle: 'The Reality You Enter When You Lose Your Keys',
    paragraph1: 'Ever lost your keys? That split second of panic, followed by something unexpected - complete freedom. You can\'t just go home, can\'t slip back into routine. You\'re suddenly living in a different reality where anything is possible.',
    paragraph2: 'That moment of liberation is where we found our sound. LOST K3YS isn\'t just a name - it\'s the space between worlds where our hardstyle lives. We\'ve been obsessed with this music for years, but it wasn\'t until we embraced getting lost that we found what we were really meant to create.',
    paragraph3: 'Every track we drop is born in that liberated reality. No compromises, no playing it safe. Just authentic hardstyle that invites you to get lost with us and discover what happens when you stop trying to find your way back to ordinary.'
  },
  
  jorrik: {
    title: 'Jorrik',
    content: 'The raw energy mastermind who\'s been deep in electronic music production for years. Before hardstyle took over, he was already crafting EDM tracks and understanding what makes people lose their minds on the dancefloor. Now he channels all that experience into building drops that hit different and creating the technical power that drives every LOST K3YS banger.'
  },
  
  meinke: {
    title: 'Meinke',
    content: 'Classical saxophone training for 15+ years, then hardstyle passion took over completely. She discovered a genre that could be both beautiful and absolutely mental - exactly what she\'d been searching for. Her vocals and melodic work bring the emotional depth to our tracks, whether it\'s a euphoric anthem or adding that human touch to the rawest drops.'
  },
  
  together: {
    title: 'LOST K3YS Since 2025',
    content: 'Two music obsessives who found each other and found their sound. From melodic masterpieces to raw destruction, we create hardstyle that\'s 100% authentic. No following trends, just making the music we genuinely love and want to hear blasting through festival speakers.'
  }
},

musicSection: {
  title: 'Our Music',
  subTitle: 'Fresh Drops, No Compromises',
  description: 'Every track is a journey into that liberated reality where ordinary rules don\'t apply. We drop new music regularly because inspiration doesn\'t follow schedules.',
  viewAllButton: 'Stream Everything'
},

processSection: {
  title: 'How We Create',
  subTitle: 'Music That Hits Different',
  intro: 'We use every tool available to craft hardstyle that\'s both technically solid and emotionally powerful. No shortcuts, just pure dedication to the sound.',
  
  step1: {
    title: 'Foundation Building',
    description: 'We start with the vibe we want to create, then use modern production techniques to explore every possibility.',
    features: ['Custom sound design', 'Melodic exploration', 'Energy mapping']
  },
  
  step2: {
    title: 'The Human Touch',
    description: 'This is where years of musical experience kick in. Every element gets shaped by our vision until it\'s unmistakably LOST K3YS.',
    features: ['Meinke\'s vocal magic', 'Jorrik\'s production mastery', 'Emotional fine-tuning']
  },
  
  step3: {
    title: 'Festival Ready',
    description: 'Every track gets the full professional treatment. If it\'s not ready to blow minds on the biggest sound systems, it\'s not ready.',
    features: ['Club-tested masters', 'Maximum impact mixing', 'Dancefloor-proven quality']
  },
  
  philosophy: {
    title: 'Our Approach',
    creativity: {
      title: 'Tools, Not Rules',
      content: 'We use whatever technology helps us push boundaries, but the creative vision always comes first. Modern production capabilities just help us get there faster.'
    },
    humanTouch: {
      title: 'Authenticity Above All',
      content: 'Every single track carries our genuine passion for hardstyle. We don\'t make music to fit formulas - we make music that moves us, and trust that it\'ll move you too.'
    },
    innovation: {
      title: 'Pushing Forward',
      content: 'Hardstyle keeps evolving, and so do we. By combining cutting-edge production with old-school musical training and pure genre love, we create tracks that feel both fresh and timeless.'
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
  }
}
};

export { content };
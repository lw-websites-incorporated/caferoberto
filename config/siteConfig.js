// config/siteConfig.js
export const siteConfig = {
  siteName: 'Custom Carpentry',
  logo: {
    text: 'Custom Carpentry',
    src: '/logo/logo_new.png',
    alt: 'Custom Carpentry Logo',
    height: 50,
  },
  metadata: {
    base: {
      title: 'Custom Carpentry – Bespoke Carpentry in North West London & Chilterns',
      description:
        'With over 40 years of combined experience in bespoke carpentry, Custom Carpentry delivers high-quality craftsmanship for both residential and commercial clients across North West London and the surrounding areas.',
      icons: {
        icon: [
          { url: '/logo/icons/favicon.ico' },
          { url: '/logo/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { url: '/logo/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
          { url: '/logo/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
          { rel: 'icon', url: '/logo/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { rel: 'icon', url: '/logo/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    },
  },

  fonts: {
    base: `'Open Sans', sans-serif`,
    heading: `'Playfair Display', serif`,
    baseClass: 'font-opensans',
    headingClass: 'font-playfair',
    google: { base: 'Open Sans', heading: 'Playfair Display', accent: 'Open Sans' },
  },

  // Custom Carpentry color scheme
  brand: {
    primary: '#1D2B3A', // navy
    secondary: '#1A1D21', // graphite
    accent: '#F2F4F7', // light gray
    accentGray: '#D6D9DE', // cool gray
    background: '#F2F4F7', // light base
    dark: '#1A1D21', // deep text
  },

  styles: {
    bgLight: 'bg-[#F2F4F7]',
    bgPrimary: 'bg-[#1D2B3A]',
    bgSecondary: 'bg-[#1A1D21]',
    bgAccent: 'bg-[#F2F4F7]',
    bgAccentGray: 'bg-[#D6D9DE]',
    textPrimary: 'text-[#1A1D21]',
    textMuted: 'text-[#5C6670]',
    textLight: 'text-white',
    borderLight: 'border-[#F2F4F7]',
    borderDark: 'border-[#1D2B3A]',
  },

  banner: {
    show: false,
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Updates', href: '/updates' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Services', href: '/services' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  footer: {
    copyright: 'Custom Carpentry',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Updates', href: '/updates' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Services', href: '/services' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: 'https://www.instagram.com/customcarpentryuk',
      facebook: 'https://www.facebook.com/CustomCarpentryLdn/',
      whatsapp: 'https://wa.link/hl8w8b',
      email: 'mailto:info@custom-carpentry.co.uk',
      phone: 'tel:+447833797963',
    },
    locations: [
      {
        name: 'London',
        address: 'Malvern Court, Oakleigh Road North',
        city: 'London, N20 0TF',
        phone: '+44 7833 797 963',
      },
      {
        name: 'Chilterns',
        address: 'Fern Walk, Hazlemere',
        city: 'High Wycombe, HP15 7RQ',
        phone: '+44 7872 590 975',
      },
    ],
  },

  hero: {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2340&auto=format&fit=crop',
    imageAlt: 'Bespoke carpentry workshop with custom woodwork',
    heading: 'Bespoke Carpentry',
    subheading: 'With over 40 years of combined experience in bespoke carpentry, Custom Carpentry delivers high-quality craftsmanship for both residential and commercial clients across North West London and the surrounding areas.',
    additionalContent: [
      'Whether you need a custom-built wardrobe, kitchen installation, full property renovation, or tailored woodworking solutions, we\'re here to bring your vision to life.',
      'We specialize in made-to-measure furniture, joinery, and renovation projects — always with a focus on precision, durability, and elegant design. We\'re passionate about detail and dedicated to exceeding expectations.',
    ],
    ctaText: 'Contact Us',
    ctaHref: '/contact',
    secondaryCtaText: 'View Our Work',
    secondaryCtaHref: '/portfolio',
  },

  welcome: {
    heading: 'Contact us today to discuss your next project.',
    content: '',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2340&auto=format&fit=crop',
    imageAlt: 'Custom carpentry work in progress',
  },

  services: {
    heading: 'Our Services Include',
    subheading: '',
    items: [
      {
        title: 'Internal and External Carpentry',
        description: 'Complete carpentry solutions for both interior and exterior projects, from structural work to finishing touches.',
        icon: 'home',
        features: [],
      },
      {
        title: 'Bespoke Furniture',
        description: 'Custom-designed and handcrafted furniture tailored to your exact specifications and space requirements.',
        icon: 'sofa',
        features: [],
      },
      {
        title: 'Full Refurbishments',
        description: 'Comprehensive property renovation services transforming spaces from concept to completion.',
        icon: 'hammer',
        features: [],
      },
      {
        title: 'Property Maintenance',
        description: 'Reliable maintenance services to keep your property in perfect condition year-round.',
        icon: 'wrench',
        features: [],
      },
      {
        title: 'Finish Carpentry',
        description: 'Expert finishing work including skirting, architraves, and all the beautiful details that complete a space.',
        icon: 'ruler',
        features: [],
      },
      {
        title: 'Light Building Work',
        description: 'General building services complementing our carpentry expertise for complete project solutions.',
        icon: 'building',
        features: [],
      },
      {
        title: 'Decorating and more',
        description: 'Professional decorating services and additional trades to deliver complete transformations.',
        icon: 'paintbrush',
        features: [],
      },
    ],
  },

  servicesPage: {
    heading: 'Services',
    intro: 'Whether it\'s indoor or outdoor, commercial or domestic, Custom Carpentry is here to provide all the carpentry and woodworking services you need. We thrive on finding the perfect solution for every project and embrace challenges with enthusiasm!',
    mainServices: [
      {
        title: 'Shelving & Storage',
        description: 'Custom shelving solutions designed to maximize your space and complement your interior.',
        icon: 'shelf',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2340&auto=format&fit=crop',
      },
      {
        title: 'Wardrobes',
        description: 'Bespoke fitted wardrobes tailored to your exact requirements and room dimensions.',
        icon: 'wardrobe',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2340&auto=format&fit=crop',
      },
      {
        title: 'Panelling',
        description: 'Elegant wall panelling to add character and sophistication to any room.',
        icon: 'panel',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2340&auto=format&fit=crop',
      },
      {
        title: 'Media Walls',
        description: 'Custom media wall units designed to house your entertainment systems beautifully.',
        icon: 'tv',
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2340&auto=format&fit=crop',
      },
      {
        title: 'Kitchens',
        description: 'Full kitchen installations from design through to completion.',
        icon: 'kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2340&auto=format&fit=crop',
      },
      {
        title: 'CNC Machining',
        description: 'Precision CNC machining for complex and detailed woodworking projects.',
        icon: 'cnc',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2340&auto=format&fit=crop',
      },
      {
        title: 'Property Maintenance',
        description: 'Comprehensive maintenance services for residential and commercial properties.',
        icon: 'maintenance',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2340&auto=format&fit=crop',
      },
      {
        title: 'Full Refurbishments',
        description: 'Complete property renovations transforming spaces from concept to completion.',
        icon: 'refurb',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2340&auto=format&fit=crop',
      },
      {
        title: 'Decking and External Woodwork',
        description: 'Quality outdoor carpentry including decking, pergolas, and garden structures.',
        icon: 'deck',
        image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2340&auto=format&fit=crop',
      },
    ],
    additionalServices: [
      'Shelving & Storage',
      'Bedrooms',
      'Kitchens',
      'Bar & Shop Fitting',
      'Laminate and Wood Flooring',
      'Garden Sheds, Summer Houses and Gazebos',
      'Decking',
      'Ceilings & Roofing',
      'Loft and Garage Conversions',
      'Gates, Fences and Garage Doors',
      'Skirtings and Architraves',
      'Doors',
    ],
  },

  portfolio: {
    heading: 'Portfolio',
    intro: 'Explore our categorised portfolio for inspiration! Browse through our collection of past projects to find something similar to what you have in mind.',
    categories: [
      {
        title: 'Shelving & Storage',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2340&auto=format&fit=crop',
        slug: 'shelving-storage',
      },
      {
        title: 'Wardrobes',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2340&auto=format&fit=crop',
        slug: 'wardrobes',
      },
      {
        title: 'Paneling',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2340&auto=format&fit=crop',
        slug: 'paneling',
      },
      {
        title: 'Kitchens',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2340&auto=format&fit=crop',
        slug: 'kitchens',
      },
      {
        title: 'Refurbishments',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2340&auto=format&fit=crop',
        slug: 'refurbishments',
      },
      {
        title: 'Flooring',
        image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2340&auto=format&fit=crop',
        slug: 'flooring',
      },
      {
        title: 'Decking & External Woodwork',
        image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2340&auto=format&fit=crop',
        slug: 'decking-external',
      },
      {
        title: 'CNC Machining',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2340&auto=format&fit=crop',
        slug: 'cnc-machining',
      },
      {
        title: 'Restoration & Property Maintenance',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2340&auto=format&fit=crop',
        slug: 'restoration-maintenance',
      },
      {
        title: 'Commercial',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2340&auto=format&fit=crop',
        slug: 'commercial',
      },
      {
        title: 'Misc.',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2340&auto=format&fit=crop',
        slug: 'misc',
      },
    ],
  },

  whyChooseUs: {
    heading: 'Why Choose Us',
    subheading: 'Quality workmanship you can trust',
    items: [
      {
        title: 'Personalised Approach',
        description: 'We take the time to fully understand your requirements, drawing on our experience to create a tailored solution that meets your needs perfectly.',
        icon: 'users',
      },
      {
        title: 'Excellence and Professionalism',
        description: 'We take great pride in our meticulous approach and are committed to ensuring complete satisfaction. Our dedication guarantees that we consistently deliver a high-end finish.',
        icon: 'award',
      },
      {
        title: 'Insured and Guaranteed',
        description: 'Accidents can happen and are often unavoidable. That\'s why we maintain full public liability insurance, ensuring that both parties are protected.',
        icon: 'shield',
      },
    ],
  },

  about: {
    heading: 'About Us',
    content: '',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2340&auto=format&fit=crop',
    imageAlt: 'Custom carpentry workshop',
    features: [
      'Over 40 years combined experience',
      'Fully insured',
      'North West London & Chilterns',
      'Commercial & Residential',
    ],
    stats: [
      { value: '40+', label: 'Years Combined Experience' },
      { value: '1000+', label: 'Projects Completed' },
      { value: '100%', label: 'Satisfaction Rate' },
    ],
    values: [
      {
        title: 'Personalised Approach',
        description: 'We take the time to fully understand your requirements, drawing on our experience to create a tailored solution that meets your needs perfectly.',
        icon: 'users',
      },
      {
        title: 'Excellence and Professionalism',
        description: 'We take great pride in our meticulous approach and are committed to ensuring complete satisfaction. Our dedication guarantees that we consistently deliver a high-end finish.',
        icon: 'award',
      },
      {
        title: 'Insured and Guaranteed',
        description: 'Accidents can happen and are often unavoidable. That\'s why we maintain full public liability insurance, ensuring that both parties are protected.',
        icon: 'shield',
      },
    ],
    team: [
      {
        name: 'Andy Ford',
        role: 'Custom Carpentry London',
        bio: 'With over 35 years of experience in carpentry, I embarked on my journey in 1984 at St Albans College in Hertfordshire.\n\nThroughout my career, I\'ve worked with various companies, gaining expertise not only in woodworking but also in general building. My specialty is second fix finish work, focusing on the beautiful details you see inside homes.\n\nOver the years, I\'ve built a strong network of qualified and experienced tradesmen to support my projects, ensuring the highest quality in every endeavor.',
        image: '/logo/andy_ford.avif',
      },
      {
        name: 'Rhys Merritt',
        role: 'Custom Carpentry Chilterns',
        bio: 'I had the privilege of training directly alongside Andy for over three years, where I honed essential skills in carpentry and light building work.\n\nMy passion lies in finish carpentry; skirting and architraves, wardrobe and kitchen installations.\n\nAdditionally, my background in ICT management brings a unique perspective to my projects.',
        image: '/logo/rhys_merritt.avif',
      },
    ],
    teamPhoto: '/logo/andyandrhys.avif',
  },

  gallery: {
    heading: 'Featured Projects',
    subheading: 'A selection of our recent work',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2340&auto=format&fit=crop',
        alt: 'Custom built wardrobe installation',
        category: 'wardrobes',
      },
      {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2340&auto=format&fit=crop',
        alt: 'Bespoke kitchen installation',
        category: 'kitchens',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2340&auto=format&fit=crop',
        alt: 'Elegant wall panelling',
        category: 'panelling',
      },
      {
        src: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2340&auto=format&fit=crop',
        alt: 'Custom shelving unit',
        category: 'shelving',
      },
      {
        src: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2340&auto=format&fit=crop',
        alt: 'Garden decking project',
        category: 'decking',
      },
      {
        src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2340&auto=format&fit=crop',
        alt: 'Carpentry workshop craftsmanship',
        category: 'misc',
      },
    ],
  },

  testimonials: {
    heading: 'Testimonials',
    subheading: 'What our clients say about us',
    intro: '',
    entries: [
      {
        quote: 'Andy and Rhys have been exceptional. Their knowledge, craftsmanship, and attention to detail is second to none. They replaced two sets of doors and a large period window to an incredibly high standard. We cannot recommend them highly enough.',
        name: 'Susannah Dean',
        location: 'Google Review',
        rating: 5,
      },
      {
        quote: 'Andy and Rhys did a phenomenal job installing custom panelling throughout our house. They worked efficiently and were meticulous in their approach. The outcome looks better than we imagined.',
        name: 'Harry',
        location: 'Google Review',
        rating: 5,
      },
      {
        quote: 'Prompt, tidy, efficient and highly skilled carpentry. They understood our needs and created the perfect under-stairs storage solution. Looking forward to the next project.',
        name: 'Claire Leon',
        location: 'Google Review',
        rating: 5,
      },
      {
        quote: 'Custom Carpentry built a model rail base and supports for my garden room. Excellent job and a very friendly service. I would definitely recommend them.',
        name: 'Rob Corne',
        location: 'Google Review',
        rating: 5,
      },
      {
        quote: 'Andy replaced old fitted wardrobe doors and made doors to fit an open alcove. He was extremely helpful and professional and achieved the exact effect we wanted.',
        name: 'Heather Kashi',
        location: 'Google Review',
        rating: 5,
      },
      {
        quote: 'We hired Custom Carpentry for a complete office overhaul. They brought our vision to life with great attention to detail. Prompt, professional, and the quality is second to none.',
        name: 'Perry Brown',
        location: 'Google Review',
        rating: 5,
      },
      {
        quote: 'Andy and Rhys transformed a dark, damp space into a beautiful laundry room and bathroom. They went above and beyond, suggesting lovely finishing touches. Highly recommended.',
        name: 'Tina Fenner',
        location: 'Google Review',
        rating: 5,
      },
      {
        quote: 'Rhys and Andy did a fantastic job on our decking. Tidy, methodical, and great attention to detail. Reasonably priced and completed on time and on budget.',
        name: 'Yvonne Merritt',
        location: 'Google Review',
        rating: 5,
      },
      {
        quote: 'Custom Carpentry transformed our living space with beautiful built-in wardrobes. The attention to detail was exceptional, and the team were professional from start to finish. Highly recommend!',
        name: 'Sarah M.',
        location: 'North London',
        rating: 5,
      },
      {
        quote: 'Andy and his team did a fantastic job on our kitchen installation. They listened to exactly what we wanted and delivered beyond our expectations. The craftsmanship is outstanding.',
        name: 'James & Emma T.',
        location: 'Chilterns',
        rating: 5,
      },
      {
        quote: 'We\'ve used Custom Carpentry for multiple projects now - shelving, panelling, and a complete room refurbishment. Every time they deliver exceptional quality and great value.',
        name: 'David C.',
        location: 'Hampstead',
        rating: 5,
      },
      {
        quote: 'Professional, reliable and truly skilled craftsmen. Our bespoke furniture fits perfectly and the finish is immaculate. Would definitely use again.',
        name: 'Michelle R.',
        location: 'High Wycombe',
        rating: 5,
      },
    ],
  },

  contact: {
    heading: 'Contact Us',
    subheading: 'Have questions or need assistance? Reach out to us via email, give us a call or simply complete the form below! We\'re always here to provide a free consultation and help you with anything you need.',
    phone: '+44 7833 797 963',
    email: 'info@custom-carpentry.co.uk',
    serviceArea: 'Serving North West London and the Chilterns',
    locations: [
      {
        name: 'London',
        address: 'Malvern Court, Oakleigh Road North',
        city: 'London, N20 0TF',
        phone: '+44 7833 797 963',
      },
      {
        name: 'Chilterns',
        address: 'Fern Walk, Hazlemere',
        city: 'High Wycombe, HP15 7RQ',
        phone: '+44 7872 590 975',
      },
    ],
    hours: [
      { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    form: {
      heading: 'Get In Touch',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        phone: { label: 'Phone', placeholder: 'Your phone number' },
        service: {
          label: 'Service Interested In',
          options: [
            'Shelving & Storage',
            'Wardrobes',
            'Panelling',
            'Media Walls',
            'Kitchens',
            'CNC Machining',
            'Property Maintenance',
            'Full Refurbishments',
            'Decking and External Woodwork',
            'Other',
          ],
        },
        message: { label: 'Message', placeholder: 'Tell us about your project...' },
      },
      button: 'Send Message',
    },
  },

  cta: {
    heading: 'In need of an estimate or advice?',
    subheading: 'Contact us now',
    phone: '+44 7833 797 963',
    buttonText: 'Contact Us Now',
    buttonHref: '/contact',
    secondaryButtonText: 'Call Us',
    secondaryButtonHref: 'tel:+447833797963',
  },

  updates: {
    heading: 'Updates',
    intro: 'Follow us on Instagram for our latest projects and updates.',
    instagramHandle: '@customcarpentry',
    instagramUrl: 'https://instagram.com/customcarpentry',
  },
};

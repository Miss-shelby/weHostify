import { AFRICANWOMAN, BGONE, BTCGIRL, IMAGEONE, IMAGETWO, LIGHTING, MIGRATION, PROFILEIMG, SECURE, SUPPORT } from "../constants/assetexports";



export const navLinks =[
    {
        title:"Pricing",
        path:"/pricing",
        dropDown:false
    },
    {
        title:"WordPress",
        path:"/pricing",
        dropDown:true
    },
    {
        title:"Website builder",
        path:"/pricing",
        dropDown:true
    },
    {
        title:"Hosting",
        path:"/pricing",
        dropDown:true
    },
    {
        title:"Pro",
        path:"/pricing",
        dropDown:false
    },
    {
        title:"Domain",
        path:"/pricing",
        dropDown:false
    },
   
]

export const hostingPlans =[
    {
       plan:{
        name:"DA_Gold",
        desc:"Ideal for Personal sites, blogs, growing startups. Enjoy numerous benefits.",
        price:"$10.00 ",
        isPopular:false,
        packages:[
            "Direct Admin Control Panel",
            "5 GB SSD Storage",
            "10 GB Bandwidth",
            "1 Website",
            "5 Subdomain",
            "20 Email Accounts"         
        ]
       }
    },
    {
       plan:{
        name:"DA_Platinum",
        desc:"Ideal for Small businesses, Agencies, tech teams, heavy traffic, Best value for you.",
        price:"$19.00 ",
        isPopular:true,
        packages:[
            "Direct Admin Control Panel",
            "10 GB SSD Storage",
            "Unlimited  Bandwidth",
            "6 Website",
            "50 Subdomain",
            "100 Email Accounts"         
        ]
       }
    },
    {
       plan:{
        name:"DA_Rhodium",
        desc:"Ideal for Personal sites, blogs, growing startups. Enjoy numerous benefits",
        price:"$33.00 ",
        isPopular:false,
        packages:[
            "Direct Admin Control Panel",
            "25 GB SSD Storage",
            "Unlimited  Bandwidth",
            " 15 Website",
            "100 Subdomain",
            "200 Email Accounts"         
        ]
       }
    }
]
export const faqData = [
  {
    question: "Do I need to know how to code to use WeHostify?",
    answer:
      "Not at all. Our AI website builder helps you generate a website by simply describing what you want. No coding or design skills required.",
  },
  {
    question: "Can I migrate my website from another hosting provider?",
    answer: "Shipping usually takes 3–5 business days, depending on your location.",
  },
  {
    question: "What’s the benefit of having a personal support agent?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "What platforms do you support?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "How do I qualify for SME or NGO hosting discounts?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "Do you offer flexible payment options?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "Is the AI website builder customizable after generation?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "What if I have an issue outside normal hours?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
];
export const footerItems=[
    {
        title:'PRODUCTS',
        textColor:"#FF6A00",
        items:[
            'Services', 'Cpanel Hosting','Domain Registration','Direct Admin Hosting','AI Website Builder'
        ]
    },
     {
        title:'COMPANY',
        textColor:"#FF6A00",
        items:[
            'About WeHostify', 'Privacy Policy','Terms of Service','Student Discount','Hire an expert','African Business Discount'
        ]
    },
      {
        title:'VPS',
        textColor:"#BF5540",
        items:[
            'Linux Cloud Server', 'Windows Cloud Server',
        ]
    },
    {
        title:'Support',
        textColor:"#BF5540",
        items:[
            'Contact Us', 'Support Ticket',
        ]
    }
]

export const features =[
    {
        iconSrc:SUPPORT,
        title:"1-Click Install",
        desc:"Install WordPress, Joomla, and other CMSs instantly — no manual setup required."
    },
    {
        iconSrc:LIGHTING,
        title:"Optimization",
        desc:"Our servers are configured to ensure fast loading speeds and high uptime for all supported CMS platforms."
    },
     {
        iconSrc:SECURE,
        title:"Enhanced Security",
        desc:"Automatic updates, malware scanning, and secure plugin/theme environments keep your website safe."
    },
    {
        iconSrc:MIGRATION,
        title:"Free Migration",
        desc:"Already using another host? We’ll migrate your CMS-based site to WeHostify. Zero downtime, zero stress."
    }
]
export const reviews =[
     {
        customer:'Chiamaka E.',
        review:"WeHostify made it so easy to launch my business site. I didn’t need a developer — just the AI builder and vibes!",
        occupation:"Boutique Owner",
        profileImg:PROFILEIMG
    },
    {
        customer:'Tunde M.',
        review:"Our NGO website was hosted at a discount, and we got a dedicated support agent. That level of care is rare.",
        occupation:"Founder, SafeGirls Africa",
        profileImg:PROFILEIMG
    },
     {
        customer:'Nkechi A.',
        review:"I host all my client sites with WeHostify. Fast servers, solid uptime, and instant support when I need it.",
        occupation:"Freelance Web Designer",
        profileImg:PROFILEIMG
    },
     {
        customer:'Ibrahim L.',
        review:"I’ve never built a website before, but WeHostify’s AI builder made it surprisingly simple. I even impressed myself!",
        occupation:"Student & Creative",
        profileImg:PROFILEIMG
    },
    {
        customer:'David O.',
        review:"CMS setup is flawless. I installed WordPress in seconds and got full SSH access. It’s reliable and developer-friendly.",
        occupation:"Full-stack Developer",
        profileImg:PROFILEIMG
    },
    {
        customer:'Peace K.',
        review:"Our store runs on Joomla, and performance has been way better since switching to WeHostify. Sales went up, too.",
        occupation:"Online Retailer",
        profileImg:PROFILEIMG
    },
     {
        customer:'Tari M.',
        review:"Hosting feels less stressful now. I love the fact that I can reach my support agent on WhatsApp directly.",
        occupation:"Content Strategist",
        profileImg:PROFILEIMG
    },
    {
        customer:'Ibrahim L.',
        review:"I’ve never built a website before, but WeHostify’s AI builder made it surprisingly simple. I even impressed myself!",
        occupation:"Student & Creative",
        profileImg:PROFILEIMG
    },
]

// slides.js
export const slides = [
  {
    id: 1,
    bg: BGONE,
    title: "Activa8 Hub",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, quod nulla cumque fugit nostrum quis cupiditate adipisci ad maxime facere. Adipisci nesciunt maiores dignissimos saepe. Odit eos possimus, dolorem laboriosam odio consectetur mollitia nesciunt necessitatibus. Ipsa quibusdam numquam molestias cupiditate quod deserunt officiis veritatis error exercitationem explicabo! Omnis, nisi nobis!",
    thumb: IMAGEONE,
    secondaryThumb: BTCGIRL,
  },
  {
    id: 2,
    bg: IMAGEONE,
    title: "Future Builders",
    description: "n this article, we’ll explore 40 creative CSS text animations featuring ten custom animations I've personally created, plus 30 additional hand-picked examples from talented CodePen creators. Each one comes with a live demo and code, so you can dive in and try them out. Let’s get started!!",
    thumb: IMAGETWO,
    secondaryThumb: BTCGIRL,
  },
    {
    id: 3,
    bg: BGONE,
    title: "chyco",
    description: "In this listicle, we won’t just be exploring the 40 examples. We’ll also look at the technologies and the core CSS principles used for each one. Let’s start by checking out 10 custom examples. After that, we’ll see 30 others created by developers across the web.",
    thumb: IMAGEONE,
    secondaryThumb: BTCGIRL,
  },
     {
    id: 4,
    bg: IMAGEONE,
    title: "Ammie",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, quod nulla cumque fugit nostrum quis cupiditate adipisci ad maxime facere. Adipisci nesciunt maiores dignissimos saepe. Odit eos possimus, dolorem laboriosam odio consectetur mollitia nesciunt necessitatibus. Ipsa quibusdam numquam molestias cupiditate quod deserunt officiis veritatis error exercitationem explicabo! Omnis, nisi nobis!",
    thumb:AFRICANWOMAN ,
    secondaryThumb: IMAGEONE,
  },
   {
    id: 5,
    bg: BGONE,
    title: "chyco2",
    description: "In this listicle, we won’t just be exploring the 40 examples. We’ll also look at the technologies and the core CSS principles used for each one. Let’s start by checking out 10 custom examples. After that, we’ll see 30 others created by developers across the web.",
    thumb: IMAGEONE,
    secondaryThumb: BTCGIRL,
  },
    {
    id: 6,
    bg: BGONE,
    title: "Activa8 Hub2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, quod nulla cumque fugit nostrum quis cupiditate adipisci ad maxime facere. Adipisci nesciunt maiores dignissimos saepe. Odit eos possimus, dolorem laboriosam odio consectetur mollitia nesciunt necessitatibus. Ipsa quibusdam numquam molestias cupiditate quod deserunt officiis veritatis error exercitationem explicabo! Omnis, nisi nobis!",
    thumb: IMAGEONE,
    secondaryThumb: BTCGIRL,
  },

];

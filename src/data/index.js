import { AFRICANWOMAN, BGONE, BTCGIRL, DISCOUNTIMAGE1, DISCOUNTIMAGE2, DISCOUNTIMAGE3, DISCOUNTIMAGE4, DISCOUNTIMAGE5, IMAGEONE, IMAGETWO, LIGHTING, MIGRATION, PROFILEIMG, SECURE, SUPPORT } from "../constants/assetexports";
import { Icons } from "../Icons";



export const navLinks =[
    {
        title:"AboutUs",
        path:"/about",
        dropDown:false
    },
    {
        title:"HireExperts",
        path:"/hire",
        dropDown:false
    },
     {
        title:"Student Discounts",
        path:"/student",
        dropDown:false
    },
    {
        title:"AfricanBusiness",
        path:"/african-businesses",
        dropDown:false
    },
    {
        title:"Pricing",
        path:"/pricing",
        dropDown:false
    },
    {
        title:"WordPress",
        path:"/wordpress",
        dropDown:true
    },
    {
        title:"Website builder",
        path:"/website-builder",
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
    {
        title:"contact",
        path:"/contact",
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
export const studentfaqData = [
  {
    question: "Who is eligible for the student discount?",
    answer:
      "Any student enrolled in an African tertiary institution with a valid school ID, admission letter, and school email address is eligible.",
  },
  {
    question: "What documents do I need to apply?",
    answer: "Shipping usually takes 3–5 business days, depending on your location.",
  },
  {
    question: "How long does it take to get verified?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "Can I choose any hosting plan with the discount?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "Do I have to pay for the .com.ng domain?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "What happens after one year?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "Can I use my personal email instead of my school email?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "What if I have questions or need help after getting my account?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
];
export const africanBusinessfaqData = [
  {
    question: "Who qualifies as an African business?",
    answer:
      "Any business legally registered and operating in an African country is eligible, especially those with CAC or equivalent business documentation.",
  },
  {
    question: "What type of hosting plans can I access with this offer?",
    answer: "Shipping usually takes 3–5 business days, depending on your location.",
  },
  {
    question: "How long does it take to get verified?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "How long does account setup take after I apply?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "Can NGOs and startups also apply?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "What if I already have a domain or hosting elsewhere?",
    answer: "No problem — we can help you transfer your domain and website to WeHostify easily.",
  },
   {
    question: "What kind of support do I get?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
   {
    question: "How do I apply again?",
    answer: "Yes, we ship internationally. Shipping fees apply based on destination.",
  },
];
export const websiteBuilderfaqData = [
  {
    question: "Do I need coding skills to use the AI Website Builder?",
    answer:
      "Not at all. Our builder is fully no-code and designed for beginners — just describe what you need, and the AI will do the rest.",
  },
  {
    question: "Can I use my own domain with the website I build?",
    answer: "Yes! You can connect your own domain or register a new one through WeHostify.",
  },
  {
    question: "What types of websites can the AI builder create?",
    answer: "You can build blogs, portfolios, landing pages, online stores, business sites, and more — all with responsive design.",
  },
   {
    question: "Is the website mobile-friendly?",
    answer: "Absolutely. Every website created with our builder is optimized for phones, tablets, and desktops.",
  },
   {
    question: "Absolutely. Every website created with our builder is optimized for phones, tablets, and desktops.",
    answer: "Yes, you can fully customize every part of the design using our drag-and-drop editor.",
  },
   {
    question: "Does the builder support e-commerce features?",
    answer: "Yes! You can add product pages, shopping carts, payment gateways, and manage inventory.",
  },
   {
    question: "Is hosting included with the AI Website Builder?",
    answer: "Yes, hosting is included in your WeHostify plan — no need for external providers.",
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
export const keyFeatures =[
    {
        title:"E-Commerce",
        desc:"Sell your goods and services anywhere on the website"
    },
    {
        title:"AI Website Builder",
        desc:"Create your website easily and for free with AI"
    },
     {
        title:"Email",
        desc:"Professional email address for your business"
    },
    {
        title:"Connect your domain",
        desc:"You can pack your own domain in all website builder plans"
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


export const services =[
    {
        Icon:Icons.cloud,
        title:"Web Hosting for All",
        desc:"Reliable, scalable hosting solutions including:",
        hostingList:[
            "WordPress Hosting","Cloud Hosting","Shared Hosting, and more."
        ]
    },
    {
        // Icon:Icons.ai,
         Icon:Icons.ai,
        title:"AI Website Builder",
        desc:"Don’t know how to code? No problem. Our AI-powered builder lets you generate beautiful, professional websites just by describing your idea in plain text."
    },
     {
        // Icon:Icons.suitcase,
         Icon:Icons.suitcase,
        title:"SME & NGO Support",
        desc:"We provide exclusive discounts, customized onboarding, and dedicated support for African-based small businesses and nonprofits."
    },
    {
        // Icon:Icons.graduationCap,
         Icon:Icons.graduationCap,
        title:"Student Discount ",
        desc:"Eligible students receive 50% off one-year hosting plans and a free .com.ng domain — giving them a head start in the digital world."
    },
    {
        // Icon:Icons.guru,
         Icon:Icons.guru,
        title:"Expert Services ",
        desc:"Our team of designers and developers can build your website or mobile app for you — and Afro-based businesses receive additional discounts."
    },
     {
        // Icon:Icons.creditCard,
         Icon:Icons.creditCard,
        title:"Flexible Payment  ",
        desc:"Monthly, quarterly, and annual billing options. Multiple secure payment gateways supported including local bank transfers and digital wallets."
    }
]

export const whatWeBuild =[
    {
       Icon:Icons.settings,
        title:"Custom Websites",
        desc:"Perfect for businesses, professionals, and NGOs who need an online presence that’s fast, functional, and visually appealing.",
        
    },
    {
         Icon:Icons.cart,
        title:"eCommerce Platforms",
        desc:"Launch your product-based business with secure, scalable, and beautifully designed online shops that convert visitors into customers."
    },
     {
        Icon:Icons.smartPhone,
        title:"Mobile Apps ",
        desc:"Whether it's a native app or a cross-platform build, our mobile app solutions are user-friendly, fast, and designed to scale."
    },
    {
        Icon:Icons.webPage,
        title:"Web Applications ",
        desc:"Need a more dynamic platform? We build everything from custom dashboards to booking systems and productivity tools tailored to your workflow."
    },
    {
         Icon:Icons.innovation,
        title:"AI-Integrated Platforms ",
        desc:"Harness the power of artificial intelligence — from chatbots to content generators, we help you embed smart features that make your platform stand out."
    },
     {
         Icon:Icons.design,
        title:"Design Packages  ",
        desc:"Logos, color systems, UI/UX design, and visual identity kits — everything you need to ensure your digital presence is striking and consistent."
    }
]

export const disCountsLoop=[
     {
        imgSrc:DISCOUNTIMAGE2
    },
     {
        imgSrc:DISCOUNTIMAGE3
    },
     {
        imgSrc:DISCOUNTIMAGE4
    },
    {
        imgSrc:DISCOUNTIMAGE5
    }
]

export const whatYouNeed =[
    {
        Icon:Icons.discount,
        title:"50% Off Hosting Plan",
        desc:"Save big on your first year of hosting so you can focus more on building and less on budgeting.",
        
    },
    {
        Icon:Icons.domain,
        title:"Free .com.ng Domain",
        desc:"Get your very own .com.ng domain — perfect for portfolios, startups, or personal brands."
    },
     {
        Icon:Icons.innovation,
        title:"AI Website Builder Access ",
        desc:"No code? No problem. Use our AI builder to generate your website with simple prompts."
    },
]

export const whatYouGet =[
    {
       Icon:Icons.settings,
        title:"Discounted Packages",
        desc:"Affordable pricing plans crafted for African-based businesses, giving you enterprise-grade hosting at local-friendly rates.",
        
    },
    {
         Icon:Icons.phoneCall,
        title:"Priority Business Support",
        desc:"Jump the support queue with dedicated agents who understand your business and provide fast, effective assistance."
    },
     {
        Icon:Icons.innovation,
        title:"AI Website Builder Access ",
        desc:"No code? No problem. Use our AI builder to generate your website with simple prompts."
    },
    
]

export const privacyScreens=[
    {
        title:"Privacy Policy",
        path:"/privacy-policy"
    },
    {
        title:"Terms of Service",
        path:"/terms"
    },
    {
        title:"General Conduct & Acceptable Use",
        path:"/general"
    },
     {
        title:"Customer Support",
        path:"/customer-support"
    },
    {
        title:"SME/NGO Hosting Policy",
        path:"/SME-Policy"
    },
     {
        title:"Student Discount Policy",
        path:"/student-policy"
    },
     {
        title:"Payments & Refunds",
        path:"/payments"
    },
    {
        title:"Termination",
        path:"/termination"
    },
    {
        title:"Policy Updates",
        path:"/policy-updates"
    }
    ]
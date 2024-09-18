import { facebook, instagram, twitter } from "../assets/icons";
import { agodi, dunes, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, nikeArt, peacePark, redEye, shopRite, team1, team2, whisperingPalm, zumaRock } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "specialoffer", label: "Special Offer" },
    { href: "gallery", label: "Gallery" },
    { href: "login", label: "Login" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
];

export const footerLinks = [
    {
        title: "Hot Links",
        links: [
            { name: "About", link: "/about" },
            { name: "Our Vision", link: "/" },
            { name: "Your Booking", link: "/" },
        ],
    },
    {
        title: "Top Places",
        links: [
            { name: "Lagos", link: "/" },
            { name: "Ibadan", link: "/" },
            { name: "Abuja", link: "/" },
            { name: "Port Harcourt", link: "/" },
        ],
    },
    {
        title: "Help & Privacy",
        links: [
            { name: "Terms & Conditions", link: "/" },
            { name: "Contact Us", link: "/contact" },
            { name: "Ride Hailing Service", link: "/" },
        ],
    },
];

export const socialMedia = [
    {
        title: "Social Media",
        links: [
            { src: twitter, alt: "twitter logo", href: "https://twitter.com" },
            { src: facebook, alt: "facebook logo", href: "https://facebook.com"  },
            { src: instagram, alt: "instagram logo", href: "https://instagram.com" },
        ]
    }
];

export const places = [
    {
      title: 'Whispering Palms, Lagos',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: whisperingPalm,
    },
    {
      title: 'ShopRite, Abuja',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: shopRite,
    },
    {
      title: 'Peace Park, Port Harcourt',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: peacePark,
    },
    {
      title: 'Agodi Gardens, Ibadan',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: agodi,
    },
    {
      title: 'Omu Resort, Lagos',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: redEye,
    },
    {
      title: 'Dunes Express Cafe, Abuja',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: dunes,
    },
];


export const recommended = [
    {
        image: nikeArt,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisqu eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspi totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, culpa tempore eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisqu eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspi totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, culpa tempore eum.'
    },
    {
        image: zumaRock,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisqu eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspi totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, culpa tempore eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisqu eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspi totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, culpa tempore eum.'
    }
]

export const galleries = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9
]

export const teams = [
    {
        image: team2,
        value: "xxxxxx",
        position: "CEO",
    },
    {
        image: team1,
        value: "xxxxxx",
        position: "DESIGN TEAM LEAD",
    },
    {
        image: team2,
        value: "xxxxxx",
        position: "TEAM LEAD",
    },
    {
        image: team2,
        value: "xxxxxx",
        position: "BUSINESS DEVELOPMENT HEAD",
    },
    {
        image: team2,
        value: "xxxxxx",
        position: "HEAD OF STRATEGY",
    }
]
import { facebook, instagram, twitter } from "../assets/icons";
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, nikeArt, zumaRock } from "../assets/images";

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
            { src: twitter, alt: "facebook logo" },
            { src: facebook, alt: "twitter logo" },
            { src: instagram, alt: "instagram logo" },
        ]
    }
];

export const places = [
    {
      title: 'Whispering Palms, Lagos',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: nikeArt,
    },
    {
      title: 'ShopRite, Abuja',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: nikeArt,
    },
    {
      title: 'Peace Park, Port Harcourt',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: nikeArt,
    },
    {
      title: 'Agodi Gardens, Ibadan',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: nikeArt,
    },
    {
      title: 'Omu Resort, Lagos',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: nikeArt,
    },
    {
      title: 'Dunes Express Cafe, Abuja',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam.',
      image: nikeArt,
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
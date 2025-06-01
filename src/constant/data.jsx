import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

// icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

// properties data
export const PROPERTIES = [
  {
    title: "Kakda_Abhinav_Homes",
    image: img1,
    category: "Home",
    address: "Ayodhya Bypass Road",
    country: "India",
    city: "Bhopal",
    area: 450,
    price: 45,
    description:
      "Charming bungalow with modern amenities and scenic views, perfect for peaceful living.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Kakda_Alankar_Heights",
    image: img2,
    category: "Residence",
    address: "Karond Bypass",
    country: "India",
    city: "Bhopal",
    area: 500,
    price: "2.24 Cr",
    description:
      "A beautiful residence with a stunning view, perfect for a serene escape.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Dwarka_Dham",
    image: img3,
    category: "House",
    address: "New Jail Road Karond",
    country: "India",
    city: "Bhopal",
    area: 420,
    price: 480,
    description:
      "A peaceful retreat with modern amenities and beautiful sunrise views.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Sanjeev Nagar ",
    image: img4,
    category: "Coloney",
    address: "Sanjeev Nagar Bhopal ",
    country: "India",
    city: "Bhopal",
    area: 550,
    price: 800,
    description:
      "An elegant urban property with sophisticated design and ample space.",
    facilities: {
      bedrooms: 5,
      bathrooms: 4,
      parkings: 3,
    },
  },
  {
    title: "Elixer Garden",
    image: img1,
    category: "Bunglow",
    address: "New Jail Road Bhopal",
    country: "India",
    city: "Bhopal",
    area: 470,
    price: 700,
    description:
      "A charming rustic villa with modern amenities and scenic views.",
    facilities: {
      bedrooms: 3,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Garden Grove Oasis Retreat Haven",
    image: img3,
    category: "Penthouse",
    address: "Rua Visconde de Pirajá 305",
    country: "Brazil",
    city: "Rio de Janeiro",
    area: 520,
    price: 680,
    description:
      "A luxurious penthouse with a garden grove and breathtaking views.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Mountain Majesty Tranquility Haven",
    image: img2,
    category: "Home",
    address: "Bahnhofstrasse 88",
    country: "Switzerland",
    city: "Zurich",
    area: 480,
    price: 750,
    description:
      "A tranquil home with majestic mountain views and modern amenities.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Lakefront Lodge Haven Haven",
    image: img5,
    category: "Apartment",
    address: "Long Street 123",
    country: "South Africa",
    city: "Cape Town",
    area: 430,
    price: 500,
    description:
      "A cozy lakefront apartment with scenic views and modern amenities.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Serenity Shores Bliss Haven",
    image: img4,
    category: "Villa",
    address: "Sukhumvit Road 42",
    country: "Thailand",
    city: "Bangkok",
    area: 460,
    price: 520,
    description:
      "A serene villa with blissful surroundings and modern amenities.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
];

// properties data

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Latest Items",
      "Hot Offers",
      "Popular residencies",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "+91 761010788" },
    { label: "Email Address", value: "bhopalpropertyking@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [{ icon: <FaInstagram />, id: "instagram" }],
};

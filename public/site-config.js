// ╔══════════════════════════════════════════════════════════════╗
// ║           SMASHBOYS - SITE CONFIGURATION FILE               ║
// ║                                                              ║
// ║  Edit this file to change your website content.              ║
// ║  Just change the values inside the quotes "..." and save.    ║
// ║  Then refresh your website to see the changes!               ║
// ║                                                              ║
// ║  DO NOT change anything before the colon (:) on each line.   ║
// ║  DO NOT remove any commas at the end of lines.               ║
// ╚══════════════════════════════════════════════════════════════╝

window.SITE_CONFIG = {

  // ═══════════════════════════════════════
  //  RESTAURANT INFO
  // ═══════════════════════════════════════
  restaurantName: "SmashBoys",
  footerText: "© SmashBoys Kitchen. All rights reserved.",

  // ═══════════════════════════════════════
  //  PHONE NUMBER
  //  - phone: What people see on the website
  //  - phoneLink: The actual number to dial (no spaces, use country code)
  // ═══════════════════════════════════════
  phone: "(902) 931-0253",
  phoneLink: "+19029310253",

  // ═══════════════════════════════════════
  //  EMAIL
  // ═══════════════════════════════════════
  email: "admin@smashboys.ca",

  // ═══════════════════════════════════════
  //  LOCATION / ADDRESS
  // ═══════════════════════════════════════
  addressLine1: "370 Main St, Chisholm Park",
  addressLine2: "Antigonish, Nova Scotia",

  // ═══════════════════════════════════════
  //  HOURS OF OPERATION
  // ═══════════════════════════════════════
  hoursLine1: "Mon–Thu: 11am–3:30pm and 4:30pm-8:00pm",
  hoursLine2: "Fri-Sat: 11am–3pm and 4:30pm-11:00pm",
  hoursLine3: "Sun: Closed",

  // ═══════════════════════════════════════
  //  DELIVERY SERVICE
  //  - deliveryName: Name shown on the button
  //  - deliveryLink: URL to open when clicked
  //      Leave deliveryLink empty "" for Coming Soon
  //  - deliveryComingSoon: set to true to show "Coming Soon!" popup
  //      set to false when you have a real link ready
  // ═══════════════════════════════════════
  deliveryName: "Nish Eats",
  deliveryLink: "",
  deliveryComingSoon: true,

  // ═══════════════════════════════════════
  //  SOCIAL MEDIA LINKS
  //  Add your social media URLs below.
  //  Leave empty "" to hide the link.
  // ═══════════════════════════════════════
  instagramUrl: "https://www.instagram.com/smashboys.ca?igsh=MXdyN3V2azBhcXN1Ng%3D%3D&utm_source=qr",
  facebookUrl: "",

  // ═══════════════════════════════════════
  //  HERO SECTION (Top landing area)
  //  - heroTagline: The line below the big title
  //  - heroSubtitle: The smaller text below the tagline
  //  - heroBadge: The small badge text (e.g. "EST. 2026")
  // ═══════════════════════════════════════
  heroTagline: "SMASHED TO ORDER",
  heroSubtitle: "Hot Griddle • Crispy Edges • No Shortcuts",
  heroBadge: "EST. 2026",

  // ═══════════════════════════════════════
  //  STATS SECTION (below hero)
  //  - stat1Label / stat1Value: Left stat (e.g. "STFX")
  //  - stat2Label / stat2Value: Right stat (e.g. "4.9")
  // ═══════════════════════════════════════
  stat1Value: "STFX",
  stat1Label: "GRADUATE FOUNDED",
  stat2Value: "4.9",
  stat2Label: "STAR RATING",

  // ═══════════════════════════════════════
  //  PARTNERS / VENDORS SECTION
  //  - partnersHeading: The big heading (e.g. "OUR PARTNERS")
  //  - partnersSubheading: Yellow text above the heading
  //  - partnersBanner: The yellow banner text at bottom
  // ═══════════════════════════════════════
  partnersSubheading: "Local Sources",
  partnersHeading: "OUR PARTNERS",
  partnersBanner: "100% Local Beef  •  Never Frozen  •  Always Fresh",

  // ═══════════════════════════════════════
  //  MENU SECTION
  //  - menuHeading: The heading above the menu cards
  //  - menuSubheading: Yellow text above the heading
  // ═══════════════════════════════════════
  menuSubheading: "The Menu",
  menuHeading: "Burgers, Fries & Shakes",

  // ═══════════════════════════════════════
  //  ORDER SECTION
  //  - orderHeading: The main heading
  //  - orderSubheading: Smaller text above it
  //  - orderDescription: The description text
  // ═══════════════════════════════════════
  orderSubheading: "ORDER NOW",
  orderHeading: "GET YOUR",
  orderHeadingGold: "SMASH ON",
  orderDescription: "We're fast. 10–15 mins during lunch rush. Order ahead and skip the line.",

  // ═══════════════════════════════════════
  //  FULL MENU IMAGE
  //  This is the image shown when someone clicks "View Full Menu"
  //  Put your menu image file in the public folder and type its name here
  // ═══════════════════════════════════════
  fullMenuImage: "/menu-full.png",

  // ═══════════════════════════════════════
  //  MENU ITEMS
  //
  //  You can ADD as many items as you want or DELETE any item.
  //  The website will automatically adjust the layout!
  //
  //  Each item has:
  //    name: "Item Name",
  //    price: 12,              (number, no quotes, no dollar sign)
  //    description: "...",
  //    image: "/menu-classic.jpg",  (put image file in public folder)
  //    tags: ["Bestseller"],   (optional labels, use [] for no tag)
  //
  //  To ADD a new item: copy one of the blocks below and paste it
  //  To REMOVE an item: delete the entire { ... }, block
  //  To CHANGE order: just move the blocks up or down
  // ═══════════════════════════════════════
  menuItems: [
    // ----- BURGERS (6) -----
    {
      name: "Smash Boys Classic",
      price: 14,
      description: "Double patty, 2x American cheese, onion, lettuce, tomato,, house sauce, toasted brioche.",
      image: "/menu-classic.jpg",
      tags: ["Bestseller"],
    },
    {
      name: "Bacon Jam",
      price: 15,
      description: "Maple Bacon Jam, pickles, House Sauce,Double patty, 2x American cheese, Toasted Brioche.",
      image: "/menu-bacon.jpg",
      tags: ["Popular"],
    },
    {
      name: "Chicken Tikka",
      price: 15,
      description: "Tikka glazed Crispy Chicken Patty, Indian Style Salsa, Slaw, Wasabi Mayo Toasted Brioche.",
      image: "/menu-spicy.jpg",
      tags: ["Spicy"],
    },
    {
      name: "Korean CHicken",
      price: 14,
      description: "Korean sauce glazed Crispy chicken patty, Korean Slaw, Togarashi Mayo, Toasted Brioche.",
      image: "/menu-truffle.jpg",
      tags: ["Premium"],
    },
    {
      name: "Bacon Loaded Fries",
      price: 12,
      description: "Maple Bacon Bits, Ketchup, Sour Cream on Crispy fries Garnished with green onions and parsley",
      image: "/menu-classic.jpg",
      tags: ["Favorite Snack"],
    },
    {
      name: "Animal Style Loaded Fries",
      price: 13,
      description: "caramelised onions, seasoned, ground beef, Smash Boys Sauce on Crispy fries Garnished with green onions and parsley",
      image: "/menu-bacon.jpg",
      tags: ["Most Loved"],
    },

    // // ----- LOADED FRIES (4) -----
    // {
    //   name: "Loaded Fries",
    //   price: 8,
    //   description: "Cheese sauce, bacon bits, scallions, house seasoning.",
    //   image: "/menu-fries.jpg",
    //   tags: ["Fan Favorite"],
    // },
    // {
    //   name: "Truffle Fries",
    //   price: 10,
    //   description: "Truffle oil, parmesan, fresh herbs, garlic aioli.",
    //   image: "/menu-fries.jpg",
    //   tags: ["Premium"],
    // },
    // {
    //   name: "Spicy Fries",
    //   price: 9,
    //   description: "Hot honey drizzle, chili flakes, ranch dipping sauce.",
    //   image: "/menu-fries.jpg",
    //   tags: ["Spicy"],
    // },
    // {
    //   name: "Thick Shake",
    //   price: 7,
    //   description: "Vanilla bean, malt powder, whipped cream, cherry on top.",
    //   image: "/menu-shake.jpg",
    //   tags: [],
    // },
  ],

  // ═══════════════════════════════════════
  //  VENDORS / PARTNERS
  //
  //  These are shown in the "Local Sources" / Partners section.
  //  You can ADD, EDIT, or DELETE vendors just like menu items.
  //  The website will automatically adjust!
  //
  //  Each vendor has:
  //    name: "Vendor Name",
  //    description: "What they supply or a short bio",
  //    image: "/story-farm.jpg",   (put image file in public folder)
  //    location: "City, State",    (optional, shown as subtitle)
  //
  //  To ADD: copy a block and paste it
  //  To REMOVE: delete the entire { ... }, block
  // ═══════════════════════════════════════
  vendors: [
    {
      name: "Vacheresse Meats",
      description: "grass-fed beef locally sourced. No hormones, no antibiotics.",
      image: "/story-farm.jpg",
      location: "Antigonish, Nova Scotia",
    },
    {
      name: "Knoydart Farms",
      description: "Premium Dairy products local family owned farm",
      image: "/story-butcher.jpg",
      location: "Antigonish, Nova Scotia",
    },
  ],
};

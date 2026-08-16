// Single source of truth for store facts. Edit here, every page updates.
export const site = {
  name: "Safari Supermarket",
  legalName: "Safari Supermarket LLC",
  tagline: "Local grocer and specialty imports in Grand Rapids, MI",
  description:
    "Family-run neighborhood grocer on Burton St SE. Everyday staples plus African and international specialty imports. EBT/SNAP accepted.",
  url: "https://safarism.com",
  address: {
    street: "1324 Burton St SE",
    city: "Grand Rapids",
    state: "MI",
    zip: "49507",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1324+Burton+St+SE+Grand+Rapids+MI+49507",
  phone: "801-915-3680",
  phoneHref: "tel:+18019153680",
  email: "uantoinette@gmail.com",
  hours: [
    { days: "Monday – Friday", time: "9:30 am – 9:00 pm" },
    { days: "Saturday – Sunday", time: "10:00 am – 9:00 pm" },
  ],
  // Formspree endpoint. Submissions carry _subject "Safari Supermarket website"
  // so they're distinguishable in the inbox. Swap this ID once a dedicated
  // Safari form (notifying uantoinette@gmail.com) exists.
  formspreeEndpoint: "https://formspree.io/f/xpqovwre",
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

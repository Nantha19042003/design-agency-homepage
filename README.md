# Webion Technology - Design Agency Homepage

A simple, clean homepage for a fictional design agency called **Webion Technology**, built for the Next.js Developer Internship task.

## Tech Stack

- **Next.js 14** (App Router)
- **React** (functional components + hooks)
- **Bootstrap 5** for layout and styling (grid, cards, forms, buttons)
- **Bootstrap Icons** for the service icons
- Plain CSS (`app/globals.css`) for a few custom touches like the hero gradient and hover effects

 
## Folder Structure

```
design-agency-homepage/
├── app/
│   ├── layout.js       -> root layout, loads Bootstrap CSS + page metadata
│   ├── page.js          -> homepage, just imports and stacks the sections
│   └── globals.css      -> custom colors, fonts, hover effects
├── components/
│   ├── Navbar.js         -> top navigation bar
│   ├── Hero.js           -> hero section (agency name, tagline, CTA)
│   ├── Services.js       -> 4 service cards
│   ├── Portfolio.js      -> project grid with hover overlay
│   ├── Contact.js        -> contact form with basic validation
│   └── Footer.js
├── public/
├── package.json
├── next.config.js
└── README.md
```

## Notes

- The agency name ("Webion Technology"), copy, and project titles are made up for this task and can be replaced with real content.
- Portfolio images use [picsum.photos](https://picsum.photos) as placeholders.
- The contact form does not send real emails - it validates the fields on the client and shows a success message. To make it functional, connect it to an API route (`app/api/contact/route.js`) or a service like Formspree.
- Kept animations minimal on purpose (a small card lift on hover, an image zoom on the portfolio grid) instead of heavy scroll animations, to keep things fast and simple.
- Used a fixed navbar with Bootstrap's built-in collapse behavior for mobile, no extra JS libraries needed.

## Designed by : NANTHA KUMAR R



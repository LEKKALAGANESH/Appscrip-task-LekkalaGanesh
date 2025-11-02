# Appscrip Task - Product Listing Page

A responsive e-commerce product listing page built with React.js, featuring filtering, sorting, and a clean UI. This project demonstrates modern web development practices, including SEO optimization, responsive design, and integration with a mock API.

## 🚀 Live Demo

[View Live Demo on Vercel](https://your-netlify-url.netlify.app) (Replace with actual URL after deployment)

## 📋 Features

- **Product Listing**: Displays products fetched from Fake Store API
- **Filtering**: Sidebar filters for categories, price, etc. (toggleable)
- **Sorting**: Sort products by recommended, newest, popular, price
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Proper meta tags, schema markup, alt texts
- **Clean UI**: Modern design with hover effects and animations
- **Wishlist Functionality**: Add/remove products from wishlist

## 🛠️ Technologies Used

- **Frontend Framework**: React.js (Create React App)
- **Styling**: CSS3 with responsive design
- **API Integration**: Axios for fetching data from Fake Store API
- **Icons & Images**: Custom assets with SEO-friendly names
- **Deployment**: Netlify (recommended)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LEKKALAGANESH/Appscrip-task-LekkalaGanesh.git
   cd Appscrip-task-yourname
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Responsive Design

The page is fully responsive:
- **Desktop**: Full layout with sidebar filters
- **Tablet**: Adjusted grid and hidden sidebar on small screens
- **Mobile**: Single column grid, accordion footer

## 🔍 SEO Optimization

- **Page Title**: "Product Listing Page"
- **Meta Description**: "Browse our collection of products with filters and search."
- **H1 & H2 Tags**: Used appropriately for headings
- **Schema Markup**: JSON-LD for product list
- **Image Alt Texts**: Descriptive alt attributes for all images
- **SEO-Friendly Image Names**: Assets named descriptively

## 🚀 Deployment

Deploy to Vercel:

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Set up continuous deployment from GitHub if desired

## 📊 Evaluation Criteria

### Code Structure
- Modular components in `src/components/`
- Clean separation of concerns
- Reusable CSS classes

### Naming Convention
- PascalCase for React components
- camelCase for variables and functions
- Descriptive class names in CSS

### Minimal Dependencies
- Core dependencies: React, Axios
- No unnecessary libraries

### Screen Size Fit
- Responsive breakpoints at 768px and 480px
- Flexbox and Grid layouts

### Min DOM Size
- Efficient rendering with React
- Optimized images

## 📂 Project Structure

```
src/
├── components/
│   ├── Filters.js
│   ├── Footer.js
│   ├── Header.js
│   └── ProductCard.js
├── assets/
│   ├── icons/
├── App.js
├── App.css
└── index.js
public/
├── index.html
└── assets/
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

## 📄 License

This project is for demonstration purposes. Feel free to use as reference.

## 📞 Contact

For questions or feedback, please reach out.

---

**Note**: This project uses Client-Side Rendering (CSR) with React. For Server-Side Rendering (SSR), consider migrating to Next.js.

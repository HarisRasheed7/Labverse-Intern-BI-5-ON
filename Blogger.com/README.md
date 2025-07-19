# Blogger Landing Page Clone

A modern, responsive recreation of Google's Blogger.com landing page featuring smooth scrolling animations, dynamic navigation, and multiple language support.

## 🎯 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling** - Animated scroll transitions between sections
- **Dynamic Navigation** - Navbar changes style as user scrolls through sections
- **Multi-language Support** - Language selector with 50+ languages
- **Modern UI/UX** - Clean design with gradient backgrounds and hover effects
- **Fixed Scroll Button** - Quick navigation helper with bounce animation

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox, gradients, and animations
- **JavaScript (Vanilla)** - Smooth scrolling and dynamic UI interactions
- **Bootstrap 5.3.7** - Responsive grid system and components

## 📱 Sections Overview

The landing page consists of 7 main sections:

1. **Hero Section** - "Publish your passions, your way"
2. **Design Section** - Choose perfect templates
3. **Domain Section** - Get custom domains
4. **Monetization** - Earn money with Google AdSense
5. **Analytics** - Know your audience with built-in analytics
6. **Storage** - Hang onto memories with Google storage
7. **Community** - Join millions of bloggers

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional, for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blogger-landing-page.git
   ```

2. **Navigate to project directory**
   ```bash
   cd blogger-landing-page
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

   Or serve locally:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 📁 Project Structure

```
blogger-landing-page/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── logo.png           # Site logo
├── favicon.ico        # Favicon
├── section1.png       # Hero section background
├── section2.jpg       # Design section background
├── section3.jpg       # Domain section background
├── section4.webp      # Monetization section background
├── section5.png       # Analytics section background
├── section7.png       # Community section background
└── README.md          # Project documentation
```

### Dynamic Navbar
- Transparent navbar becomes solid white when scrolling
- "CREATE YOUR BLOG" button appears/disappears based on scroll position
- Smooth transitions with CSS transforms

### Scroll-to-Next Button
- Fixed position button with bounce animation
- Only visible in the first section
- Smooth scroll to next section on click

## 🎨 CSS Highlights

### Responsive Breakpoints
- **Mobile**: ≤ 480px
- **Tablet**: ≤ 768px
- **Desktop**: > 768px

### Animation Features
- CSS keyframe animations for bounce effect
- Smooth transitions on hover states
- Backdrop blur effects for modern glass-morphism look

## 🌐 Multi-language Support

The footer includes a language selector supporting 50+ languages including:
- English, Spanish, French, German
- Arabic, Chinese, Japanese, Korean
- Hindi, Bengali, Urdu, and many more

## 📱 Responsive Design

The site is fully responsive with:
- Flexible navigation that collapses on mobile
- Scalable typography and spacing
- Touch-friendly button sizes
- Optimized images for different screen sizes


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

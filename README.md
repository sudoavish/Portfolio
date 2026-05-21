# Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing projects, skills, and experience with smooth animations and parallax effects.

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for engaging UI interactions
- **Parallax Effects** - Dynamic background parallax scrolling
- **Performance Optimized** - Built with Vite for fast development and production builds
- **TypeScript** - Full type safety across the codebase
- **SPA Routing** - Smooth section navigation with react-scroll
- **Icon Library** - Lucide React and React Icons for scalable icons

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Build Tool:** Vite
- **Animation:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Scrolling:** React Scroll
- **Package Manager:** pnpm
- **Deployment:** Vercel

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.7.1+) or npm/yarn

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/sudoavish/Portfolio.git
cd Portfolio

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm run dev
```

The application will be available at `https://avishkamra.vercel.app`

### Build

```bash
# Build for production
pnpm run build

# Preview production build locally
pnpm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer, Sidebar)
│   ├── sections/        # Page sections (Hero, Experience, Projects, Skills)
│   └── ui/              # Reusable UI components (Buttons, Animations)
├── config/
│   └── portfolio.json   # Portfolio configuration and content
├── context/
│   └── PortfolioConfigContext.tsx  # Global config context
├── hooks/
│   └── usePortfolioConfig.tsx       # Custom hook for portfolio config
├── types/
│   └── config.ts        # TypeScript type definitions
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Global styles
```

## ⚙️ Configuration

Edit `src/config/portfolio.json` to customize:
- Personal information
- Project details
- Skills and experience
- Links and social media

## 📦 Building & Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel automatically builds and deploys on every push
4. Your site is live at `your-project.vercel.app`

**Note:** `vercel.json` is pre-configured with SPA routing rules.

### Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
4. Deploy and your site goes live

## 📝 Environment Variables

If needed, create a `.env.local` file (not committed to git):

```env
VITE_API_URL=your_api_url_here
```

## 🎨 Customization

### Tailwind CSS
Edit `tailwind.config.js` to customize colors, fonts, and design tokens.

### PostCSS
Modify `postcss.config.js` for additional CSS processing.

### Vite
Update `vite.config.ts` for build options and plugin configuration.

## 🔒 Security

- ✅ No secrets or API keys committed to version control
- ✅ Dependencies regularly updated
- ✅ `.gitignore` properly configured to exclude sensitive files

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Contact

For inquiries or opportunities, please reach out through:
- Email: your-email@example.com
- GitHub: [@yourusername](https://github.com/sudoavish)
- LinkedIn: [your-linkedin-profile](https://www.linkedin.com/in/avishkamra/)

---

**Built with ❤️ using React + Vite**

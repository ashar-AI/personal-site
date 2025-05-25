# Personal Portfolio Website

A modern, performant personal portfolio website built with Astro, featuring a clean design and smooth user experience. This project is based on the original work by [Jestsee](https://github.com/jestsee/jestsee.com).

https://github.com/user-attachments/assets/a4e8c8a1-b901-477f-9768-f2acefa5de35

## 📚 Tech Stack

- ⚡️ [Astro](https://astro.build/) - The web framework for content-driven websites
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 📝 [MDX](https://mdxjs.com/) - Markdown with JSX components
- 🎨 [Shadcn UI](https://ui.shadcn.com/) - Beautifully designed components
- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- 🚀 [Vercel](https://vercel.com/) - Cloud platform for static sites and Serverless Functions

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm 8.0.0 or later

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ashar-AI/personal-site.git
   cd personal-site
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Copy the environment variables
   ```bash
   cp .env.example .env
   ```

4. Start the development server
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## 🛠 Configuration

Edit the configuration files in `src/config/` to customize the site to your needs. The main configuration files are:

- `site.ts` - Site metadata and SEO settings
- `navigation.ts` - Navigation menu items
- `integrations.ts` - Third-party integrations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original design and development by [Jestsee](https://github.com/jestsee/jestsee.com)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Deployed with [Vercel](https://vercel.com/)

## 🌐 Preview the Built Project Locally

To serve the built project locally, run the following command:

```sh
pnpm preview
```

This will start a local server to preview the production build. It will be available at http://localhost:3000. You can adjust the local URL in the `package.json` file if needed.

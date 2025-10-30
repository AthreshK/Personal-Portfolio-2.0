# Personal Portfolio Website

A personal portfolio website to showcase my projects, skills, and experience.

**Live Site:** [athreshkiran.com](https://athreshkiran.com)

## About This Project

This repository contains the source code for my personal portfolio website. It's a modern, single-page application designed as a template for an application developer, providing a comprehensive overview of my professional background, technical abilities, and the work I'm passionate about.

Feel free to fork this repository to use as a template for your own portfolio. The site is fully responsive, built with a performance first mindset, and includes a light/dark mode theme switcher.

## Tech Stack

This project is built with a modern frontend stack:

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd your_repository
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Customization

This portfolio is designed to be easily customized.

1.  **Update Content:** The primary data for the site (e.g., projects, experience, skills) is centralized in `lib/data.ts`. You can modify the content of this file to populate the site with your own information.
2.  **Add Assets:** Place your static assets (headshot, resume PDF, project logos) in the `public/` directory. You can then reference them directly in the `lib/data.ts` file (e.g., `"/my-headshot.png"`).
3.  **Tweak Components:** Component-level customizations and styling can be made by editing the respective files in the `components/` directory.

## Acknowledgments

This project is inspired by and adapted from ByteGrad's template. You can find the original repository here: [ByteGrad Portfolio](https://github.com/ByteGrad/portfolio-website)

## License

Distributed under the MIT License.
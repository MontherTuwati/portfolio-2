import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'School Student Info System',
    description:
      'School SIS is a comprehensive Laravel-based Student Information System designed to manage all aspects of educational institution operations. It provides a complete solution for managing students, teachers, departments, courses, events, grades, attendance, library, financial tracking, and administrative tasks with role-based access control and comprehensive reporting features.',
    techStack: [
      'Laravel 11',
      'PHP 8.3+',
      'MySQL',
      'Bootstrap 5',
      'JavaScript',
      'Chart.js',
      'FontAwesome',
    ],
    date: '2023',
    images: [
      {
        src: '/project-imgs/school-sis/school-sis-thumbnail.png',
        alt: 'School Student Info System thumbnail',
      },
      {
        src: '/project-imgs/school-sis/school-sis.jpg',
        alt: 'School Student Info System',
      },
      {
        src: '/project-imgs/school-sis/school-sis1.jpg',
        alt: 'School Student Info System',
      },
      {
        src: '/project-imgs/school-sis/school-sis2.jpg',
        alt: 'School Student Info System',
      },
      {
        src: '/project-imgs/school-sis/school-sis3.jpg',
        alt: 'School Student Info System',
      },
      {
        src: '/project-imgs/school-sis/school-sis4.jpg',
        alt: 'School Student Info System',
      },
      {
        src: '/project-imgs/school-sis/school-sis5.jpg',
        alt: 'School Student Info System',
      },
      {
        src: '/project-imgs/school-sis/school-sis6.jpg',
        alt: 'School Student Info System',
      },
    ],
  },
  {
    title: 'AntiScamurai',
    description:
      "AntiScamurai is a Discord bot that prevents scam bots from raiding servers by implementing advanced quarantine, verification, and moderation systems with a samurai theme. Features include automatic quarantine for new members, smart account detection, global reputation tracking, raid prevention, channel-based verification with advanced captcha systems, moderation tools, ticket system, and comprehensive statistics tracking.",
    techStack: [
      'Python',
      'TypeScript',
      'Discord.js',
      'Prisma',
      'PostgreSQL',
      'Node.js',
    ],
    date: '2025',
    images: [
      {
        src: '/project-imgs/antiscamurai/antiscamurai-thumbnail.png',
        alt: 'AntiScamurai thumbnail',
      },
      {
        src: '/project-imgs/antiscamurai/anticcamurai.jpg',
        alt: 'AntiScamurai',
      },
      {
        src: '/project-imgs/antiscamurai/antiscamurai-1.jpg',
        alt: 'AntiScamurai',
      },
      {
        src: '/project-imgs/antiscamurai/antiscamurai-2.jpg',
        alt: 'AntiScamurai',
      },
    ],
  },
  {
    title: 'CatchaBite',
    description:
      'CatchaBite is a comprehensive multi-vendor food delivery platform with separate applications for customers, vendors, riders, and administrators. Features include real-time order tracking with live rider location updates, multi-language support, GraphQL API with subscriptions, payment integration (Stripe, PayPal), push notifications, chat system for rider communication, restaurant management, inventory control, order history, reviews and ratings, zone-based delivery management, and PWA support for web app.',
    techStack: [
      'Next.js 14',
      'React Native',
      'Expo',
      'GraphQL',
      'Apollo Server',
      'MongoDB',
      'Node.js',
      'Express',
      'TypeScript',
      'TailwindCSS',
      'Firebase',
      'Stripe',
      'PayPal',
      'Socket.io',
      'Bull Queue',
      'Redis',
      'Docker',
      'Railway',
    ],
    date: '2023',
    images: [
      {
        src: '/project-imgs/catchabite/catchabite-thumbail.png',
        alt: 'CatchaBite thumbnail',
      },
      {
        src: '/project-imgs/catchabite/catchabite-vendor.png',
        alt: 'CatchaBite vendor interface',
      },
      {
        src: '/project-imgs/catchabite/catchabite-web.png',
        alt: 'CatchaBite web interface',
      },
      {
        src: '/project-imgs/catchabite/cx-app.png',
        alt: 'CatchaBite app',
      },
      {
        src: '/project-imgs/catchabite/cx-app-2.png',
        alt: 'CatchaBite app 2',
      },
    ],
  },
  {
    title: 'Marketplace SaaS',
    description:
      'Ticketr is a real-time event ticketing marketplace platform built with Next.js 15, Convex, Clerk, and Stripe Connect. Features include real-time ticket availability tracking, smart queuing system with position updates, time-limited ticket offers, secure payment processing with Stripe Connect for direct organizer payments, digital tickets with QR codes, automatic refunds for cancelled events, real-time sales monitoring, automated queue management, event analytics, and bulk refund processing. Built as a SaaS platform enabling event organizers to sell tickets directly to attendees.',
    techStack: [
      'Next.js 15',
      'Convex',
      'Clerk',
      'Stripe Connect',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
      'React Hook Form',
      'Zod',
    ],
    date: '2023',
    images: [
      {
        src: '/project-imgs/image-coming-soon-placeholder.png',
        alt: 'Marketplace SaaS - Coming Soon',
      },
    ],
  },
  {
    title: 'Finance Tracker',
    description:
      'Finance Tracker is a desktop application for tracking personal finances built with Python and Tkinter. Features include dashboard overview with monthly progress and expense trends, category-wise expense visualization with color-coded cards, complete transaction history with search functionality, easy transaction entry form, upcoming transactions tracking for planned future expenses, interactive charts showing spending patterns over time, and local SQLite database storage for data privacy.',
    techStack: [
      'Python',
      'Tkinter',
      'SQLite',
      'Matplotlib',
    ],
    date: '2022',
    images: [
      {
        src: '/project-imgs/image-coming-soon-placeholder.png',
        alt: 'Finance Tracker - Coming Soon',
      },
    ],
  },
  {
    title: 'Store POS System',
    description:
      "StorePOS is a sleek, offline-first desktop Point of Sale application built with Electron and Node.js. Designed for small to medium-sized retail environments, it offers essential sales functionality including multi-terminal networking, receipt printing with customizable layouts, barcode scanning, product and category management, inventory control, open tabs, customer database, transaction history with advanced filters, and staff accounts with permission levels.",
    techStack: [
      'Electron',
      'Node.js',
      'Express',
      'SQLite',
      'Socket.io',
      'jQuery',
      'Bootstrap',
      'JavaScript',
    ],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/MontherTuwati/Store-POS',
      },
    ],
    images: [
      {
        src: '/project-imgs/pos/pos-thumbnail.png',
        alt: 'Store POS System thumbnail',
      },
      {
        src: '/project-imgs/pos/pos-2.jpg',
        alt: 'Store POS System',
      },
      {
        src: '/project-imgs/pos/pos-3.jpg',
        alt: 'Store POS System',
      },
    ],
  },
  {
    title: "Joe's Auto Body",
    description:
      "Joe's Auto Body is a comprehensive automotive repair website featuring a full-service booking system with Google Calendar integration, car marketplace for vehicle listings, customer reviews system, service showcase pages, and contact management. Built with Next.js frontend and Strapi headless CMS backend, it includes appointment booking with date/time selection, car inventory management, FAQ sections, and responsive design with smooth animations.",
    techStack: [
      'Next.js',
      'React',
      'Strapi',
      'TailwindCSS',
      'shadcn-ui',
      'Vercel',
      'TypeScript',
      'PostgreSQL',
      'Node.js',
      'React Hook Form',
      'Redis',
      'Framer Motion',
      'Google Cloud APIs'
    ],
    date: '2025',
    links: [
      {
        name: 'Website',
        url: 'https://joesautobody.ca/',
      },
    ],
    images: [
      {
        src: '/project-imgs/joesautobody/joes-auto-thumbnail.png',
        alt: "Joe's Auto Body thumbnail",
      },
      {
        src: '/project-imgs/joesautobody/jab.jpg',
        alt: "Joe's Auto Body",
      },
    ],
  },
  {
    title: 'Minishell',
    description:
      "Minishell is a project that aims to create a simple shell. It's a great introduction to process creation and management in C, offering fundamental Unix command-line functionality. This was a very challenging project, but I learned a lot from it.",
    techStack: ['C', 'Unix', 'Bash'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Michelle-42',
      },
    ],
    images: [
      {
        src: '/minishell1.png',
        alt: 'Minishell landing page',
      }
    ],
  },
  {
    title: 'YouBot',
    description:
      'YouBot is a Python Bot that Scrapes Videos from Pexels, adds a random song from a Songs Folder, then auto-uploads the videos to your YouTube Channel for continuous content generation.',
    techStack: ['Python', 'YouTube API', 'Pexels API'],
    date: '2022',
    links: [
      {
        name: "YouTube Video",
        url: "https://youtu.be/vp1v5mBG7rA "
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/YouBot',
      }
    ],
    images: [
      {
        src: '/project-imgs/projectTwo.png',
        alt: 'Youbot landing page',
      },
      {
        src: '/project-imgs/projectThree.png',
        alt: 'Youbot chatbot',
      },
    ],
  },
  {
    title: 'Old Portfolio',
    description:
      'My previous traditional portfolio built with vanilla HTML, CSS and JS with GSAP animations for a smooth and interactive user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    date: '2022',
    links: [
      {
        name: 'Website',
        url: 'https://toukoum.github.io/oldPortfolio/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/portfolio',
      },
    ],
    images: [
      {
        src: '/project-imgs/projectTwo.png',
        alt: 'Old Portfolio landing page',
      },
      {
        src: '/project-imgs/projectOne.png',
        alt: 'Old Portfolio projects',
      }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  // Get thumbnail (first image) and remaining images
  const thumbnail = projectData.images && projectData.images.length > 0 ? projectData.images[0] : null;
  const remainingImages = projectData.images && projectData.images.length > 1 ? projectData.images.slice(1) : [];

  return (
    <div className="space-y-10">
      {/* Thumbnail */}
      {thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {remainingImages.length > 0 && (
        <div className="space-y-6">
          {/* Check for CatchaBite cx-app images to display side by side */}
          {projectData.title === 'CatchaBite' && remainingImages.some(img => img.src.includes('cx-app')) ? (
            <>
              {/* Regular images before cx-app */}
              {remainingImages.filter(img => !img.src.includes('cx-app')).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform"
                  />
                </div>
              ))}
              {/* cx-app images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {remainingImages.filter(img => img.src.includes('cx-app')).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Default single column layout */
            <div className="grid grid-cols-1 gap-4">
              {remainingImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Main data export with updated content (sorted by date, newest first)
export const data = [
  {
    category: 'Client Project',
    title: "Joe's Auto Body",
    src: '/project-imgs/joesautobody/joes-auto-thumbnail.png',
    content: <ProjectContent project={{ title: "Joe's Auto Body" }} />,
  },
  {
    category: 'Startup Project',
    title: 'AntiScamurai',
    src: '/project-imgs/antiscamurai/antiscamurai-thumbnail.png',
    content: <ProjectContent project={{ title: 'AntiScamurai' }} />,
  },
  {
    category: 'Startup Project',
    title: 'CatchaBite',
    src: '/project-imgs/catchabite/catchabite-thumbail.png',
    content: <ProjectContent project={{ title: 'CatchaBite' }} />,
  },
  {
    category: 'Enterprise Application',
    title: 'School Student Info System',
    src: '/project-imgs/school-sis/school-sis-thumbnail.png',
    content: <ProjectContent project={{ title: 'School Student Info System' }} />,
  },
  {
    category: 'SaaS Platform',
    title: 'Marketplace SaaS',
    src: '/project-imgs/image-coming-soon-placeholder.png',
    content: <ProjectContent project={{ title: 'Marketplace SaaS' }} />,
  },
  {
    category: 'Business Tool',
    title: 'Store POS System',
    src: '/project-imgs/pos/pos-thumbnail.png',
    content: <ProjectContent project={{ title: 'Store POS System' }} />,
  },
  {
    category: 'Finance App',
    title: 'Finance Tracker',
    src: '/project-imgs/image-coming-soon-placeholder.png',
    content: <ProjectContent project={{ title: 'Finance Tracker' }} />,
  },
];
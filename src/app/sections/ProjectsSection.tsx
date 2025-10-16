"use client";
import Image from 'next/image';
import { data } from "@/components/projects/projectData";
import { useState, useRef, useContext, useEffect } from 'react';
import { CarouselContext } from "@/components/projects/projectCarousel";
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX } from '@tabler/icons-react';

export default function AllProjects() {
  return (
    <div className="mt-20">
      {/* Section Title */}
      <h1 className="text-9xl font-bold leading-none mb-16">
        <span className="text-white">MY</span>
        <br />
        <span className="text-gray-600">PROJECTS</span>
      </h1>

      {/* Projects List */}
      <div className="space-y-8">
        {data.map((project, index) => (
          <ProjectCard key={project.src} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') handleClose();
    }

    const html = document.documentElement;

    if (open) {
      document.body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      html.style.overflow = '';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      html.style.overflow = '';
    };
  }, [open]);

  // @ts-expect-error - useOutsideClick types not aligned
  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    if (onCardClose) onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[52] h-screen overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg overscroll-none"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl max-h-[calc(100vh-5rem)]
                         overflow-y-auto overscroll-contain rounded-3xl bg-white font-sans
                         dark:bg-neutral-900 touch-pan-y"
              onWheelCapture={(e) => e.stopPropagation()}
              onTouchMoveCapture={(e) => e.stopPropagation()}
            >
              <div className="sticky top-4 z-[52] flex justify-end px-8 pt-8 md:px-14 md:pt-8">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/90 shadow-md dark:bg-white/90"
                  onClick={handleClose}
                >
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
              </div>

              <div className="relative px-8 pt-2 pb-0 md:px-14">
                <div>
                  <p className="text-base font-medium text-black dark:text-white">
                    {project.category}
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">
                    {project.title}
                  </p>
                </div>
              </div>

              <div className="px-8 pt-8 pb-14 md:px-14">{project.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div 
        className="flex items-center space-x-12 group cursor-pointer"
        onClick={handleOpen}
      >
        {/* Project Thumbnail */}
        <div className="w-48 h-48 relative flex-shrink-0 rounded-2xl overflow-hidden">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="flex-grow">
          <h3 className="text-5xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 text-xl">{project.category}</p>
        </div>

        {/* Arrow Icon */}
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </>
  );
};
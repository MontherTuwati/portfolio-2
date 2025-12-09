"use client";
import Image from 'next/image';
import { data } from "@/components/projects/projectData";
import { useState, useRef, useContext, useEffect, useCallback } from 'react';
import { CarouselContext } from "@/components/projects/projectCarousel";
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX } from '@tabler/icons-react';

export default function AllProjects() {
  return (
    <div className="mt-20">
      {/* Section Title */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 md:mb-12 lg:mb-16">
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
  const cardRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleOpen = () => setOpen(true);

  const handleClose = useCallback(() => {
    setOpen(false);
    if (onCardClose) onCardClose(index);
  }, [onCardClose, index]);

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
  }, [open, handleClose]);

  // @ts-expect-error - useOutsideClick types not aligned
  useOutsideClick(containerRef, () => handleClose());

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[52] h-screen overflow-hidden">
            {/* Enhanced Backdrop Animation */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 h-full w-full bg-black/80 overscroll-none"
            />
            
            {/* Swoosh Modal Animation */}
            <motion.div
              initial={{ 
                opacity: 0,
                scale: 0.1,
                x: cardRef.current ? cardRef.current.getBoundingClientRect().left + (cardRef.current.getBoundingClientRect().width / 2) - (window.innerWidth / 2) : 0,
                y: cardRef.current ? cardRef.current.getBoundingClientRect().top + (cardRef.current.getBoundingClientRect().height / 2) - (window.innerHeight / 2) : 0,
                rotateX: 0,
                rotateY: 0
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotateX: 0,
                rotateY: 0
              }}
              exit={{ 
                opacity: 0,
                scale: 0.1,
                x: cardRef.current ? cardRef.current.getBoundingClientRect().left + (cardRef.current.getBoundingClientRect().width / 2) - (window.innerWidth / 2) : 0,
                y: cardRef.current ? cardRef.current.getBoundingClientRect().top + (cardRef.current.getBoundingClientRect().height / 2) - (window.innerHeight / 2) : 0,
                rotateX: 0,
                rotateY: 0
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94], // Custom swoosh easing
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl max-h-[calc(100vh-5rem)]
                         overflow-y-auto overscroll-contain rounded-3xl bg-white font-sans
                         dark:bg-neutral-900 touch-pan-y shadow-2xl
                         scrollbar-hide"
              onWheelCapture={(e) => e.stopPropagation()}
              onTouchMoveCapture={(e) => e.stopPropagation()}
            >
              {/* Animated Close Button */}
              <motion.div 
                className="sticky top-4 z-[52] flex justify-end px-8 pt-8 md:px-14 md:pt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <motion.button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/90 shadow-md dark:bg-white/90"
                  onClick={handleClose}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 107, 53, 0.9)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </motion.button>
              </motion.div>

              {/* Animated Header */}
              <motion.div 
                className="relative px-8 pt-2 pb-0 md:px-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div>
                  <motion.p 
                    className="text-base font-medium text-black dark:text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    {project.category}
                  </motion.p>
                  <motion.p 
                    className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    {project.title}
                  </motion.p>
                </div>
              </motion.div>

              {/* Animated Content */}
              <motion.div 
                className="px-8 pt-8 pb-14 md:px-14"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                {project.content}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div 
        ref={cardRef}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 group cursor-pointer"
        onClick={handleOpen}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {/* Project Thumbnail */}
        <div className="w-full sm:w-28 md:w-36 lg:w-40 xl:w-48 h-28 sm:h-28 md:h-36 lg:h-40 xl:h-48 relative flex-shrink-0 rounded-2xl overflow-hidden">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="flex-grow">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">{project.category}</p>
        </div>

        {/* Arrow Icon - Hidden on mobile, shown on desktop hover */}
        <div className="hidden sm:flex flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </motion.div>
    </>
  );
};
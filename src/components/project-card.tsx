"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types/project";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown, ChevronUp, Eye, Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Format date
  const formattedDate = new Date(project.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
    }
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div
          className="relative aspect-video overflow-hidden group cursor-pointer"
          onClick={openModal}
        >
          <Image
            src={project.imageSrc || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Eye className="h-8 w-8 text-white" />
            </div>
          </div>
          {project.status && (
            <div className="absolute top-2 right-2">
              <Badge
                variant={
                  project.status === "Beta"
                    ? "default"
                    : project.status === "In Progress"
                    ? "secondary"
                    : "outline"
                }
                className="opacity-90"
              >
                {project.status}
              </Badge>
            </div>
          )}
          {project.featured && (
            <div className="absolute top-2 left-2">
              <Badge
                variant="secondary"
                className="bg-primary text-primary-foreground"
              >
                Featured
              </Badge>
            </div>
          )}
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {formattedDate}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">
            {isExpanded
              ? project.description
              : project.shortDescription ||
                `${project.description.substring(0, 100)}...`}
          </p>
          <Button
            variant="link"
            size="sm"
            onClick={toggleExpand}
            className="mt-2 p-0 h-auto"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                {t("projects.showLess")} <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                {t("projects.showMore")}{" "}
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs"
                style={{
                  backgroundColor: tech.color ? `${tech.color}20` : undefined,
                  borderLeft: tech.color
                    ? `2px solid ${tech.color}`
                    : undefined,
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-4 border-t">
          {project.liveLink ? (
            <Button asChild variant="outline" size="sm">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="mr-2 h-4 w-4" />
                {t("projects.liveDemo")}
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled>
              <Eye className="mr-2 h-4 w-4" />
              {t("projects.noDemo")}
            </Button>
          )}
          {project.codeLink && project.codeLink !== "#" ? (
            <Button asChild variant="outline" size="sm">
              <Link
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {t("projects.viewCode")}
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled>
              <Github className="mr-2 h-4 w-4" />
              {t("projects.privateCode")}
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={`${project.title} - Preview`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {project.shortDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

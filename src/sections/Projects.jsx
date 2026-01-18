import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/portfolio";
import { X, ExternalLink } from "lucide-react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Showcasing custom Odoo modules, complex integrations, and business process optimizations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white dark:bg-gray-600 rounded-lg opacity-50" />
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`project-${projectsData.indexOf(selectedProject)}`}
                            className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                                {selectedProject.image ? (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-white/50 dark:bg-white/10 rounded-xl shadow-lg" />
                                    </div>
                                )}
                            </div>

                            <div className="p-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                        {selectedProject.category}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    {selectedProject.title}
                                </h2>

                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                    {selectedProject.description}
                                </p>

                                <div className="space-y-4">
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="px-6 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

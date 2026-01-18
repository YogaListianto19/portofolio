import { motion } from "framer-motion";
import { experienceData } from "../data/portfolio";
import { Calendar, Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-secondary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden lg:block" />
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 lg:hidden" />

                    <div className="space-y-12">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-secondary -translate-x-1/2 mt-1.5 z-10" />

                                {/* Content */}
                                <div className="flex-1 lg:w-1/2 ml-16 lg:ml-0">
                                    <div className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                                        }`}>
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {exp.year}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                                <Briefcase className="w-3.5 h-3.5" />
                                                {exp.company}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Space for Grid alignment */}
                                <div className="hidden lg:block lg:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

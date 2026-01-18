import { motion } from "framer-motion";
import { skillsData } from "../data/portfolio";

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical & Functional Skills</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A comprehensive toolset bridging the gap between complex backend logic and seamless business operations.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Technical Skills */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 pl-2 border-l-4 border-primary">
                            Technical Expertise
                        </h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        >
                            {skillsData.technical.map((skill, idx) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div key={idx} variants={item} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow text-center group">
                                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-primary h-1.5 rounded-full" style={{ width: `${skill.level}%` }} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Functional Skills */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 pl-2 border-l-4 border-accent">
                            Functional Knowledge
                        </h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        >
                            {skillsData.functional.map((skill, idx) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div key={idx} variants={item} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow text-center group">
                                        <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-accent h-1.5 rounded-full" style={{ width: `${skill.level}%` }} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

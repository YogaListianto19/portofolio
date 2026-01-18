import { motion } from "framer-motion";
import { CheckCircle2, Cpu } from "lucide-react";
import { aboutData } from "../data/portfolio";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 p-8 min-h-[400px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                            <Cpu className="w-48 h-48 text-primary/20 absolute -bottom-10 -right-10" />
                            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                {aboutData.stats.map((stat, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                                        <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            {aboutData.title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {aboutData.description}
                        </p>

                        <div className="space-y-4">
                            {aboutData.highlights.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

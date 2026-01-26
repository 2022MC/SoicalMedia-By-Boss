"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface SocialCardProps {
    href: string;
    title: string;
    subTitle?: string;
    icon: ReactNode;
    color?: string; // Optional custom accent color
    delay?: number;
}

export default function SocialCard({ href, title, subTitle, icon, color, delay = 0 }: SocialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
        >
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center p-4 glass-card rounded-xl w-full text-left overflow-hidden no-underline"
            >
                {/* Hover Gradient Overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ background: color || "white" }}
                />

                {/* Icon Container */}
                <div className="relative z-10 flex-shrink-0 mr-4 p-3 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                    <div className="w-6 h-6 text-white/90">
                        {icon}
                    </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex-grow min-w-0">
                    <h3 className="font-semibold text-lg text-white group-hover:text-blue-200 transition-colors truncate">
                        {title}
                    </h3>
                    {subTitle && (
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors truncate">
                            {subTitle}
                        </p>
                    )}
                </div>

                {/* Arrow Action */}
                <div className="relative z-10 ml-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white/70">
                    <ArrowUpRight size={20} />
                </div>
            </Link>
        </motion.div>
    );
}

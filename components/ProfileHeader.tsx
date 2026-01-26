"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileHeaderProps {
    name: string;
    bio: string;
    avatarUrl: string; // URL to the avatar image
}

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
    return (
        <div className="flex flex-col items-center mb-8 text-center pt-8 relative z-20">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative mb-4 group"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
                    {/* Using a placeholder for now, ideally this is a real image */}
                    <div className="w-full h-full rounded-full bg-black/50 overflow-hidden relative">
                        <Image
                            src={avatarUrl}
                            alt={name}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold mb-2 animate-text-shimmer"
            >
                {name}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-gray-400 max-w-md px-4 leading-relaxed"
            >
                {bio}
            </motion.p>
        </div>
    );
}

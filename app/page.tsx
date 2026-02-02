"use client";

import { Github, Instagram, Linkedin, Mail, Twitter, Youtube, Globe, Facebook, Heart } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
import ProfileHeader from "../components/ProfileHeader";
import SocialCard from "../components/SocialCard";

export default function Home() {
  const profile = {
    name: "BossFam",
    bio: "Base in Bangkok TH Editor, Beginner Colorist Service Short Film , Music Video , Content Online , Youtube , Tiktok/Reel.",
    avatar: "/Profile.jpg", // Profile image
  };

  const links = [
    {
      title: "Portfolio Website",
      subTitle: "ผลงานอยู่ในเว็บนี้",
      href: "https://bossfampff.vercel.app/projects",
      icon: <Globe />,
      color: "#3b82f6", // Blue
    },
    {
      title: "YouTube Channel",
      subTitle: "ผลงานอื่นๆ เกม",
      href: "https://www.youtube.com/@bgctch3698",
      icon: <Youtube />,
      color: "#ff0000", // Red
    },
    {
      title: "Instagram",
      subTitle: "Follow me on Instagram",
      href: "https://www.instagram.com/bossfam_editor/",
      icon: <Instagram />,
      color: "#d62976", // Pink/Purple
    },
    {
      title: "Facebook",
      subTitle: "Follow me on Facebook",
      href: "https://www.facebook.com/nathasit.opachalermpan.2025/",
      icon: <Facebook />,
      color: "#1877F2", // Facebook Blue
    },
    {
      title: "Support Me",
      subTitle: "โดเนทกดปุ่มนี้ไปยังหน้าโดเนท",
      href: "https://easydonate.app/BossFam", // Replace with your actual donation link
      icon: <Heart />,
      color: "#db2777", // Pink-600
    },
    {
      title: "Contact Me",
      subTitle: "Let's work together",
      href: "mailto:nathasit.mac@gmail.com",
      icon: <Mail />,
      color: "#10b981", // Emerald
    },
    {
      title: "Line",
      subTitle: "สำหรับติดต่องาน",
      href: "https://line.me/ti/p/~bosszaza1852", // Replace with your actual Line ID
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="lucide lucide-line"
        >
          <path d="M22 10.4C22 5.5 17.5 1.5 12 1.5S2 5.5 2 10.4c0 4.4 3.5 8.1 8.2 8.8l-2 4.1c-.2.5.5.9.9.5l4.8-4.4c.1 0 .2 0 .2.1 6.3 0 11.4-4 11.4-8.9z" />
        </svg>
      ),
      color: "#06C755", // Line Green
    },
  ];

  return (
    <main className="min-h-screen relative flex flex-col items-center py-16 px-4 overflow-hidden">
      <AnimatedBackground />

      <div className="w-full max-w-lg z-10">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatar}
        />

        <div className="space-y-4">
          {links.map((link, index) => (
            <SocialCard
              key={index}
              {...link}
              delay={index * 0.1}
            />
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© 2026 Boss Entertaiment. All rights reserved Update 30Jan2026.</p>
        </footer>
      </div>
    </main>
  );
}

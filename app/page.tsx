"use client";

import { Github, Instagram, Linkedin, Mail, Twitter, Youtube, Globe, Facebook } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
import ProfileHeader from "../components/ProfileHeader";
import SocialCard from "../components/SocialCard";

export default function Home() {
  const profile = {
    name: "BossFam",
    bio: "Base in Bangkok TH Editor, Beginner Colorist Service Short Film , Music Video , Content Online , Youtube , Tiktok/Reel.",
    avatar: "https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/591834656_2727646697568544_2737661402911912305_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHl79uEHD0cvSpC5D6Ko5zbM5R0j879GBgzlHSPzv0YGIsFiZpPl5daxGSQ67fLWL--ixKLXJXmdJVxmnrXfoSt&_nc_ohc=T9CAbKOPVYYQ7kNvwGFk23H&_nc_oc=AdmlFcskAfutTfGBq50ABQjmAY6RKyElnc-E-Mk-BJanUscKvnYKHkv6_S07gSxjzqU&_nc_zt=23&_nc_ht=scontent.fbkk7-3.fna&_nc_gid=XafhZKpiw2uvnCTZa85lgQ&oh=00_AfrgeZ3BaaOlzuR3lS3w2LFqLXe-RzLjbbPBS-B9a336dg&oe=697CBBD3", // High-quality placeholder
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
      title: "Contact Me",
      subTitle: "Let's work together",
      href: "mailto:nathasit.mac@gmail.com",
      icon: <Mail />,
      color: "#10b981", // Emerald
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
          <p>© 2026 Boss Entertaiment. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

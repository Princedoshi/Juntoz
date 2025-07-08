// app/data.ts
import { type ReactNode } from 'react';
import { TrendingUp, MessageCircle, Zap, Globe } from 'lucide-react';
import React from 'react';

// Interfaces
export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const services: Service[] = [
  {
    icon: React.createElement(TrendingUp, { className: "w-8 h-8" }),
    title: "SEO Optimization",
    description: "Boost your search rankings with our advanced SEO strategies and data-driven approach.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: React.createElement(MessageCircle, { className: "w-8 h-8" }),
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms with compelling content and strategic campaigns.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: React.createElement(Zap, { className: "w-8 h-8" }),
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns that convert visitors into customers.",
    gradient: "from-pink-500 to-red-600"
  },
  {
    icon: React.createElement(Globe, { className: "w-8 h-8" }),
    title: "Web Development",
    description: "Create stunning, responsive websites that captivate users and drive business growth.",
    gradient: "from-green-500 to-blue-600"
  }
  
];

export const stats: Stat[] = [
  { number: "500+", label: "Projects Completed" },
  { number: "150+", label: "Happy Clients" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
];

export const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Juntoz transformed our online presence completely. Our leads increased by 300% in just 6 months!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9436ce1?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoGreen",
      content: "The team's expertise in digital marketing is unmatched. They delivered results beyond our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Fashion Hub",
      content: "Professional, creative, and results-driven. Juntoz is our go-to partner for all marketing needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
];
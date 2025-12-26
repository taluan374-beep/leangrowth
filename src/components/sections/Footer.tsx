"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Sparkles,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Setup Hệ Thống (BUILD)", href: "#services" },
    { label: "Vận Hành Tinh Gọn (RUN)", href: "#services" },
    { label: "Tăng Trưởng Nóng (SCALE)", href: "#services" },
  ],
  resources: [
    { label: "Case Studies", href: "#proof" },
    { label: "Blog Marketing", href: "#" },
    { label: "Tài liệu miễn phí", href: "#" },
    { label: "Webinar", href: "#" },
  ],
  company: [
    { label: "Về chúng tôi", href: "#about" },
    { label: "Đội ngũ", href: "#" },
    { label: "Tuyển dụng", href: "#", badge: "Hiring" },
    { label: "Liên hệ", href: "#contact" },
  ],
};

const contactInfo = [
  {
    icon: Mail,
    label: "hello@leangrowth.vn",
    href: "mailto:hello@leangrowth.vn",
  },
  {
    icon: Phone,
    label: "0899 123 456",
    href: "tel:0899123456",
  },
  {
    icon: MapPin,
    label: "Quận 1, TP. Hồ Chí Minh",
    href: "#",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-electric to-blue-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold">
                Lean<span className="text-electric">Growth</span>
              </span>
            </Link>
            
            <p className="font-inter text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Đối tác marketing tinh gọn cho doanh nghiệp SME Việt Nam. 
              Chúng tôi giúp bạn cắt giảm lãng phí và tăng doanh thu thực tế.
            </p>

            {/* Contact Info */}
            <ul className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 font-inter text-sm text-white/60 hover:text-electric transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                      <item.icon className="w-4 h-4 text-electric" />
                    </div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 hover:bg-electric rounded-xl flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-6 text-white/90">
              Dịch vụ
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/60 hover:text-electric transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-6 text-white/90">
              Tài nguyên
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/60 hover:text-electric transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-6 text-white/90">
              Công ty
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/60 hover:text-electric transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="px-2 py-0.5 bg-electric/20 text-electric text-xs rounded-full">
                        {link.badge}
                      </span>
                    )}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-heading font-bold text-white mb-1">
                Nhận tips marketing hàng tuần
              </h4>
              <p className="font-inter text-sm text-white/60">
                Đăng ký để nhận các bài viết về marketing tinh gọn mới nhất
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-inter text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-electric transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-electric hover:bg-electric-light text-white font-inter font-semibold text-sm rounded-xl transition-colors"
              >
                Đăng ký
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-sm text-white/50 flex items-center gap-1">
            © {new Date().getFullYear()} LeanGrowth Agency. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> in Vietnam
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="font-inter text-xs text-white/50 hover:text-electric transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="#" className="font-inter text-xs text-white/50 hover:text-electric transition-colors">
              Điều khoản sử dụng
            </Link>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/5 hover:bg-electric rounded-xl flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

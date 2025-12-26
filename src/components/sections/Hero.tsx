"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap, Play } from "lucide-react";
import Link from "next/link";

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return { count, start: () => setHasStarted(true) };
}

// Floating particles component - SSR safe
function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`,
          }}
          animate={{
            y: [0, -100 - Math.random() * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient orbs
function GradientOrbs() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-electric/30 to-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-40 w-[600px] h-[600px] bg-gradient-to-l from-cyan-500/30 to-electric/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"
      />
    </>
  );
}

// Text reveal animation
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut" as const,
    },
  }),
};

export default function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  const stat1 = useCounter(847, 2500);
  const stat2 = useCounter(40, 2000);
  const stat3 = useCounter(3, 1500);

  useEffect(() => {
    const timer = setTimeout(() => {
      stat1.start();
      stat2.start();
      stat3.start();
    }, 800);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-slate-50" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Gradient Orbs */}
      <GradientOrbs />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale }} 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28"
      >
        <div className="text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-electric/20 shadow-lg shadow-electric/10 text-electric px-5 py-2.5 rounded-full text-sm font-inter font-semibold mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span>Đã giúp <span className="text-navy font-bold">{stat1.count}+</span> doanh nghiệp tăng trưởng</span>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden">
            <motion.h1
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-navy block mb-2">Mỗi tháng bạn đang</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden">
            <motion.div
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              className="relative inline-block"
            >
              <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                đốt bao nhiêu tiền
              </span>
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-500/30 via-orange-500/30 to-red-500/30 rounded-full origin-left"
              />
              {/* Sparkle effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.3 }}
                className="absolute -top-2 -right-2"
              >
                <span className="text-2xl">🔥</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="overflow-hidden mt-2">
            <motion.h1
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-navy">cho Marketing kém hiệu quả?</span>
            </motion.h1>
          </div>

          {/* Sub-headline with highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 md:mt-10"
          >
            <p className="font-inter text-xl md:text-2xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              <span className="font-bold text-electric">Lean Marketing</span> giúp bạn{" "}
              <span className="relative inline-block group">
                <span className="relative z-10 font-bold text-navy">cắt giảm {stat2.count}% chi phí</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-0 left-0 h-3 bg-yellow-300/60 -z-0 rounded"
                />
              </span>
              {" "}và{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-bold text-navy">tăng {stat3.count}x doanh thu</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute bottom-0 left-0 h-3 bg-green-300/60 -z-0 rounded"
                />
              </span>
              {" "}trong <span className="font-bold text-navy">90 ngày</span>.
            </p>
          </motion.div>

          {/* Value Proposition Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: Zap, text: "Không thuê thêm nhân sự", color: "text-yellow-500" },
              { icon: TrendingUp, text: "ROI đo lường từng ngày", color: "text-green-500" },
              { icon: Sparkles, text: "Setup trong 2 tuần", color: "text-purple-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-navy/10 px-4 py-2.5 rounded-full text-sm font-inter text-navy/80 shadow-md hover:shadow-lg transition-all cursor-default"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                {item.text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <Button
                asChild
                size="lg"
                className="relative w-full sm:w-auto bg-gradient-to-r from-electric to-blue-600 hover:from-blue-600 hover:to-electric text-white font-inter font-bold px-8 py-7 text-lg rounded-2xl shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <Link href="#contact" className="flex items-center gap-3">
                  <span className="relative z-10">Nhận Audit Marketing MIỄN PHÍ</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  {/* Shine effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-navy/20 hover:border-electric bg-white/80 backdrop-blur-sm text-navy hover:text-electric font-inter font-semibold px-8 py-7 text-lg rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="#proof" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Xem Case Study thực tế
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-navy/60 font-inter"
          >
            {/* Avatar stack */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"].map((color, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ scale: 0, x: -20 }}
                    animate={isInView ? { scale: 1, x: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="w-10 h-10 rounded-full border-3 border-white flex items-center justify-center text-white text-sm font-bold shadow-lg"
                    style={{ backgroundColor: color }}
                  >
                    {String.fromCharCode(65 + i)}
                  </motion.div>
                ))}
              </div>
              <span className="font-medium">+50 CEO đã tin tưởng</span>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 1.4 + i * 0.05 }}
                    className="w-5 h-5 text-yellow-400 fill-current" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>
              <span className="font-medium">4.9/5 từ 127 đánh giá</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-navy/40 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-inter font-medium">Khám phá thêm</span>
          <div className="w-6 h-10 border-2 border-navy/20 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-electric rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

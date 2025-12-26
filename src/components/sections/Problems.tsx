"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Users, FileWarning, AlertTriangle, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Flame,
    emoji: "🔥",
    title: "Đốt Tiền Vô Nghĩa",
    highlight: "100 triệu/tháng",
    description:
      "Chi hàng trăm triệu cho quảng cáo nhưng không biết đồng nào mang về khách, đồng nào bay hơi. Cảm giác như đổ tiền vào hố đen.",
    stat: "73%",
    statLabel: "SME không tracking được ROI",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Users,
    emoji: "😩",
    title: "Đội Ngũ Quá Tải",
    highlight: "5 người làm việc của 2",
    description:
      "Thuê 1 content, 1 designer, 1 ads, 1 SEO... Mỗi người làm một kiểu, không ai chịu trách nhiệm kết quả cuối cùng. Lương cao, hiệu suất thấp.",
    stat: "60%",
    statLabel: "Thời gian làm việc không hiệu quả",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: FileWarning,
    emoji: "📉",
    title: "Nội Dung Không Chuyển Đổi",
    highlight: "50 bài/tháng = 0 đơn",
    description:
      "Đăng mỗi ngày, like nhiều nhưng inbox ít. Content viral nhưng không ai mua. Làm marketing hay làm giải trí cho thiên hạ?",
    stat: "85%",
    statLabel: "Nội dung không tạo ra doanh thu",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

// Animated counter
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Problems() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Warning badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-full text-sm font-inter font-semibold mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Cảnh báo: 80% SME mắc phải những lỗi này</span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Bạn có đang{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                vứt tiền qua cửa sổ
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-2 left-0 h-3 bg-red-200/50"
              />
            </span>
            ?
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-navy/60 max-w-2xl mx-auto">
            Đây là 3 &quot;lỗ đen&quot; nuốt chửng ngân sách marketing của bạn mỗi tháng. 
            Nếu thấy quen thuộc, bạn không đơn độc.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${problem.bgColor}`}>
                  <CardContent className="p-6 md:p-8 relative">
                    {/* Large emoji background */}
                    <div className="absolute -top-4 -right-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                      {problem.emoji}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <problem.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Highlight stat */}
                    <div className={`inline-block px-3 py-1 rounded-full bg-white/80 ${problem.iconColor} text-sm font-bold font-inter mb-4`}>
                      {problem.highlight}
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                      {problem.title}
                    </h3>
                    <p className="font-inter text-navy/60 leading-relaxed mb-6">
                      {problem.description}
                    </p>

                    {/* Stat with animation */}
                    <div className="pt-6 border-t border-navy/10">
                      <div className="flex items-end gap-2">
                        <span className={`font-heading text-4xl font-bold bg-gradient-to-r ${problem.color} bg-clip-text text-transparent`}>
                          <AnimatedNumber value={parseInt(problem.stat)} suffix="%" />
                        </span>
                        <TrendingDown className={`w-5 h-5 ${problem.iconColor} mb-2`} />
                      </div>
                      <div className="font-inter text-sm text-navy/50 mt-1">
                        {problem.statLabel}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-navy to-navy-light p-6 md:p-8 rounded-2xl shadow-xl">
            <div className="text-center sm:text-left">
              <p className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                Nhận ra vấn đề rồi?
              </p>
              <p className="font-inter text-white/70">
                Tin vui: Tất cả đều có thể khắc phục trong 90 ngày
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-electric hover:bg-electric-light text-white font-inter font-semibold rounded-xl transition-colors whitespace-nowrap"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Xem giải pháp →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

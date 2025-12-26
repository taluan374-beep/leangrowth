"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Bot,
  Target,
  Gauge
} from "lucide-react";

const solutions = [
  {
    icon: Bot,
    number: "01",
    title: "Tự Động Hóa Marketing",
    subtitle: "Marketing Automation",
    tagline: "Hệ thống làm việc 24/7, bạn ngủ ngon",
    description:
      "Không cần thuê thêm nhân sự. Hệ thống tự động chạy email, chatbot, phân loại khách hàng, nhắc nhở follow-up. Tất cả trong khi bạn tập trung vào việc quan trọng hơn.",
    benefits: [
      { text: "Tiết kiệm 30+ giờ/tuần cho đội ngũ", highlight: "30+ giờ" },
      { text: "Phản hồi khách hàng trong 30 giây", highlight: "30 giây" },
      { text: "Tỷ lệ chốt đơn tăng 47%", highlight: "47%" },
    ],
    visual: "automation",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    number: "02",
    title: "Nội Dung Chuyển Đổi",
    subtitle: "High-Converting Content",
    tagline: "Ít hơn, nhưng mỗi bài đều ra đơn",
    description:
      "Không cần đăng 100 bài để có 1 đơn. Framework nội dung AIDA đã được kiểm chứng: Thu hút → Quan tâm → Khao khát → Hành động. Mỗi bài viết có mission rõ ràng.",
    benefits: [
      { text: "Conversion rate tăng 3.2x", highlight: "3.2x" },
      { text: "Chi phí/lead giảm 65%", highlight: "65%" },
      { text: "Chỉ cần 12 bài/tháng thay vì 50", highlight: "12 bài" },
    ],
    visual: "content",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Đo Lường Chính Xác",
    subtitle: "Data-Driven Decisions",
    tagline: "Biết chính xác từng đồng đi đâu",
    description:
      "Dashboard real-time cho thấy mọi chỉ số: Chi bao nhiêu, thu bao nhiêu, kênh nào hiệu quả, kênh nào đang lỗ. Không còn cảm tính, chỉ có số liệu.",
    benefits: [
      { text: "ROI tracking real-time 24/7", highlight: "24/7" },
      { text: "Phát hiện kênh lỗ trong 24h", highlight: "24h" },
      { text: "Tối ưu ngân sách tăng hiệu quả 40%", highlight: "40%" },
    ],
    visual: "analytics",
    gradient: "from-green-500 to-emerald-500",
  },
];

// Visual components for each solution
function AutomationVisual() {
  return (
    <div className="relative w-full h-64 md:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl overflow-hidden">
        {/* Animated flow lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
          <motion.path
            d="M50 150 Q 100 100 150 150 T 250 150 T 350 150"
            stroke="url(#blueGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating cards */}
        {[
          { icon: "📧", label: "Email", x: "10%", y: "20%" },
          { icon: "🤖", label: "Chatbot", x: "40%", y: "60%" },
          { icon: "📊", label: "CRM", x: "70%", y: "30%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="absolute bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
            style={{ left: item.x, top: item.y }}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm font-semibold text-navy">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ContentVisual() {
  return (
    <div className="relative w-full h-64 md:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl overflow-hidden p-6">
        {/* Content cards stack */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="absolute bg-white rounded-xl shadow-lg p-4"
            style={{ 
              left: `${20 + i * 10}%`, 
              top: `${20 + i * 15}%`,
              transform: `rotate(${-3 + i * 3}deg)`,
              zIndex: 3 - i 
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-2 w-full bg-gray-100 rounded" />
              <div className="h-2 w-4/5 bg-gray-100 rounded" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-purple-500 font-bold">+{(i + 1) * 127} leads</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="relative w-full h-64 md:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl overflow-hidden p-6">
        {/* Chart bars */}
        <div className="absolute bottom-6 left-6 right-6 flex items-end gap-3 h-40">
          {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg relative"
            >
              {i === 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-navy text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                >
                  +90% ROI
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Trend line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
          <motion.path
            d="M30 150 L 80 120 L 130 140 L 180 80 L 230 100 L 280 50 L 330 70 L 380 30"
            stroke="#10B981"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>
    </div>
  );
}

const visuals: Record<string, () => JSX.Element> = {
  automation: AutomationVisual,
  content: ContentVisual,
  analytics: AnalyticsVisual,
};

export default function Solutions() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 text-electric px-4 py-2 rounded-full text-sm font-inter font-semibold mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>Giải pháp đã kiểm chứng</span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Hệ thống <span className="text-electric">Lean Marketing</span>
            <br className="hidden md:block" />
            3 bước đơn giản, kết quả bất ngờ
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-navy/60 max-w-3xl mx-auto">
            Áp dụng nguyên lý 80/20: Tập trung vào 20% công việc tạo ra 80% kết quả.
            Mỗi bước đều có mục tiêu rõ ràng và đo lường được.
          </p>
        </motion.div>

        {/* Solutions - Zig-zag */}
        <div className="space-y-20 md:space-y-32">
          {solutions.map((solution, index) => {
            const Visual = visuals[solution.visual];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <Visual />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center gap-3 mb-6`}
                  >
                    <span className={`text-6xl font-heading font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent opacity-30`}>
                      {solution.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Tagline */}
                  <p className={`font-inter text-sm font-semibold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent uppercase tracking-wider mb-2`}>
                    {solution.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-3">
                    {solution.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-inter text-lg text-navy/70 italic mb-4">
                    &quot;{solution.tagline}&quot;
                  </p>

                  {/* Description */}
                  <p className="font-inter text-navy/60 text-lg leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: benefitIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${solution.gradient} rounded-full text-white p-0.5`} />
                        <span className="font-inter text-navy/70">
                          {benefit.text.split(benefit.highlight).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className={`font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                                  {benefit.highlight}
                                </span>
                              )}
                            </span>
                          ))}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-inter font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            Xem các gói dịch vụ
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, ChevronLeft, ChevronRight, TrendingUp, Users, Award } from "lucide-react";

const logos = [
  { name: "TechStart", industry: "SaaS" },
  { name: "FoodHub", industry: "F&B" },
  { name: "EduPro", industry: "Giáo dục" },
  { name: "HealthPlus", industry: "Healthcare" },
  { name: "ShopEase", industry: "E-commerce" },
  { name: "TravelGo", industry: "Du lịch" },
  { name: "FinanceX", industry: "Fintech" },
  { name: "BeautyBox", industry: "Mỹ phẩm" },
];

const testimonials = [
  {
    quote:
      "Trước khi hợp tác với LeanGrowth, chúng tôi chi 120 triệu/tháng cho marketing nhưng không biết hiệu quả ra sao. Sau 3 tháng, chi phí giảm còn 70 triệu nhưng leads tăng gấp 3. ROI lần đầu tiên đo được rõ ràng.",
    author: "Nguyễn Văn Minh",
    role: "CEO & Founder",
    company: "TechStart Vietnam",
    avatar: "NM",
    results: [
      { value: "42%", label: "Giảm chi phí" },
      { value: "3x", label: "Tăng leads" },
      { value: "90 ngày", label: "Thời gian" },
    ],
  },
  {
    quote:
      "Đội ngũ marketing của tôi 5 người, làm việc 10 tiếng/ngày nhưng vẫn không đuổi kịp deadline. Sau khi setup automation với LeanGrowth, giờ 2 người xử lý được khối lượng công việc gấp đôi, còn thời gian sáng tạo.",
    author: "Trần Thị Hương",
    role: "Marketing Director",
    company: "EduPro Academy",
    avatar: "TH",
    results: [
      { value: "60%", label: "Tiết kiệm nhân sự" },
      { value: "2x", label: "Năng suất" },
      { value: "5→2", label: "Nhân sự cần" },
    ],
  },
  {
    quote:
      "Từng nghĩ content viral là thành công. Nhưng 50 bài viral = 0 đơn hàng. LeanGrowth dạy chúng tôi viết content chuyển đổi. Giờ 12 bài/tháng nhưng tháng nào cũng vượt target doanh số.",
    author: "Lê Hoàng Nam",
    role: "Founder",
    company: "BeautyBox Vietnam",
    avatar: "LN",
    results: [
      { value: "12 bài", label: "Content/tháng" },
      { value: "127%", label: "Vượt target" },
      { value: "4.2%", label: "Conversion rate" },
    ],
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Khách hàng tin tưởng" },
  { icon: TrendingUp, value: "₫12B+", label: "Doanh thu tạo ra cho khách" },
  { icon: Award, value: "4.9/5", label: "Đánh giá trung bình" },
];

// Animated counter
function AnimatedValue({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[1]);
    const prefix = value.slice(0, value.indexOf(numericMatch[1]));
    const suffix = value.slice(value.indexOf(numericMatch[1]) + numericMatch[1].length);
    
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function SocialProof() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="proof" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-inter font-semibold mb-6"
          >
            <Award className="w-4 h-4" />
            <span>Kết quả thực tế từ khách hàng</span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Họ đã <span className="text-electric">thành công</span>,
            <br className="hidden md:block" />
            bạn cũng có thể
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-electric/10 rounded-2xl mb-3">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-electric" />
              </div>
              <div className="font-heading text-2xl md:text-4xl font-bold text-navy">
                <AnimatedValue value={stat.value} />
              </div>
              <div className="font-inter text-xs md:text-sm text-navy/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Logo Slider */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 md:gap-8"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-36 md:w-44 h-20 bg-white rounded-xl shadow-sm border border-border flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                >
                  <span className="font-heading text-lg md:text-xl font-bold text-navy/60">
                    {logo.name}
                  </span>
                  <span className="text-xs text-navy/40">{logo.industry}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Quote Section */}
                <div className="lg:w-2/3 p-8 md:p-12 relative">
                  {/* Quote decoration */}
                  <div className="absolute top-8 left-8 md:top-12 md:left-12">
                    <Quote className="w-12 h-12 text-electric/20" />
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-end gap-2 mb-6">
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="w-10 h-10 rounded-full bg-navy/5 hover:bg-navy/10 flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-navy" />
                    </button>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                      className="w-10 h-10 rounded-full bg-navy/5 hover:bg-navy/10 flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-navy" />
                    </button>
                  </div>

                  {/* Testimonial content */}
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="font-inter text-lg md:text-xl text-navy leading-relaxed mb-8 relative z-10">
                      &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-electric to-purple-500 rounded-full flex items-center justify-center">
                        <span className="font-heading text-xl font-bold text-white">
                          {testimonials[activeTestimonial].avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-heading font-bold text-navy">
                          {testimonials[activeTestimonial].author}
                        </div>
                        <div className="font-inter text-sm text-navy/60">
                          {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Dots indicator */}
                  <div className="flex gap-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeTestimonial 
                            ? "w-8 bg-electric" 
                            : "w-2 bg-navy/20 hover:bg-navy/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Results Section */}
                <div className="lg:w-1/3 bg-gradient-to-br from-navy to-navy-light p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="font-heading text-lg font-bold text-white mb-8">
                    Kết quả sau hợp tác
                  </h4>
                  
                  <motion.div
                    key={`results-${activeTestimonial}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {testimonials[activeTestimonial].results.map((result, index) => (
                      <div key={index} className="relative">
                        <div className="font-heading text-3xl md:text-4xl font-bold text-electric">
                          {result.value}
                        </div>
                        <div className="font-inter text-white/70 text-sm">
                          {result.label}
                        </div>
                        {index < testimonials[activeTestimonial].results.length - 1 && (
                          <div className="absolute bottom-0 left-0 w-12 h-px bg-white/20 -mb-3" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

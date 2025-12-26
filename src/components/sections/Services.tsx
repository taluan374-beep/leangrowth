"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Rocket,
  Check,
  ArrowRight,
  Star,
  Zap,
  Crown,
  Shield,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Wrench,
    name: "BUILD",
    title: "Setup Hệ Thống",
    tagline: "Cho doanh nghiệp mới bắt đầu",
    description:
      "Xây dựng nền tảng marketing automation từ con số 0. Phù hợp nếu bạn chưa có hệ thống hoặc đang dùng cách thủ công.",
    features: [
      "Thiết lập CRM & quản lý khách hàng",
      "Cấu hình Email Marketing tự động",
      "2 Landing Page chuyển đổi cao",
      "Tích hợp Facebook, Zalo, Website",
      "Đào tạo đội ngũ vận hành (4 buổi)",
      "Hỗ trợ kỹ thuật 30 ngày",
    ],
    price: "29",
    unit: "triệu",
    period: "một lần",
    highlight: false,
    badge: null,
    gradient: "from-slate-600 to-slate-800",
    cta: "Bắt đầu Setup",
    recommended: false,
  },
  {
    icon: Rocket,
    name: "RUN",
    title: "Vận Hành Toàn Diện",
    tagline: "Gói phổ biến nhất",
    description:
      "Đội ngũ chuyên gia trực tiếp vận hành marketing cho bạn. Bạn chỉ cần nhận khách và chốt đơn.",
    features: [
      "Bao gồm toàn bộ gói BUILD",
      "Vận hành quảng cáo đa kênh",
      "8 bài content chuyển đổi cao/tháng",
      "Quản lý & nuôi dưỡng leads",
      "Báo cáo & tối ưu hàng tuần",
      "Họp review chiến lược 2 lần/tháng",
      "Dedicated Account Manager",
    ],
    price: "25",
    unit: "triệu",
    period: "/tháng",
    highlight: true,
    badge: "Phổ biến nhất",
    gradient: "from-electric to-blue-600",
    cta: "Chọn gói này",
    recommended: true,
  },
  {
    icon: Crown,
    name: "SCALE",
    title: "Tăng Trưởng Đột Phá",
    tagline: "Cho doanh nghiệp muốn bứt phá",
    description:
      "Toàn bộ nguồn lực tập trung scale nhanh. Dành cho doanh nghiệp đã có product-market fit và sẵn sàng tăng tốc.",
    features: [
      "Bao gồm toàn bộ gói RUN",
      "Ngân sách quảng cáo không giới hạn",
      "Mở rộng thêm kênh marketing mới",
      "A/B testing liên tục tối ưu",
      "Báo cáo & họp chiến lược hàng tuần",
      "Ưu tiên hỗ trợ 24/7",
      "Tư vấn Growth Strategy 1-1",
    ],
    price: "Custom",
    unit: "",
    period: "theo KPI",
    highlight: false,
    badge: "Premium",
    gradient: "from-amber-500 to-orange-600",
    cta: "Liên hệ tư vấn",
    recommended: false,
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent" />

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
            className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 text-navy px-4 py-2 rounded-full text-sm font-inter font-semibold mb-6"
          >
            <Zap className="w-4 h-4 text-electric" />
            <span>Bảng giá minh bạch</span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Chọn gói phù hợp với{" "}
            <span className="text-electric">giai đoạn của bạn</span>
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-navy/60 max-w-2xl mx-auto">
            Không có gói &quot;one-size-fits-all&quot;. Mỗi doanh nghiệp có nhu cầu khác nhau, 
            chúng tôi có giải pháp tương ứng.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative"
            >
              {/* Glow effect for highlighted card */}
              {service.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-r from-electric to-blue-600 rounded-3xl blur-lg opacity-30" />
              )}
              
              <Card
                className={`relative h-full transition-all duration-500 ${
                  service.highlight
                    ? "border-2 border-electric shadow-2xl shadow-electric/20 scale-[1.02] z-10"
                    : "border border-border hover:border-electric/30 hover:shadow-xl"
                } ${hoveredCard === index ? "transform -translate-y-2" : ""}`}
              >
                {/* Badge */}
                {service.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-white text-sm font-bold shadow-lg bg-gradient-to-r ${service.gradient}`}>
                    <span className="flex items-center gap-1">
                      {service.badge === "Phổ biến nhất" ? <Star className="w-4 h-4" /> : <Crown className="w-4 h-4" />}
                      {service.badge}
                    </span>
                  </div>
                )}

                <CardContent className="p-6 md:p-8 pt-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${service.gradient} text-white mb-3`}>
                        <service.icon className="w-3.5 h-3.5" />
                        {service.name}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-navy">
                        {service.title}
                      </h3>
                      <p className="font-inter text-sm text-navy/50 mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-inter text-navy/60 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-baseline gap-1">
                      {service.price === "Custom" ? (
                        <span className="font-heading text-3xl md:text-4xl font-bold text-navy">
                          Custom
                        </span>
                      ) : (
                        <>
                          <span className="font-heading text-4xl md:text-5xl font-bold text-navy">
                            {service.price}
                          </span>
                          <span className="font-inter text-navy/70 text-lg">
                            {service.unit}
                          </span>
                        </>
                      )}
                      <span className="font-inter text-navy/50 text-sm ml-1">
                        {service.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-r ${service.gradient}`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-inter text-sm text-navy/70">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      className={`w-full py-6 font-inter font-semibold text-base rounded-xl transition-all duration-300 ${
                        service.highlight
                          ? `bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-electric/30 text-white`
                          : "bg-navy hover:bg-navy-light text-white"
                      }`}
                      size="lg"
                    >
                      <Link href="#contact" className="flex items-center justify-center gap-2">
                        {service.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10"
        >
          {[
            { icon: Shield, text: "Cam kết hoàn tiền 100% nếu không hài lòng trong 30 ngày" },
            { icon: Check, text: "Không phát sinh chi phí ẩn" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-navy/60">
              <item.icon className="w-5 h-5 text-electric" />
              <span className="font-inter text-sm">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

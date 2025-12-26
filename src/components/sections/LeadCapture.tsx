"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Shield,
  Clock,
  Gift,
  Rocket,
  User,
  Mail,
  Globe,
  PartyPopper,
} from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Audit Website miễn phí",
    description: "Phân tích chi tiết điểm yếu marketing",
  },
  {
    icon: Rocket,
    title: "Kế hoạch 90 ngày",
    description: "Roadmap cụ thể để tăng trưởng",
  },
  {
    icon: Clock,
    title: "Phản hồi trong 24h",
    description: "Đội ngũ chuyên gia liên hệ ngay",
  },
];

const formSteps = [
  { field: "name", label: "Họ và tên", icon: User, placeholder: "Nguyễn Văn A", type: "text" },
  { field: "email", label: "Email công ty", icon: Mail, placeholder: "email@congty.com", type: "email" },
  { field: "website", label: "Website doanh nghiệp", icon: Globe, placeholder: "https://congty.com", type: "url" },
];

export default function LeadCapture() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const currentField = formSteps[currentStep];
  const isCurrentFieldValid = formData[currentField.field as keyof typeof formData].length > 0;

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-electric/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-inter font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Ưu đãi có hạn: Audit miễn phí trị giá 5 triệu</span>
            </motion.div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Sẵn sàng{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan-400">
                  cách mạng
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-3 bg-electric/30 -z-0"
                />
              </span>
              <br />
              marketing của bạn?
            </h2>
            
            <p className="font-inter text-lg md:text-xl text-white/70 mb-10">
              Đăng ký ngay để nhận bản phân tích chi tiết. Chúng tôi sẽ chỉ ra 
              chính xác &quot;lỗ hổng&quot; đang làm bạn mất tiền mỗi ngày.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-electric" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-white text-sm">
                      {benefit.title}
                    </h4>
                    <p className="font-inter text-white/60 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-4 justify-center lg:justify-start text-white/50 text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Bảo mật 100%</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full" />
              <div className="flex items-center gap-2">
                <span>Không spam</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full max-w-md lg:max-w-none"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 md:p-10"
                    >
                      {/* Progress bar */}
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-inter text-sm text-navy/60">
                            Bước {currentStep + 1} / {formSteps.length}
                          </span>
                          <span className="font-inter text-sm font-semibold text-electric">
                            {Math.round(((currentStep + 1) / formSteps.length) * 100)}%
                          </span>
                        </div>
                        <div className="h-2 bg-navy/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / formSteps.length) * 100}%` }}
                            className="h-full bg-gradient-to-r from-electric to-blue-600 rounded-full"
                          />
                        </div>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <label className="block mb-4">
                              <span className="flex items-center gap-2 font-inter text-sm font-medium text-navy mb-3">
                                <currentField.icon className="w-4 h-4 text-electric" />
                                {currentField.label}
                              </span>
                              <Input
                                name={currentField.field}
                                type={currentField.type}
                                placeholder={currentField.placeholder}
                                value={formData[currentField.field as keyof typeof formData]}
                                onChange={handleChange}
                                required
                                autoFocus
                                className="h-14 text-lg font-inter border-2 border-navy/10 focus:border-electric rounded-xl"
                              />
                            </label>
                          </motion.div>
                        </AnimatePresence>

                        {/* Navigation buttons */}
                        <div className="flex gap-3 mt-8">
                          {currentStep > 0 && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={handleBack}
                              className="flex-1 h-14 font-inter font-semibold rounded-xl border-2"
                            >
                              Quay lại
                            </Button>
                          )}
                          
                          {currentStep < formSteps.length - 1 ? (
                            <Button
                              type="button"
                              onClick={handleNext}
                              disabled={!isCurrentFieldValid}
                              className="flex-1 h-14 bg-gradient-to-r from-electric to-blue-600 hover:from-blue-600 hover:to-electric text-white font-inter font-semibold rounded-xl transition-all duration-300 disabled:opacity-50"
                            >
                              Tiếp tục
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                          ) : (
                            <Button
                              type="submit"
                              disabled={isSubmitting || !isCurrentFieldValid}
                              className="flex-1 h-14 bg-gradient-to-r from-electric to-blue-600 hover:from-blue-600 hover:to-electric text-white font-inter font-semibold rounded-xl transition-all duration-300 group"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                  />
                                  Đang gửi...
                                </span>
                              ) : (
                                <span className="flex items-center gap-2">
                                  Nhận Audit miễn phí
                                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                              )}
                            </Button>
                          )}
                        </div>
                      </form>

                      {/* Quick info */}
                      <div className="mt-6 pt-6 border-t border-navy/10">
                        <div className="flex items-center justify-center gap-4 text-xs text-navy/50">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            Không cần thẻ tín dụng
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            Hủy bất cứ lúc nào
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 md:p-10 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
                      >
                        <PartyPopper className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3"
                      >
                        Tuyệt vời! 🎉
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="font-inter text-navy/60 mb-6"
                      >
                        Cảm ơn <span className="font-semibold text-navy">{formData.name}</span>!
                        <br />
                        Chuyên gia của chúng tôi sẽ liên hệ bạn trong vòng 24 giờ qua email{" "}
                        <span className="font-semibold text-electric">{formData.email}</span>
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-electric/10 rounded-xl p-4 text-left"
                      >
                        <p className="font-inter text-sm text-navy/70">
                          <span className="font-semibold text-navy">Trong khi chờ đợi:</span>
                          <br />
                          Hãy kiểm tra email (cả spam) để nhận tài liệu &quot;5 sai lầm marketing phổ biến&quot; miễn phí từ chúng tôi.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

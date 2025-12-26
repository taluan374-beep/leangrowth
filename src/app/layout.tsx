import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeanGrowth Agency | Marketing Tinh Gọn cho Doanh Nghiệp SME",
  description:
    "Loại bỏ 80% lãng phí trong quy trình marketing của bạn, tập trung vào 20% tạo ra doanh thu thực tế. Không vẽ vời, chỉ có kết quả.",
  keywords: [
    "lean marketing",
    "marketing tinh gọn",
    "marketing agency",
    "SME marketing",
    "digital marketing vietnam",
  ],
  authors: [{ name: "LeanGrowth Agency" }],
  openGraph: {
    title: "LeanGrowth Agency | Marketing Tinh Gọn",
    description: "Đừng đốt tiền quảng cáo. Hãy làm Marketing Tinh Gọn.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

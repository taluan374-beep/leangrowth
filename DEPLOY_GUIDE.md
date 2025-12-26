# 🚀 Hướng dẫn Deploy LeanGrowth Landing Page

## 📦 Bước 1: Tải Source Code

Download file zip và giải nén:
- File: `lean-marketing-source.zip`
- Hoặc copy toàn bộ folder `/workspace/lean-marketing/`

---

## 🌐 Option 1: Deploy lên Vercel (Khuyên dùng - Miễn phí)

### Cách 1: Deploy qua Vercel Dashboard (Dễ nhất)

1. **Tạo tài khoản Vercel**: https://vercel.com/signup (đăng nhập bằng GitHub)

2. **Push code lên GitHub**:
   ```bash
   # Tạo repo mới trên GitHub
   # Sau đó chạy:
   cd lean-marketing
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Import vào Vercel**:
   - Vào https://vercel.com/new
   - Chọn "Import Git Repository"
   - Chọn repo vừa tạo
   - Click "Deploy"
   - Đợi 1-2 phút → Có link cố định!

### Cách 2: Deploy qua Vercel CLI

```bash
# Cài Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (trong folder project)
cd lean-marketing
vercel --prod

# Vercel sẽ cho bạn link cố định dạng: https://your-project.vercel.app
```

---

## 🌐 Option 2: Deploy lên Netlify (Miễn phí)

### Cách 1: Kéo thả (Nhanh nhất!)

1. Vào https://app.netlify.com/drop
2. Kéo thả folder `out/` (sau khi build) vào trang web
3. Xong! Netlify cho bạn link ngay

### Cách 2: Connect GitHub

1. Tạo tài khoản: https://app.netlify.com/signup
2. Click "New site from Git"
3. Chọn GitHub → Chọn repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"

---

## 🌐 Option 3: Deploy lên GitHub Pages (Miễn phí)

### Bước 1: Tạo repo và push code

```bash
cd lean-marketing

# Init git
git init
git add .
git commit -m "Initial commit"

# Tạo repo trên GitHub, sau đó:
git remote add origin https://github.com/YOUR_USERNAME/leangrowth-landing.git
git branch -M main
git push -u origin main
```

### Bước 2: Cấu hình GitHub Actions

Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Bước 3: Enable GitHub Pages

1. Vào repo Settings → Pages
2. Source: chọn "gh-pages" branch
3. Save → Đợi vài phút
4. Link: `https://YOUR_USERNAME.github.io/leangrowth-landing/`

---

## 🌐 Option 4: Deploy lên Cloudflare Pages (Miễn phí)

1. Vào https://pages.cloudflare.com/
2. Connect GitHub
3. Chọn repo
4. Build settings:
   - Framework: Next.js (Static HTML Export)
   - Build command: `npm run build`
   - Output directory: `out`
5. Deploy!

---

## ⚙️ Cấu hình quan trọng

### File `next.config.mjs` đã được setup sẵn:

```javascript
const nextConfig = {
  output: 'export',        // Static export
  trailingSlash: true,     // Thêm / cuối URL
  images: {
    unoptimized: true,     // Cho static export
  },
};
```

### Build commands:

```bash
# Cài dependencies
npm install

# Build production
npm run build

# Folder output: ./out (chứa HTML tĩnh)
```

---

## 🔧 Troubleshooting

### Lỗi "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Lỗi build trên Vercel/Netlify
- Đảm bảo Node version >= 18
- Check file `.nvmrc` hoặc set trong dashboard

### Lỗi 404 khi vào subpage
- Đảm bảo `trailingSlash: true` trong next.config.mjs
- Hoặc cấu hình redirect rules trên hosting

---

## 📞 Hỗ trợ

Nếu gặp vấn đề khi deploy, hãy:
1. Check console log lỗi
2. Đọc docs của hosting provider
3. Tạo issue trên GitHub repo

---

**Happy Deploying! 🎉**

# ---------------------------
# 1️⃣ Build Stage
# ---------------------------
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# 运行 Vite 打包生成 dist/
RUN npm run build

# ---------------------------
# 2️⃣ Apache (httpd) Server Stage
# ---------------------------
FROM httpd:2.4
# 把 dist 静态文件复制到 Apache 根目录
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# 暴露端口
EXPOSE 80

# 启动 Apache
CMD ["httpd-foreground"]

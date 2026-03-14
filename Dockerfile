# 使用Nginx作为基础镜像
FROM nginx:alpine

# 复制项目文件到Nginx的静态文件目录
COPY . /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]

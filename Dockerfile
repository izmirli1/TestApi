# Node.js imajını kullanıyoruz
FROM node:14

# Uygulamayı konteyner içinde çalıştırmak için gerekli klasörü oluşturuyoruz
WORKDIR /app

# package.json ve diğer bağımlılık dosyalarını kopyalıyoruz
COPY package*.json ./

# Bağımlılıkları yükleme
RUN npm install

# Kodu konteyner içine kopyalıyoruz
COPY . .

# Uygulamanın çalışacağı portu açıyoruz
EXPOSE 3000

# Uygulamayı başlatma komutu
CMD ["node", "testapp.js"]
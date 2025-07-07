# 📝 Todo App - React Native

> Ứng dụng quản lý công việc hàng ngày được xây dựng bằng React Native và Expo

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📱 Giới thiệu

Todo App là một ứng dụng di động đơn giản nhưng đầy đủ chức năng để quản lý công việc hàng ngày. Được phát triển bằng React Native, ứng dụng có giao diện hiện đại và trải nghiệm người dùng mượt mà.

### ✨ Tính năng chính

- ➕ **Thêm công việc mới** - Dễ dàng thêm task với giao diện thân thiện
- ✅ **Đánh dấu hoàn thành** - Checkbox interactive với animation
- 🗑️ **Xóa công việc** - Remove tasks không cần thiết
- 📱 **Responsive Design** - Hoạt động mượt mà trên mọi kích thước màn hình
- 🎨 **Modern UI** - Card-based design với shadows và colors hiện đại
- 🔄 **Real-time Updates** - State management với React Hooks
- 🌟 **Empty State** - Giao diện đẹp khi không có công việc nào

## 🚀 Demo

### Video demo



https://github.com/user-attachments/assets/4a44916f-9ef5-4eca-abe9-1ee9ee7dd79f




## 🛠️ Cài đặt

### Yêu cầu hệ thống

- Node.js >= 14.x
- npm hoặc yarn
- Expo CLI
- iOS Simulator hoặc Android Emulator (tùy chọn)

### Clone project

```bash
git clone <repository-url>
cd todo-app
```

### Cài đặt dependencies

```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install
```

### Cài đặt iOS dependencies (nếu cần)

```bash
cd ios && pod install
```

## ▶️ Chạy ứng dụng

### Development mode

```bash
# Khởi động Expo development server
npm start
# hoặc
expo start

# Chạy trên iOS simulator
npm run ios

# Chạy trên Android emulator
npm run android

# Chạy trên web browser
npm run web
```

### Production build

```bash
# Build cho iOS
expo build:ios

# Build cho Android
expo build:android
```

## 📁 Cấu trúc dự án

```
todo-app/
├── App.js                 # Main application component
├── components/            # React components
│   ├── TodoList.js       # Main container component
│   └── TodoItem.js       # Individual todo item component
├── assets/               # Static assets (icons, images)
├── ios/                  # iOS specific files
├── package.json          # Dependencies và scripts
├── app.json             # Expo configuration
└── README.md            # Documentation
```

### Chi tiết components

#### `App.js`
- Main entry point của ứng dụng
- Setup SafeAreaView và header
- Import TodoList component

#### `components/TodoList.js`
- Container component chứa state management
- Handles add, delete, toggle operations
- Render danh sách TodoItem components

#### `components/TodoItem.js`
- Presentational component cho từng todo item
- Checkbox, text display, và delete button
- Conditional styling cho completed items

## 🧰 Technologies sử dụng

### Core Technologies
- **React Native** `0.79.5` - Framework phát triển mobile app
- **React** `19.0.0` - UI library
- **Expo** `~53.0.17` - Development platform

### Dependencies
- **@react-native-community/checkbox** - Checkbox component
- **expo-status-bar** - Status bar management

### Development Tools
- **@babel/core** - JavaScript transpiler
- **@expo/metro-config** - Metro bundler configuration

## 📚 Kiến thức học được

Qua dự án này, người phát triển sẽ học được:

### React Native Fundamentals
- ✅ Components và Props
- ✅ State Management với useState
- ✅ Event Handling
- ✅ Conditional Rendering

### UI Development
- ✅ StyleSheet và Flexbox
- ✅ Navigation và Layout
- ✅ Responsive Design
- ✅ Modern UI Patterns

### Best Practices
- ✅ Component Architecture
- ✅ Code Organization
- ✅ Error Handling
- ✅ Package Management

## 🔄 Tính năng tương lai

- [ ] **Persistence** - Lưu trữ data với AsyncStorage
- [ ] **Categories** - Phân loại công việc theo nhóm
- [ ] **Due Dates** - Thêm deadline cho tasks
- [ ] **Priority Levels** - Mức độ ưu tiên
- [ ] **Search & Filter** - Tìm kiếm và lọc công việc
- [ ] **Dark Mode** - Chế độ tối
- [ ] **Push Notifications** - Nhắc nhở
- [ ] **Cloud Sync** - Đồng bộ đa thiết bị

## 🤝 Đóng góp

Contributions, issues và feature requests đều được chào đón!

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới **MIT License**. Xem file `LICENSE` để biết thêm chi tiết.

## 👤 Tác giả

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Lời cảm ơn

- React Native team cho framework tuyệt vời
- Expo team cho development tools
- React Native Community cho các packages hữu ích

---

⭐ **Nếu project này hữu ích, hãy star repo nhé!** ⭐ 

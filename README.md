# 📝 NeuraBlog - Your Personal Blogging Platform

> A modern, full-stack blogging platform built with React and Node.js. Share your thoughts, manage your content, and engage with your community!

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.1.6-13AA52?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

[Features](#-features) • [Installation](#-installation) • [Getting Started](#-getting-started) • [API Docs](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

**NeuraBlog** is a complete blogging platform that lets you create, edit, and publish blog posts with ease. It features a beautiful, responsive interface for readers and a powerful admin panel for content creators. Whether you're a tech enthusiast, writer, or business owner, NeuraBlog provides everything you need to manage your online presence.

### Why NeuraBlog?
- 🚀 **Fast & Responsive** - Built with modern technologies for optimal performance
- 🔐 **Secure Authentication** - JWT-based admin authentication
- 📱 **Mobile Friendly** - Fully responsive design that works on all devices
- 🎨 **Beautiful UI** - Clean, modern interface with Tailwind CSS
- ⚡ **Rich Text Editor** - Create formatted blog posts with Quill editor
- 💬 **Comment System** - Readers can leave comments (moderated by admin)
- 🏷️ **Search & Filter** - Find blogs by title, category, or keywords
- 📊 **Admin Dashboard** - Manage blogs, comments, and view analytics

---

## ✨ Features

### For Readers
- 👀 **Browse Blogs** - Beautiful blog listing with images and descriptions
- 🔍 **Smart Search** - Search blogs by title, category, or content
- 🏷️ **Category Filter** - Filter blogs by category (Startup, Design, Social, etc.)
- 📖 **Read Full Posts** - Complete blog content with formatted text and images
- 💬 **Leave Comments** - Share your thoughts on blog posts (requires moderation)
- 📱 **Responsive Design** - Seamless experience on desktop, tablet, and mobile

### For Admins
- ➕ **Create Blogs** - Write beautiful posts using rich text editor
  - Add title, subtitle, description, and featured image
  - Format text with Quill editor
  - Auto image optimization with ImageKit
  - Draft and publish functionality
  
- ✏️ **Manage Blogs** - Edit or delete existing posts
  - Toggle publish/unpublish status
  - Bulk management options
  - View blog analytics
  
- 💬 **Moderate Comments** - Approve, reject, or delete comments
  - Review pending comments
  - Manage approved comments
  
- 📊 **Dashboard** - Quick overview of your blog stats
  - Total blogs published
  - Active comments
  - Draft count
  - Recent posts list

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - UI library with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React Router v7** - Client-side routing
- **Axios** - HTTP client
- **Quill 2.0** - Rich text editor
- **React Hot Toast** - Elegant notifications
- **Motion** - Smooth animations
- **Moment.js** - Date manipulation

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **MongoDB 9.1** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Multer** - File upload handling
- **ImageKit** - Image optimization & storage
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development auto-reload

### Deployment
- **Vercel** - Frontend hosting
- **Railway/Heroku/Render** - Backend hosting

---

## 📋 Requirements

Before you get started, make sure you have:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** account (MongoDB Atlas for cloud database)
- **ImageKit** account (for image storage & optimization)
- **Git** (optional, for version control)

---

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/NeuraBlog.git
cd NeuraBlog
```

### Step 2: Setup Backend
```bash
cd server
npm install
```

### Step 3: Setup Frontend
```bash
cd ../client
npm install
```

---

## ⚙️ Configuration

### Backend Environment Variables (.env)

Create a `.env` file in the `server` folder:

```env
# Server Port
PORT=3000

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_secure_password

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/neurablog?retryWrites=true&w=majority

# ImageKit Configuration (for image storage)
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint
```

### Frontend Environment Variables (.env)

Create a `.env` file in the `client` folder:

```env
# Backend API URL
VITE_BASE_URL=http://localhost:3000
```

For production, update this to your deployed backend URL:
```env
VITE_BASE_URL=https://your-backend-url.com
```

### Getting Your Credentials

**MongoDB Atlas:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string from "Connect" button

**ImageKit:**
1. Visit [ImageKit.io](https://imagekit.io/)
2. Sign up and create a new project
3. Get your API keys from Dashboard → Developer Options

---

## 🏃 Getting Started

### Running Locally

**Terminal 1 - Start the Backend:**
```bash
cd server
npm run server    # Uses nodemon for auto-reload
```

Expected output:
```
Database Connected
server is running on port 3000
```

**Terminal 2 - Start the Frontend:**
```bash
cd client
npm run dev
```

Expected output:
```
➜  Local:   http://localhost:5173/
```

### Access the Application

- **Frontend**: Open [http://localhost:5173](http://localhost:5173) in your browser
- **Backend API**: [http://localhost:3000](http://localhost:3000)

### First Time Setup

1. Navigate to `/admin` route
2. Login with credentials from your `.env`:
   - Email: `admin@example.com`
   - Password: `greatstack` (or your custom password)
3. Go to Dashboard to get started!

---

## 📁 Project Structure

```
NeuraBlog/
│
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── Blog.jsx            # Individual blog post
│   │   │   └── Admin/
│   │   │       ├── Dashboard.jsx   # Admin dashboard
│   │   │       ├── AddBlog.jsx     # Create new blog
│   │   │       ├── ListBlog.jsx    # Manage blogs
│   │   │       ├── Comments.jsx    # Moderate comments
│   │   │       └── Layout.jsx      # Admin layout wrapper
│   │   ├── Components/
│   │   │   ├── BlogCard.jsx        # Blog preview card
│   │   │   ├── BlogList.jsx        # Blogs grid with search
│   │   │   ├── Header.jsx          # Homepage header with search
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── Footer.jsx          # Footer section
│   │   │   └── Admin/
│   │   │       ├── Login.jsx       # Admin login form
│   │   │       ├── Sidebar.jsx     # Admin menu
│   │   │       ├── BlogTableItem.jsx
│   │   │       └── CommentTableItem.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx      # Global state management
│   │   ├── assets/
│   │   │   └── assets.js           # Images & constants
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx                # React entry point
│   └── package.json
│
├── server/                          # Backend (Node + Express)
│   ├── models/
│   │   ├── blogs.js                # Blog schema
│   │   └── Comment.js              # Comment schema
│   ├── controllers/
│   │   ├── blogController.js       # Blog logic
│   │   └── adminController.js      # Admin logic
│   ├── routes/
│   │   ├── blogRoutes.js           # Blog endpoints
│   │   └── adminRoutes.js          # Admin endpoints
│   ├── middleware/
│   │   ├── auth.js                 # JWT verification
│   │   └── multer.js               # File upload config
│   ├── configs/
│   │   ├── db.js                   # MongoDB connection
│   │   └── imageKit.js             # ImageKit config
│   ├── server.js                   # Express app setup
│   └── package.json
│
└── README.md                        # This file
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Blog Endpoints

#### Get All Published Blogs
```
GET /blog/all
```
**Response:**
```json
{
  "success": true,
  "blogs": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Getting Started with React",
      "category": "Tech",
      "image": "https://...",
      "isPublished": true,
      "createdAt": "2024-02-17T10:30:00Z"
    }
  ]
}
```

#### Get Single Blog
```
GET /blog/:blogId
```

#### Add Comment
```
POST /blog/add-comment
Content-Type: application/json

{
  "blogId": "507f...",
  "name": "John Doe",
  "content": "Great post!"
}
```

#### Get Blog Comments
```
POST /blog/comments
Content-Type: application/json

{
  "blogId": "507f..."
}
```

### Admin Endpoints (Require Authentication)

#### Admin Login
```
POST /admin/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### Create Blog (Protected)
```
POST /blog/add
Authorization: <token>
Content-Type: multipart/form-data

{
  "blog": {
    "title": "...",
    "subTitle": "...",
    "description": "...",
    "category": "Tech",
    "isPublished": true
  },
  "image": <file>
}
```

#### Get All Blogs (Admin)
```
GET /admin/blogs
Authorization: <token>
```

#### Toggle Publish Status
```
POST /blog/toggle-publish
Authorization: <token>
Content-Type: application/json

{
  "id": "507f..."
}
```

#### Delete Blog
```
POST /blog/delete
Authorization: <token>
Content-Type: application/json

{
  "id": "507f..."
}
```

#### Get All Comments
```
GET /admin/comments
Authorization: <token>
```

#### Approve Comment
```
POST /admin/approve-comment
Authorization: <token>
Content-Type: application/json

{
  "id": "507f..."
}
```

#### Delete Comment
```
POST /admin/delete-comment
Authorization: <token>
Content-Type: application/json

{
  "id": "507f..."
}
```

#### Get Dashboard
```
GET /admin/dashboard
Authorization: <token>
```

---

## 🎨 Customization

### Change Admin Credentials
Edit `server/.env`:
```env
ADMIN_EMAIL=yournewemail@example.com
ADMIN_PASSWORD=yournewpassword
```

### Change Blog Categories
Edit `client/src/assets/assets.js`:
```javascript
export const blogCategories = [
  'All',
  'Your Category 1',
  'Your Category 2',
  // ...
];
```

### Customize Colors & Styling
- Tailwind config: `client/tailwind.config.js`
- Global styles: `client/src/index.css`
- Component styles: Inline Tailwind classes in `.jsx` files

---

## 🚀 Deployment

### Deploy Frontend to Vercel

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Set environment variable:
   ```
   VITE_BASE_URL=https://your-backend-url.com
   ```
5. Deploy!

### Deploy Backend to Railway/Render

**Railway:**
1. Connect your GitHub repository
2. Add environment variables
3. Railway auto-detects Node.js and deploys

**Render:**
1. Create new Web Service
2. Connect GitHub repo
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variables
6. Deploy!

### Update Frontend After Deploying Backend
```env
VITE_BASE_URL=https://your-deployed-backend-url.com
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Mac/Linux

# Kill the process
taskkill /PID <PID> /F        # Windows
kill -9 <PID>                 # Mac/Linux
```

### MongoDB Connection Error
- ✅ Check connection string in `.env`
- ✅ Ensure MongoDB Atlas cluster is active
- ✅ Check IP whitelist includes your IP address
- ✅ Verify username & password in connection string

### CORS Errors
- ✅ Ensure backend CORS is properly configured
- ✅ Check `VITE_BASE_URL` matches backend URL
- ✅ Backend must be running before frontend requests

### Image Upload Issues
- ✅ Verify ImageKit credentials in `.env`
- ✅ Check image file size (max 50MB)
- ✅ Ensure correct ImageKit project is configured

### Login Not Working
- ✅ Check admin credentials in `.env`
- ✅ Verify JWT_SECRET is set
- ✅ Check server console for error messages
- ✅ Clear browser localStorage and try again

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code structure
- Use meaningful commit messages
- Test your changes before submitting PR
- Update documentation if needed
- Keep code clean and commented

---

## 📝 Code of Conduct

Be respectful and constructive. We value all contributions and want to foster an inclusive community!

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support & Questions

- **Issues**: Open a [GitHub Issue](https://github.com/yourusername/NeuraBlog/issues)
- **Discussions**: Join [GitHub Discussions](https://github.com/yourusername/NeuraBlog/discussions)
- **Email**: your-email@example.com

---

## 🎉 Features Coming Soon

- [ ] Rich media gallery support
- [ ] User comments with nested replies
- [ ] Email notifications for admins
- [ ] SEO optimization tools
- [ ] Social media sharing
- [ ] Post scheduling
- [ ] Analytics dashboard
- [ ] Dark mode theme
- [ ] Multi-language support

---

## 📊 Project Stats

- **Total Files**: 20+
- **Backend Routes**: 14+
- **Frontend Pages**: 8+
- **Components**: 10+
- **Database Models**: 2

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your-email@example.com
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- Thanks to the React community for amazing tools
- Tailwind CSS for beautiful styling
- MongoDB for reliable database
- ImageKit for image optimization
- All contributors and users who support this project!

---

<div align="center">

**[⬆ back to top](#-neurablog---your-personal-blogging-platform)**

Made with ❤️ by You

</div>

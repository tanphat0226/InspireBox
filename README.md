# 🌟 InspireBox

InspireBox is a web application designed to help users store, manage, and receive random motivational messages to stay inspired every day.  

## 🚀 Live Demo  
> [Link demo](https://inspire-box.vercel.app/)

## 🛠️ Tech Stack 

- **Frontend Framework**: React.js (Vite)  
- **Styling**: Tailwind CSS  
- **State Management**: Redux
- **API Communication**: Axios  

## 🎯 Features  

✅ Users can add, edit, delete, and view their saved motivational messages.  
✅ Random message generation for daily inspiration.  
✅ Responsive and modern UI for seamless user experience.  
✅ Integration with a backend API for data persistence.  

## 📦 Installation
### 1️⃣ Clone the repository
```bash
git clone https://github.com/tanphat0226/InspireBox.git
cd InspireBox
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Configuring API Root in `src/utils/constant.js`
[Link Server Code](https://github.com/tanphat0226/message_box_be)

The `API_ROOT` constant is used to define the base URL for API requests, adapting to different environments.
Code Snippet

```javascript
let API_ROOT = ''

if (import.meta.env.MODE === 'development') {
  API_ROOT = 'your localhost server'
} else if (import.meta.env.MODE === 'production') {
  API_ROOT = 'can skip it'
}

export { API_ROOT }
```
Explanation:
  * Development Mode (`import.meta.env.MODE === 'development'`):
    Set `API_ROOT` to your local backend server (e.g., `http://localhost:5000`).
  * Production Mode (`import.meta.env.MODE === 'production'`):
    No need to set `API_ROOT` explicitly since production configurations often handle this elsewhere.

### 4️⃣ Start the development server
```bash
npm run dev
```
## 🤝 Contribution
Feel free to contribute by opening issues or pull requests. Any feedback is appreciated!

## 📄 License
This project is open-source and available under the MIT License.

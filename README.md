# Smart Parking IoT 🚗📡

A real-time parking slot monitoring system built with **Raspberry Pi**, **IR sensors**, **Firebase**, and a **React + Vite** web dashboard.
The system detects available parking spots through IoT hardware and updates the web interface in real time.

## 🔗 Live Demo

👉 **Visit the website:**  
https://smartparkingi0t.netlify.app/

---

## 🧠 How It Works (IoT Overview)

- A **Raspberry Pi** collects data from **IR sensors** installed in each parking spot.
- The Pi processes signal to determine if a spot is **occupied** or **available**.
- Sensor data is sent to **Firebase Firestore**.
- The React web app listens for real-time updates and displays the current parking status instantly.

Hardware used:

- Raspberry Pi
- IR sensors
- Jumper cables & power supply
- Firebase as real-time backend

---

## 🚀 Features

- Real-time parking spot detection
- Firebase integration (Firestore, Auth, Storage)
- Modern UI built with React + Vite
- Responsive design
- Easy to scale for real IoT hardware
- Secure environment variable handling for deployment

---

## 🛠️ Technologies Used

- **React (Vite)**
- **Firebase**
- **JavaScript**
- **Netlify** (deployment)
- **CSS / Custom styles**

---

## 🔧 Environment Variables

Create a `.env` file at the root of your project and include:
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID

Make sure **not to commit** your `.env` file to GitHub.  
Use `.gitignore` to keep it private.

---

## 📦 Installation & Setup

Clone the repository:
git clone https://github.com/your-username/smart-parking-iot.git

cd smart-parking-iot

Install dependencies:
npm install

Run the development server:
npm run dev

Build for production:
npm run build

---

## 📚 Project Structure

smart-parking-iot/
│── public/
│── src/
│ ├── components/
│ ├── firebase/
│ ├── pages/
│ ├── App.jsx
│ ├── main.jsx
│── .env
│── package.json
│── vite.config.js

---

## 🤝 Contributing

Pull requests are welcome!  
Feel free to open issues to suggest improvements or report bugs.

---

## 📄 License

This project is open-source under the **MIT License**.

---

## 🌐 Author

Developed by **Álvaro González**  
GitHub: _alvarogonmar_

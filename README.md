# 📦 E-Commerce Digital Product – Paket Data Internet

## 📌 Overview

Project ini merupakan simulasi redesign website pembelian paket data internet untuk meningkatkan:

* Conversion rate
* Page per visit
* Kecepatan checkout

Aplikasi ini dibangun menggunakan pendekatan modern frontend dengan fokus pada:

* Scalability
* Maintainability
* User Experience (UX)

---

## 🧱 Tech Stack

* React 18 (Vite)
* Redux Toolkit (State Management)
* Ant Design (UI Components)
* Tailwind CSS (Styling)
* Axios (HTTP Client)
* React Query
* json-server (Mock Backend)

---

## 🚀 Cara Menjalankan Project

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan frontend

```bash
npm run dev
```

### 3. Jalankan mock API

```bash
json-server --watch db.json --port 3001
```

### 4. Akses aplikasi

```
http://localhost:5173
```

---

## 📁 Struktur Project

```
src/
├── app/                # Redux store
├── features/           # Redux slices per feature
│   ├── auth/
│   ├── packages/
│   └── transactions/
│
├── pages/              # Halaman utama
│   ├── Login
│   ├── Dashboard
│   ├── PackageList
│   ├── PackageDetail
│   ├── Checkout
│   └── History
│
├── components/         # Reusable components
│   ├── common/         # Loading, Error, Empty state
│   └── ui/             # UI components (Card, Filter, dll)
│
├── hooks/              # Custom hooks
├── services/           # API layer (axios)
├── routes/             # Routing config
├── utils/              # Helper functions
```

---

## 🧠 Design Decisions

### 1. Redux Toolkit

Digunakan untuk mengelola global state seperti:

* Authentication

**Alasan:**

* Menghindari prop drilling
* Mempermudah state sharing antar halaman
* Lebih scalable untuk aplikasi kompleks

**Trade-off:**

* Lebih kompleks dibanding useState / Context

---

### 2. Axios sebagai HTTP Client

**Alasan:**

* Mendukung interceptor
* Lebih clean dibanding fetch
* Mudah untuk extend (auth header, error handling)

---

### 3. Service Layer (API Abstraction)

Semua request API dipisahkan ke dalam layer `services`.

**Alasan:**

* Separation of concern
* Mudah testing & maintenance
* Mudah mengganti backend di masa depan

---

### 4. Struktur Feature-Based

Menggunakan pendekatan modular berdasarkan feature (auth, packages, transactions)

**Alasan:**

* Mudah scale
* Kode lebih terorganisir
* Cocok untuk tim besar

---

## 👤 UX & User Flow

### Target User

* Pengguna aktif internet (18–40 tahun)
* Sering membeli paket data
* Membutuhkan proses cepat & praktis

---

### Pain Points

* Terlalu banyak pilihan paket
* Sulit membandingkan
* Checkout lama
* Tidak ada rekomendasi

---

### UX Improvements

* Filter cepat (provider, harga, kuota)
* Highlight paket terbaik

---

### User Flow

```
Login → Dashboard → Browse Package → Detail → Checkout → Success → History
```

---

### Strategi Meningkatkan Page per Visit

* Rekomendasi berdasarkan history
* Navigasi cepat antar paket
* Pagination + eksplorasi data

---

## ⚙️ Core Features

* ✅ Login (dummy authentication)
* ✅ Dashboard user
* ✅ List paket data (pagination)
* ✅ Filter (provider, harga, kuota)
* ✅ Detail paket

---

## 🧪 Engineering Quality

### State Handling

* Loading state → Skeleton / Spinner
* Error state → Retry mechanism

---

### Form Validation

Menggunakan validasi dari Ant Design:

* Required field

---

### Component Reusability

* PackageCard
* FilterBar

---

### Menghindari Prop Drilling

* Menggunakan Redux Toolkit

---


## 🧠 State Management Strategy

### Global State (Redux)

* Auth

### Local State (useState)

* Form input
* UI state (modal, filter)

---

### Menghindari Unnecessary Re-render

* Selector spesifik

---

### Handling Race Condition

Contoh kasus: user klik checkout 2x

Solusi:

* Disable button saat loading

---

### 1. API Lambat (>3 detik)

* Skeleton loading
* Loading indicator
* Feedback ke user

---


## ⏱️ Estimasi Waktu Pengerjaan

| Task          | Estimasi |
| ------------- | -------- |
| Setup project | 1 jam    |
| UX design     | 1 jam    |
| Core features | 1 jam  |
| Enhancement   | 0.5 jam  |

**Total: 3.5 jam**

---

## ⚖️ Trade-offs

* Tidak menggunakan backend real (menggunakan json-server)
* Tidak menggunakan SSR (fokus SPA)
* Fokus pada UX dan frontend architecture

---

## 📹 Recording

Selama pengerjaan dilakukan screen recording yang menjelaskan:

* Proses development
* Alasan teknis
* Flow aplikasi

---

## 📌 Kesimpulan

Project ini dirancang dengan pendekatan scalable frontend architecture, dengan fokus pada:

* User experience
* Performance
* Clean code & maintainability

---

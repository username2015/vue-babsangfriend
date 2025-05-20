// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 🔐 여기에 본인의 Firebase 콘솔에서 발급받은 설정을 넣어줘
const firebaseConfig = {
  apiKey: 'AIzaSyB85dCgcOyQpuX0WkAk6nFBGeT13B1F5qY',
  authDomain: 'babsangfriend.firebaseapp.com',
  projectId: 'babsangfriend',
  storageBucket: 'babsangfriend.firebasestorage.app',
  messagingSenderId: '368052976949',
  appId: '1:368052976949:web:7d07cbc5f2d9b5ea9ee07c',
  measurementId: 'G-N7WXHJEKCT',
};

// 🔥 Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// 🔐 Firebase 인증(Auth) 모듈 가져오기
const auth = getAuth(app);

// 🔥 Firestore 데이터베이스 가져오기
const db = getFirestore(app);

// 다른 곳에서 쓸 수 있도록 export
export { app, auth, db };

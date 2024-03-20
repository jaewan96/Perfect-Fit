// App.tsx
import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/accounts/Login.tsx";
import "./App.css";
import Access from "./pages/accounts/Access.tsx";
import Information from "./pages/accounts/Information.tsx";
import Voicetraining from "./pages/accounts/Voicetraining.tsx";
import KakaoRedirect from "./components/accounts/KakaoRedirect.tsx";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/oauth" element={<KakaoRedirect />} />
        <Route path="/access" element={<Access />} />
        <Route path="/information" element={<Information />} />
        <Route path="/voicetraining" element={<Voicetraining />} />
        {/* 로그인 상태에 따라 수정하기 // 중첩 라우팅 사용하기 */}
        <Route path="/layout" element={<Layout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
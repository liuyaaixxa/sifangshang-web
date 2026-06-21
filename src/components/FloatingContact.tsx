"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col items-end gap-3">
      {/* Expanded panel */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-2 w-72 animate-fade-in-up border border-gray-100">
          <div className="text-center mb-4">
            <img
              src="/wechat-qr.png"
              alt="微信扫码联系"
              className="w-40 h-40 mx-auto rounded-xl border border-gray-100"
            />
            <p className="text-sm font-bold text-gray-800 mt-3">微信扫码联系</p>
            <p className="text-xs text-gray-400 mt-1">扫一扫添加微信</p>
          </div>
          <div className="space-y-2 pt-3 border-t border-gray-100">
            <a
              href="tel:400-XXX-XXXX"
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-50"
            >
              <span className="text-lg">📞</span>
              <span>400-XXX-XXXX</span>
            </a>
            <a
              href="mailto:info@sifangshang.com"
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-50"
            >
              <span className="text-lg">📧</span>
              <span>info@sifangshang.com</span>
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #07C160, #06AD56)",
          boxShadow: "0 4px 20px rgba(7,193,96,0.4)",
        }}
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.932 2.564 2.816 3.545 4.984 3.92.058.01.114.025.172.034a7.06 7.06 0 002.118-.006l1.462.856a.304.304 0 00.157.042.276.276 0 00.271-.275c0-.066-.027-.132-.045-.197l-.305-1.141a.552.552 0 01.198-.62c1.408-.993 2.39-2.407 2.39-3.986 0-2.956-1.958-5.03-4.342-6.633zm-1.481 3.241c.492 0 .89.407.89.908a.899.899 0 01-.89.908.899.899 0 01-.89-.908c0-.5.398-.908.89-.908zm4.222 0c.492 0 .89.407.89.908a.899.899 0 01-.89.908.899.899 0 01-.89-.908c0-.5.399-.908.89-.908z" />
          </svg>
        )}
      </button>
    </div>
  );
}

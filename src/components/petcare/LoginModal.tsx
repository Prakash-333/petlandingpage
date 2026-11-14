'use client';
import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
    setTimeout(() => {
      setLoggedIn(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-[28px] max-w-sm w-full p-6 sm:p-8 shadow-2xl border border-[#f3ede4] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6b7280] hover:text-[#111827] hover:bg-[#faf8f5] transition-colors"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {loggedIn ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#faeedd] flex items-center justify-center mb-3">
              <User size={28} className="text-[#111827]" />
            </div>
            <h3 className="text-xl font-bold text-[#111827]">Welcome back!</h3>
            <p className="mt-1 text-sm text-[#6b7280]">Redirecting to your PetCare portal...</p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/petcare/paw-black.svg" alt="" className="w-6 h-6" />
              <span className="text-[20px] font-extrabold text-[#111827]">PetCare</span>
            </div>
            <h3 className="text-xl font-bold text-[#111827]">Client Login</h3>
            <p className="text-sm text-[#6b7280] mt-0.5 mb-5">Access your pet dashboard and care schedules.</p>

            <form onSubmit={handleLogin} className="space-y-3.5">
              <div>
                <label className="block text-[12.5px] font-semibold text-[#374151] mb-1">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#faf8f5] border border-[#e5e7eb] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827]/10 focus:border-[#111827]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12.5px] font-semibold text-[#374151] mb-1">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#faf8f5] border border-[#e5e7eb] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827]/10 focus:border-[#111827]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 bg-[#111827] hover:bg-black text-white font-semibold rounded-full text-sm shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}


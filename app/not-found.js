"use client"
import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router=useRouter()
  return (
    <div className="min-h-screen bg-black  flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        
        <h1 className="text-8xl animate-bounce font-bold text-gray-300 mb-4">
          404
        </h1>

        
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page youre looking for doesn&apos;t exist.
        </p>

    
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={()=>router.push("/")} className="flex items-center duration-500 justify-center gap-2 cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Home className="w-4 h-4" />
            Go Home
          </button>

          <button onClick={()=>router.back()} className="flex items-center justify-center cursor-pointer duration-700 gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
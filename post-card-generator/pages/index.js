import React, { useState } from 'react';
import PostCardForm from '../components/PostCardForm';
import StyledPost from '../components/StyledPost';

export default function Home() {
  const [postData, setPostData] = useState({
    postNumber: '03',
    title: '深夜反思',
    content: '吃太辣的后果：从美食到失眠，从享受到煎熬。深夜胃痛的经历，让我们思考如何在享受美食的同时，也要关注身体的感受。',
    authorName: '小美',
    authorHandle: '@xiaomei_'
  });

  const handleFormSubmit = (formData) => {
    setPostData(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Social Media Post Card Generator
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side: Form */}
          <div className="bg-white rounded-lg shadow">
            <PostCardForm onSubmit={handleFormSubmit} />
          </div>
          
          {/* Right side: Preview */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Preview</h2>
            <div className="border rounded-lg">
              <StyledPost {...postData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import React from 'react';

const StyledPost = ({ 
  postNumber = "03",
  title = "深夜反思",
  content = "吃太辣的后果：从美食到失眠，从享受到煎熬。深夜胃痛的经历，让我们思考如何在享受美食的同时，也要关注身体的感受。",
  authorName = "小美",
  authorHandle = "@xiaomei_"
}) => {
  return (
    <div className="max-w-2xl p-8 font-sans relative">
      <div className="mb-8">
        <span className="text-blue-600 text-7xl font-bold">{postNumber}</span>
      </div>
      
      <div className="mb-6">
        <h1 className="text-emerald-600 text-5xl font-bold mb-4">{title}</h1>
        <p className="text-emerald-600 text-xl leading-relaxed">
          {content}
        </p>
      </div>

      <div className="mt-12">
        <div className="text-emerald-700">
          <h2 className="text-xl font-semibold">{authorName}</h2>
          <p className="text-lg">{authorHandle}</p>
        </div>
      </div>
      
      <div className="absolute top-4 right-4">
        <div className="w-12 h-12 rounded-full bg-red-500"></div>
      </div>
      
      <div className="absolute bottom-4 right-4">
        <div className="text-red-500 text-6xl">"</div>
      </div>
    </div>
  );
};

export default StyledPost;
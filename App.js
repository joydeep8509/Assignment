import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function PortfolioAssignment() {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop'
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const aboutContent = `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`;

  const experiencesContent = `I have over 3 years of experience in sales at Salesforce, specializing in enterprise solutions and customer relationship management. 

My expertise includes:
• Enterprise Software Sales
• Customer Success Management
• Team Leadership & Training
• Strategic Account Planning

Prior to Salesforce, I worked in tech sales for 5 years, consistently exceeding quotas and building lasting client relationships.`;

  const recommendedContent = `Recommended Tools & Resources:

• Salesforce CRM Platform
• LinkedIn Sales Navigator
• Slack for Team Communication
• Zoom for Virtual Meetings
• HubSpot Sales Hub

I highly recommend these tools for anyone in sales or customer success roles. They've been instrumental in my success over the years.`;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddImage = () => {
    const newImageUrl = prompt('Enter image URL:');
    if (newImageUrl) {
      setImages([...images, newImageUrl]);
    }
  };

  const getContent = () => {
    switch (activeTab) {
      case 'about':
        return aboutContent;
      case 'experiences':
        return experiencesContent;
      case 'recommended':
        return recommendedContent;
      default:
        return aboutContent;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Empty Space (as per requirements) */}
          <div className="hidden lg:block"></div>

          {/* Right Side - Two Widgets */}
          <div className="space-y-6">
            {/* Widget 1: About Me / Experiences / Recommended */}
            <div className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Help Icon */}
              <div className="flex justify-between items-start p-6 pb-0">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-600 cursor-pointer transition-colors">
                  ?
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 px-6 pt-4">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-8 py-3 rounded-2xl font-medium transition-all ${
                    activeTab === 'about'
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab('experiences')}
                  className={`px-8 py-3 rounded-2xl font-medium transition-all ${
                    activeTab === 'experiences'
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  Experiences
                </button>
                <button
                  onClick={() => setActiveTab('recommended')}
                  className={`px-8 py-3 rounded-2xl font-medium transition-all ${
                    activeTab === 'recommended'
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  Recommended
                </button>
              </div>

              {/* Content Area */}
              <div className="p-6 pt-8">
                <div className="bg-gray-900 rounded-2xl p-6 max-h-64 overflow-y-auto custom-scrollbar">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {getContent()}
                  </p>
                </div>
              </div>
            </div>

            {/* Widget 2: Gallery */}
            <div className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Help Icon and Gallery Header */}
              <div className="flex justify-between items-center p-6">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-600 cursor-pointer transition-colors">
                  ?
                </div>
                <div className="flex-1 flex justify-center">
                  <button className="bg-gray-900 px-8 py-3 rounded-2xl font-semibold text-white shadow-lg">
                    Gallery
                  </button>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Add Image Button and Navigation */}
              <div className="flex justify-between items-center px-6 pb-4">
                <button
                  onClick={handleAddImage}
                  className="flex items-center gap-2 px-6 py-2 bg-gray-900 hover:bg-gray-950 rounded-full text-white font-medium transition-all shadow-lg"
                >
                  <Plus size={20} />
                  ADD IMAGE
                </button>
                <div className="flex gap-4">
                  <button
                    onClick={handlePrevImage}
                    className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-full flex items-center justify-center shadow-xl transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-full flex items-center justify-center shadow-xl transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Gallery Images */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-3 gap-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-2xl overflow-hidden shadow-lg transition-all cursor-pointer ${
                        index === currentImageIndex
                          ? 'ring-4 ring-blue-500 scale-105'
                          : 'hover:scale-105'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
}
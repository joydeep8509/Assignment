import React, { useState } from 'react';

const PortfolioAssignment = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop'
  ]);

  const handleAddImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newImage = `https://images.unsplash.com/photo-161800000000${randomId}?w=400&h=300&fit=crop`;
    setImages([...images, newImage]);
  };

  const scrollGallery = (direction) => {
    const gallery = document.getElementById('gallery-container');
    const scrollAmount = 320;
    if (gallery) {
      gallery.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      <div className="container-fluid vh-100 bg-dark text-light p-0">
        <div className="row g-0 h-100">

          {/* Left Side - Empty Space */}
          <div className="col-12 col-lg-5 bg-dark"></div>

          {/* Right Side - Portfolio Widgets */}
          <div className="col-12 col-lg-7 p-4 d-flex flex-column justify-content-center align-items-center gap-4">
            
            {/* About Me Widget */}
            <div className="card bg-dark border-0 shadow-lg w-100" style={{ maxWidth: '720px', borderRadius: '20px' }}>
              <div className="card-body p-0">
                {/* Tabs */}
                <div className="d-flex bg-black rounded-top" style={{ borderRadius: '20px 20px 0 0' }}>
                  <button
                    className={`btn flex-fill py-3 fw-semibold ${activeTab === 'about' ? 'bg-secondary text-white' : 'bg-transparent text-secondary'}`}
                    style={{ 
                      borderRadius: '20px 0 0 0',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setActiveTab('about')}
                  >
                    About Me
                  </button>
                  <button
                    className={`btn flex-fill py-3 fw-semibold ${activeTab === 'experiences' ? 'bg-secondary text-white' : 'bg-transparent text-secondary'}`}
                    style={{ 
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setActiveTab('experiences')}
                  >
                    Experiences
                  </button>
                  <button
                    className={`btn flex-fill py-3 fw-semibold ${activeTab === 'recommended' ? 'bg-secondary text-white' : 'bg-transparent text-secondary'}`}
                    style={{ 
                      borderRadius: '0 20px 0 0',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setActiveTab('recommended')}
                  >
                    Recommended
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-4" style={{ minHeight: '280px', maxHeight: '280px', overflowY: 'auto' }}>
                  {activeTab === 'about' && (
                    <div className="text-secondary">
                      <p className="mb-3">
                        Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this 
                        awesome company for 3 years now.
                      </p>
                      <p>
                        I was born and raised in Albany, NY & have been living in Santa Carla for the past 
                        10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them 
                        are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'experiences' && (
                    <div className="text-secondary">
                      <p className="mb-3">
                        <strong>Senior Sales Executive</strong> - Salesforce (2021-Present)
                      </p>
                      <p className="mb-3">
                        Led enterprise sales initiatives, managing a portfolio of Fortune 500 clients. 
                        Achieved 150% of quota for three consecutive years.
                      </p>
                      <p>
                        <strong>Sales Manager</strong> - Tech Solutions Inc. (2018-2021)
                      </p>
                      <p>
                        Managed a team of 12 sales representatives, implementing strategic processes that 
                        increased team performance by 40%.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'recommended' && (
                    <div className="text-secondary">
                      <p className="mb-3">
                        "Dave is an exceptional sales professional who consistently exceeds expectations. 
                        His dedication to understanding client needs is unmatched."
                      </p>
                      <p className="mb-2">- Sarah Johnson, VP of Sales</p>
                      <hr className="my-3 border-secondary" />
                      <p className="mb-3">
                        "Working with Dave has been a pleasure. He brings energy and expertise to every 
                        interaction."
                      </p>
                      <p>- Michael Chen, Director of Operations</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Widget */}
            <div className="card bg-dark border-0 shadow-lg w-100" style={{ maxWidth: '720px', borderRadius: '20px' }}>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <span className="bg-secondary rounded-circle d-inline-block" style={{ width: '8px', height: '8px' }}></span>
                    <h5 className="mb-0 text-white fw-bold">Gallery</h5>
                  </div>
                  
                  <div className="d-flex gap-3 align-items-center">
                    <button 
                      className="btn btn-sm text-white fw-semibold shadow-sm"
                      style={{ 
                        background: 'linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)',
                        borderRadius: '20px',
                        padding: '8px 20px',
                        border: 'none',
                        fontSize: '12px'
                      }}
                      onClick={handleAddImage}
                    >
                      + ADD IMAGE
                    </button>
                    
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-sm rounded-circle shadow-sm"
                        style={{ 
                          width: '40px', 
                          height: '40px',
                          background: 'linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)',
                          border: 'none',
                          color: 'white'
                        }}
                        onClick={() => scrollGallery('left')}
                      >
                        ←
                      </button>
                      <button 
                        className="btn btn-sm rounded-circle shadow-sm"
                        style={{ 
                          width: '40px', 
                          height: '40px',
                          background: 'linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)',
                          border: 'none',
                          color: 'white'
                        }}
                        onClick={() => scrollGallery('right')}
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Gallery Images */}
                <div 
                  id="gallery-container"
                  className="d-flex gap-3 overflow-auto" 
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {images.map((img, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 rounded-3 overflow-hidden shadow"
                      style={{ 
                        width: '190px', 
                        height: '190px',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${index + 1}`}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/190x190/404040/ffffff?text=Image';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        #gallery-container::-webkit-scrollbar {
          display: none;
        }
        
        .card {
          backdrop-filter: blur(10px);
        }
        
        .btn:focus {
          box-shadow: none !important;
        }
        
        .overflow-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-auto::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 10px;
        }
        
        .overflow-auto::-webkit-scrollbar-thumb {
          background: #404040;
          border-radius: 10px;
        }
        
        .overflow-auto::-webkit-scrollbar-thumb:hover {
          background: #505050;
        }
      `}</style>
    </>
  );
};

export default PortfolioAssignment;

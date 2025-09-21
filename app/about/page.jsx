import { Moon, Volume2, Heart, Users, Shield, Headphones } from 'lucide-react';
export const metadata={
    title:"About"
}
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900">
    
      <div className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Moon className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">SlumberSphere</h1>
          </div>
          <p className="text-xl text-indigo-200">
            Your sanctuary for peaceful sleep and relaxation
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-400 mb-6 text-center">Our Mission</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              At SlumberSphere, we believe that quality sleep is fundamental to well-being. 
              Our mission is to create a peaceful digital environment where you can escape 
              the stresses of daily life and find the tranquility needed for restorative sleep. 
              Through carefully curated soundscapes, we help millions of people worldwide 
              achieve better sleep and wake up refreshed.
            </p>
          </div>
        </section>

      
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-400 mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Volume2 className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-3">Curated Soundscapes</h3>
              <p className="text-gray-600">
                From gentle rain to ocean waves, our extensive library of high-quality sounds 
                are designed to calm your mind and prepare your body for sleep.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Moon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-3">Sleep Timer</h3>
              <p className="text-gray-600">
                Set custom timers to automatically fade out sounds as you drift off, 
                ensuring uninterrupted sleep throughout the night.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Headphones className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-3">Mix & Match</h3>
              <p className="text-gray-600">
                Create personalized sound combinations by layering different audio tracks 
                to craft your perfect sleep environment.
              </p>
            </div>
          </div>
        </section>

       
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-400 mb-8 text-center">Why Choose SlumberSphere?</h2>
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Heart className="w-8 h-8 text-red-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Science-Backed</h3>
                  <p className="text-gray-700">
                    Our sounds are selected based on sleep research and proven to promote relaxation and better sleep quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="w-8 h-8 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Privacy First</h3>
                  <p className="text-gray-700">
                    Your sleep data and preferences remain private. We don't track or store personal information.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-8 h-8 text-blue-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Driven</h3>
                  <p className="text-gray-700">
                    Built based on feedback from our sleep community, continuously improving to meet your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Volume2 className="w-8 h-8 text-purple-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">High Quality Audio</h3>
                  <p className="text-gray-700">
                    Crystal clear, loop-seamless audio recordings that won't disturb your peace with sudden changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready for Better Sleep?</h2>
            <p className="text-lg mb-6 text-indigo-100">
              Join thousands of users who have improved their sleep with SlumberSphere
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Journey to Better Sleep
            </button>
          </div>
        </section>
      </div>

     
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Moon className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">SlumberSphere</span>
          </div>
          <p className="text-gray-400">
            Sweet dreams begin here. © 2025 SlumberSphere. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
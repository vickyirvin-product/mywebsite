import React from 'react';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-12 tracking-tight">
            Coming Soon!
          </h1>
        </div>

        {/* Email Notification */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8 hover:bg-white/10 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-3 text-white">
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 sm:w-64 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 flex items-center gap-2 whitespace-nowrap group">
                Notify Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-teal-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
}

export default App;
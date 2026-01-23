import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Play, X } from 'lucide-react';
import { Project } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 bg-beige-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">Selected Works</h2>
          <p className="text-stone-500 font-sans">A curation of lifestyle, beauty, and wellness content.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer relative aspect-[9/16] overflow-hidden bg-stone-200"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.thumbnailUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <Play className="text-white fill-current w-6 h-6 ml-1" />
                </div>
              </div>

              {/* Text info bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white/80 text-xs uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="text-white font-serif text-xl">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/90 backdrop-blur-sm p-4">
          <button 
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
          >
            <X size={40} strokeWidth={1} />
          </button>
          
          <div className="w-full max-w-sm md:max-w-md aspect-[9/16] bg-black relative">
            {/* In a real app, <video> would go here */}
            <img 
              src={selectedProject.thumbnailUrl} 
              alt={selectedProject.title} 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                <div>
                    <Play size={48} className="mx-auto mb-4 opacity-80" />
                    <p className="font-sans text-sm tracking-widest uppercase mb-2">Now Playing</p>
                    <h3 className="font-serif text-3xl italic">{selectedProject.title}</h3>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

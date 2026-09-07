import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';
import CustomCursor from '@/components/CustomCursor';

import { routes } from './routes';

const App: React.FC = () => {
  // SEO meta tags
  useEffect(() => {
    document.title = 'Royal Green Golf Park — Parcours de golf d\'exception';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Découvrez Royal Green Golf Park, un complexe de golf premium avec 18 trous, restaurant gastronomique, club house et espaces événementiels. Réservez votre partie dès maintenant.');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Découvrez Royal Green Golf Park, un complexe de golf premium avec 18 trous, restaurant gastronomique, club house et espaces événementiels. Réservez votre partie dès maintenant.';
      document.head.appendChild(m);
    }
  }, []);

  return (
    <Router>
      <IntersectObserver />
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <Toaster />
    </Router>
  );
};

export default App;

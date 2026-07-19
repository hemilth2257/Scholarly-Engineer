import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { StudyMaterialsPage } from './pages/StudyMaterialsPage';
import { ProjectHubPage } from './pages/ProjectHubPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-surface selection:bg-secondary-container selection:text-on-secondary-container">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/materials" element={<StudyMaterialsPage />} />
            <Route path="/projects" element={<ProjectHubPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

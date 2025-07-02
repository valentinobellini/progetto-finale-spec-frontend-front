import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CountryDataProvider } from './context/CountryDataContext';
import { CompareProvider } from './context/CompareContext';
import { FavoritesProvider } from './context/FavoriteContext';

import Header from './components/Header';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import ComparePage from './pages/ComparePage';
import FavoritesPage from './pages/FavoritesPage';
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage';
import SourcesPage from './pages/SourcesPage';
import HowToUsePage from './pages/HowToUsePage'
import CreditsPage from './pages/CreditsPage'
import ManifestoPage from './pages/ManifestoPage';




function App() {


  return (
    <>
      <FavoritesProvider>
        <CompareProvider>
          <CountryDataProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/countries/:id" element={<DetailPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/sources" element={<SourcesPage />} />
                <Route path="/howto" element={<HowToUsePage />} />
                <Route path="/credits" element={<CreditsPage />} />
                <Route path="/manifesto" element={<ManifestoPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </CountryDataProvider>
        </CompareProvider>
      </FavoritesProvider>
    </>
  )
}

export default App

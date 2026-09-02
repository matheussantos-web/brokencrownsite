import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Code Splitting: seções abaixo da dobra carregam sob demanda
// (Hero e Navbar permanecem síncronos para pronto-pintura do LCP)
const Guilda = lazy(() => import('./components/Guilda'))
const Conteudos = lazy(() => import('./components/Conteudos'))
const Filosofia = lazy(() => import('./components/Filosofia'))
const Recrutamento = lazy(() => import('./components/Recrutamento'))
const Leis = lazy(() => import('./components/Leis'))
const DiscordSec = lazy(() => import('./components/DiscordSec'))
const Hall = lazy(() => import('./components/Hall'))
const CampoDeBatalha = lazy(() => import('./components/CampoDeBatalha'))

function App() {
  return (
    <div className="noise relative min-h-screen bg-coal-950 text-silver-300">
      <Navbar />
      <main>
        <Hero />
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold-600/40 border-t-gold-400" role="status" aria-label="Carregando" />
            </div>
          }
        >
          <Guilda />
          <Conteudos />
          <Filosofia />
          <Recrutamento />
          <Leis />
          <DiscordSec />
          <CampoDeBatalha />
          <Hall />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App

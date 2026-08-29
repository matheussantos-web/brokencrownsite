import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Guilda from './components/Guilda'
import Conteudos from './components/Conteudos'
import Filosofia from './components/Filosofia'
import Recrutamento from './components/Recrutamento'
import Leis from './components/Leis'
import DiscordSec from './components/DiscordSec'
import Hall from './components/Hall'
import Footer from './components/Footer'

function App() {
  return (
    <div className="noise relative min-h-screen bg-coal-950 text-silver-300">
      <Navbar />
      <main>
        <Hero />
        <Guilda />
        <Conteudos />
        <Filosofia />
        <Recrutamento />
        <Leis />
        <DiscordSec />
        <Hall />
      </main>
      <Footer />
    </div>
  )
}

export default App

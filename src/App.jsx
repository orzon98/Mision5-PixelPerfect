import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pasos from './components/Pasos'
import Planes from './components/Planes'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pasos />
        <Planes />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

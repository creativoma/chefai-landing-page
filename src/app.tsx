import { Canvas } from '@/components/canvas'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'

export const App = () => {
  return (
    <div className="snap-y snap-mandatory">
      <Hero />
      <Canvas />
      <Footer />
    </div>
  )
}

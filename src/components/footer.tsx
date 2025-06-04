import * as motion from 'motion/react-client'
import { useRef } from 'react'

export const Footer = () => {
  const secondSectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <motion.section
      ref={secondSectionRef}
      className="relative z-10 flex h-screen w-full snap-start flex-col items-center justify-center bg-black"
    >
      <div ref={contentRef} className="mx-auto max-w-4xl px-8 text-center">
        <motion.h1
          className="mb-8 text-5xl leading-tight font-bold text-white md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿Listo para revolucionar
          <br />
          <span className="text-[#f54a00]">tu forma de cocinar?</span>
        </motion.h1>
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-xl text-zinc-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Únete a miles de cocineros que ya están creando platos increíbles con
          la ayuda de nuestra inteligencia artificial culinaria.
        </motion.p>
        <motion.div
          className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="rounded-lg bg-[#f54a00] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#f54a00]">
            Empezar a Cocinar con IA
          </button>
          <button className="rounded-lg border border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-black">
            Ver Recetas Populares
          </button>
        </motion.div>
        <div className="mt-16 border-t border-zinc-800 pt-12">
          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <span className="text-xs text-black">🍳</span>
                </div>
                <span className="text-xl font-bold text-white">ChefAI</span>
              </div>
              <p className="text-sm text-zinc-400">
                La plataforma líder en cocina inteligente con IA.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Funciones</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Generador de Recetas
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Análisis Nutricional
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Planificador de Menús
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Lista de Compras IA
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Recetas</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Cocina Mediterránea
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Veganas y Vegetarianas
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Sin Gluten
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Cocina Rápida
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Empresa</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Blog Culinario
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Comunidad
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-800 pt-8 md:flex-row">
            <p className="text-sm text-zinc-400">
              © 2025 ChefAI. Todos los derechos reservados.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <a
                href="#"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

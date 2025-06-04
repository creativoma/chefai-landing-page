import * as motion from 'motion/react-client'
import { useRef } from 'react'
import { useScroll, useTransform } from 'motion/react'

export const Canvas = () => {
  const secondSectionRef = useRef(null)
  const canvasRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: secondSectionRef,
    offset: ['start end', 'end end'],
  })

  const canvasScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 1, 1, 0.7]
  )

  const canvasOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.2, 1, 1, 1]
  )

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  )

  return (
    <motion.section
      ref={secondSectionRef}
      style={{
        opacity: contentOpacity,
      }}
      className="relative flex h-[300vh] w-full snap-start flex-col items-center justify-center bg-zinc-50/20 py-[10vh] backdrop-blur-lg"
    >
      <motion.div
        ref={canvasRef}
        className="sticky top-[10vh] bottom-[10vh] h-[80vh] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl backdrop-blur-md"
        style={{
          scale: canvasScale,
          opacity: canvasOpacity,
          width: '90%',
          maxWidth: '1200px',
        }}
      >
        <div className="flex h-full w-full">
          <div className="flex w-1/2 flex-col justify-center p-16">
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center">
                  <span className="mr-3 text-2xl">🤖</span>
                  <h3 className="text-2xl font-bold text-black">
                    RecipeAI Generator
                  </h3>
                </div>
                <p className="mb-8 text-lg leading-relaxed text-zinc-600">
                  Introduce tus ingredientes y preferencias. Nuestra IA creará
                  recetas únicas adaptadas perfectamente a ti.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 rounded-lg bg-white p-4 shadow-sm">
                    <span className="text-lg">🥕</span>
                    <span className="text-zinc-700">
                      Zanahorias, pollo, arroz
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 rounded-lg bg-white p-3 shadow-sm">
                      <span>⏱️</span>
                      <span className="text-sm text-zinc-600">30 min</span>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg bg-white p-3 shadow-sm">
                      <span>👥</span>
                      <span className="text-sm text-zinc-600">4 personas</span>
                    </div>
                  </div>
                  <button className="w-full rounded-lg bg-[#f54a00] py-4 text-base font-semibold text-white transition-colors hover:bg-[#e44200]">
                    Generar Receta con IA
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 p-16">
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center">
                  <span className="mr-3 text-2xl">📊</span>
                  <h3 className="text-2xl font-bold text-black">
                    SmartNutrition
                  </h3>
                </div>
                <p className="mb-8 text-lg leading-relaxed text-zinc-600">
                  Análisis nutricional completo en tiempo real con sugerencias
                  personalizadas para una alimentación equilibrada.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-zinc-800">
                    Análisis Nutricional
                  </span>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
                    ✓ Balanceado
                  </span>
                </div>
                <div className="mb-6 text-center">
                  <div className="mb-1 text-4xl font-bold text-zinc-800">
                    485
                  </div>
                  <div className="text-sm text-zinc-500">
                    calorías por porción
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-700">
                      Proteínas
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-zinc-200">
                        <div className="h-full w-4/5 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="w-8 text-sm font-semibold text-zinc-800">
                        28g
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-700">
                      Carbohidratos
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-zinc-200">
                        <div className="h-full w-3/5 rounded-full bg-orange-500"></div>
                      </div>
                      <span className="w-8 text-sm font-semibold text-zinc-800">
                        45g
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-700">
                      Grasas
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-zinc-200">
                        <div className="h-full w-2/5 rounded-full bg-green-500"></div>
                      </div>
                      <span className="w-8 text-sm font-semibold text-zinc-800">
                        12g
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 border-t border-zinc-100 pt-4 text-center">
                  <span className="text-sm font-medium text-green-600">
                    🎯 Perfecto para tu objetivo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

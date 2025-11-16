import { useState } from 'react';
import { Heart, Leaf, Brain, Baby, Apple, Dumbbell, Moon, Sparkles } from 'lucide-react';
import { NutritionSection } from './components/NutritionSection';
import { WellnessSection } from './components/WellnessSection';
import { TrimesterGuide } from './components/TrimesterGuide';
import { TipsCards } from './components/TipsCards';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [activeSection, setActiveSection] = useState<'nutrition' | 'wellness' | 'trimester'>('nutrition');

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
              <h1 className="text-pink-600">Gesta+</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveSection('nutrition')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'nutrition'
                    ? 'bg-pink-100 text-pink-700'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                <Apple className="w-5 h-5" />
                <span>Nutrição</span>
              </button>
              <button
                onClick={() => setActiveSection('wellness')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'wellness'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                <span>Bem-Estar</span>
              </button>
              <button
                onClick={() => setActiveSection('trimester')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeSection === 'trimester'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Baby className="w-5 h-5" />
                <span>Por Trimestre</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
                <Leaf className="w-4 h-4" />
                <span className="text-sm">Cuidados para você e seu bebê</span>
              </div>
              <h2 className="text-pink-600">
                Sua jornada de gestação com saúde e amor
              </h2>
              <p className="text-gray-600 text-lg">
                A gestação é uma jornada de transformação e crescimento, marcada pelo desenvolvimento do bebê dentro do útero materno. Este período dura, em média, 40 semanas, sendo dividido em três trimestres — cada um com suas próprias emoções, desafios e necessidades. Nossa missão é cuidar de você e do seu bebê com Orientações especializadas sobre nutrição, saúde mental e bem-estar para todas as fases, oferecendo informações confiáveis e práticas para a sua jornada com saúde e amor.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Apple className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Alimentação</p>
                    <p className="text-gray-800">Balanceada</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Saúde</p>
                    <p className="text-gray-800">Mental</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Dumbbell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Exercícios</p>
                    <p className="text-gray-800">Seguros</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753197273814-d90d4a4cc98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMHdvbWFuJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYzMDAwOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gestante saudável"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
                <p className="text-sm text-gray-600">
                  <span className="text-pink-600">Mais de 50+</span> dicas essenciais para sua gestação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TipsCards />
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Navigation */}
          <div className="md:hidden flex gap-2 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveSection('nutrition')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeSection === 'nutrition'
                  ? 'bg-pink-100 text-pink-700'
                  : 'bg-white text-gray-600'
              }`}
            >
              <Apple className="w-5 h-5" />
              <span>Nutrição</span>
            </button>
            <button
              onClick={() => setActiveSection('wellness')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeSection === 'wellness'
                  ? 'bg-purple-100 text-purple-700'
                  : 'bg-white text-gray-600'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>Bem-Estar</span>
            </button>
            <button
              onClick={() => setActiveSection('trimester')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeSection === 'trimester'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-white text-gray-600'
              }`}
            >
              <Baby className="w-5 h-5" />
              <span>Por Trimestre</span>
            </button>
          </div>

          {/* Content */}
          {activeSection === 'nutrition' && <NutritionSection />}
          {activeSection === 'wellness' && <WellnessSection />}
          {activeSection === 'trimester' && <TrimesterGuide />}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                <h3 className="text-pink-600">Gesta+</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Informações e orientações para uma gestação saudável e feliz.
              </p>
            </div>
            <div>
              <h4 className="text-gray-800 mb-4">Importante</h4>
              <p className="text-gray-600 text-sm">
                As informações deste site são orientativas. Sempre consulte seu médico ou nutricionista 
                para orientações personalizadas.
              </p>
            </div>
            <div>
              <h4 className="text-gray-800 mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  Dicas de sono e descanso
                </li>
                <li className="flex items-center gap-2">
                  <Apple className="w-4 h-4" />
                  Receitas saudáveis
                </li>
                <li className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4" />
                  Exercícios recomendados
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© 2025 Gesta+. Feito com amor para você e seu bebê.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

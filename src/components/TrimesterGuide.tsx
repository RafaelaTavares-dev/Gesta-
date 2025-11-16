import { Baby, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function TrimesterGuide() {
  const trimesterData = [
    {
      trimester: 'Primeiro Trimestre',
      weeks: 'Semanas 1-13',
      color: 'pink',
      icon: Heart,
      babyDevelopment: [
        'Formação dos órgãos principais',
        'Desenvolvimento do coração (começa a bater)',
        'Formação do tubo neural',
        'Início da formação de braços e pernas',
        'Tamanho: de uma semente a uma ameixa'
      ],
      nutrition: [
        'Ácido fólico (400-600 mcg/dia) - ESSENCIAL',
        'Vitamina B6 para náuseas',
        'Alimentos ricos em ferro',
        'Evite alimentos crus ou mal cozidos',
        'Hidrate-se bem'
      ],
      symptoms: [
        'Náuseas e vômitos (especialmente pela manhã)',
        'Fadiga e sonolência',
        'Sensibilidade nos seios',
        'Aumento da frequência urinária',
        'Alterações de humor'
      ],
      tips: [
        'Coma pequenas porções várias vezes ao dia',
        'Evite alimentos gordurosos e condimentados',
        'Descanse sempre que sentir necessidade',
        'Evite odores fortes que possam causar náuseas',
        'Inicie vitaminas pré-natais',
        'Primeira consulta pré-natal e exames iniciais'
      ],
      exercises: [
        'Caminhadas leves',
        'Alongamentos suaves',
        'Yoga para gestantes (iniciar com orientação)',
        'Evitar exercícios de alto impacto'
      ]
    },
    {
      trimester: 'Segundo Trimestre',
      weeks: 'Semanas 14-27',
      color: 'purple',
      icon: Sparkles,
      babyDevelopment: [
        'Bebê começa a se mexer (você sentirá!)',
        'Desenvolvimento dos sentidos',
        'Formação das impressões digitais',
        'Pode ouvir sons externos',
        'Tamanho: de uma laranja a uma couve-flor'
      ],
      nutrition: [
        'Aumento de calorias (300-400 extras/dia)',
        'Cálcio para ossos (1000 mg/dia)',
        'Proteínas para crescimento',
        'Ômega-3 para desenvolvimento cerebral',
        'Fibras para evitar constipação'
      ],
      symptoms: [
        'Náuseas diminuem (trimestre de "lua de mel")',
        'Aumento de energia',
        'Crescimento da barriga visível',
        'Azia e indigestão',
        'Dores nas costas',
        'Linha escura na barriga (linea nigra)'
      ],
      tips: [
        'Aproveite o aumento de energia',
        'Comece a fazer exercícios regulares',
        'Use creme para prevenir estrias',
        'Durma de lado (preferencialmente esquerdo)',
        'Ultrassom morfológico (18-22 semanas)',
        'Converse e cante para o bebê'
      ],
      exercises: [
        'Caminhadas regulares (30 min)',
        'Hidroginástica',
        'Yoga e pilates para gestantes',
        'Exercícios de fortalecimento do assoalho pélvico'
      ]
    },
    {
      trimester: 'Terceiro Trimestre',
      weeks: 'Semanas 28-40',
      color: 'blue',
      icon: Baby,
      babyDevelopment: [
        'Bebê ganha peso rapidamente',
        'Pulmões amadurecem',
        'Órgãos ficam prontos para vida fora do útero',
        'Posiciona-se de cabeça para baixo',
        'Tamanho: de um abacaxi a uma melancia'
      ],
      nutrition: [
        'Continue com alimentação equilibrada',
        'Aumente ingestão de cálcio',
        'Tâmaras (últimas semanas podem ajudar no parto)',
        'Mantenha hidratação',
        'Ômega-3 continua importante'
      ],
      symptoms: [
        'Cansaço aumenta novamente',
        'Falta de ar (bebê pressiona diafragma)',
        'Inchaço nas pernas e pés',
        'Contrações de Braxton Hicks',
        'Dificuldade para dormir',
        'Pressão pélvica',
        'Azia mais frequente'
      ],
      tips: [
        'Descanse com pernas elevadas',
        'Prepare a mala da maternidade (36 semanas)',
        'Faça curso de preparação para o parto',
        'Pratique técnicas de respiração',
        'Organize o quarto do bebê',
        'Massagens para aliviar desconfortos',
        'Consultas mais frequentes com o médico'
      ],
      exercises: [
        'Caminhadas leves',
        'Exercícios na água',
        'Alongamentos suaves',
        'Exercícios para assoalho pélvico',
        'Posições para facilitar o trabalho de parto'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-blue-600">Guia por Trimestre</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Cada fase da gestação traz mudanças únicas. Acompanhe o desenvolvimento do seu bebê 
          e saiba o que esperar em cada trimestre.
        </p>
      </div>

      {/* Trimester Tabs */}
      <Tabs defaultValue="0" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-3xl mx-auto">
          {trimesterData.map((data, index) => {
            const Icon = data.icon;
            return (
              <TabsTrigger key={index} value={index.toString()} className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{index + 1}º Trimestre</span>
                <span className="sm:hidden">{index + 1}º</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {trimesterData.map((data, index) => {
          const Icon = data.icon;
          return (
            <TabsContent key={index} value={index.toString()} className="space-y-6 mt-8">
              {/* Header Card */}
              <Card className={`bg-gradient-to-br from-${data.color}-100 to-${data.color}-50 border-0`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${data.color}-200 rounded-full flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${data.color}-700`} />
                    </div>
                    <div>
                      <CardTitle className={`text-${data.color}-800`}>{data.trimester}</CardTitle>
                      <CardDescription className={`text-${data.color}-700`}>
                        {data.weeks}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Desenvolvimento do Bebê */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-800">
                      <Baby className="w-5 h-5 text-pink-500" />
                      Desenvolvimento do Bebê
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.babyDevelopment.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-700">
                          <span className="text-pink-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Nutrição */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-800">
                      <span className="text-xl">🥗</span>
                      Foco Nutricional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.nutrition.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Sintomas Comuns */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-800">
                      <span className="text-xl">💫</span>
                      Sintomas Comuns
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.symptoms.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Exercícios */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-800">
                      <span className="text-xl">🏃‍♀️</span>
                      Exercícios Recomendados
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.exercises.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-700">
                          <span className="text-purple-500 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Dicas Importantes */}
              <Card className={`bg-${data.color}-50 border-${data.color}-200`}>
                <CardHeader>
                  <CardTitle className={`text-${data.color}-800`}>
                    💡 Dicas Importantes para este Trimestre
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {data.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-gray-700">
                        <span className="text-lg">→</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>

      {/* Timeline Overview */}
      <Card className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border-0">
        <CardHeader>
          <CardTitle className="text-gray-800">Linha do Tempo da Gestação</CardTitle>
          <CardDescription>Resumo visual dos 9 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto flex items-center justify-center">
                <Heart className="w-8 h-8 text-pink-700" />
              </div>
              <h4 className="text-pink-700">1º Trimestre</h4>
              <p className="text-sm text-gray-600">Formação e início</p>
              <p className="text-xs text-gray-500">0-13 semanas</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-purple-700" />
              </div>
              <h4 className="text-purple-700">2º Trimestre</h4>
              <p className="text-sm text-gray-600">Crescimento e movimento</p>
              <p className="text-xs text-gray-500">14-27 semanas</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto flex items-center justify-center">
                <Baby className="w-8 h-8 text-blue-700" />
              </div>
              <h4 className="text-blue-700">3º Trimestre</h4>
              <p className="text-sm text-gray-600">Preparação e maturação</p>
              <p className="text-xs text-gray-500">28-40 semanas</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

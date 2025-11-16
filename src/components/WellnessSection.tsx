import { Heart, Moon, Dumbbell, Smile, Wind, Flower2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WellnessSection() {
  const exercises = [
    {
      name: 'Caminhada',
      duration: '20-30 minutos',
      frequency: '3-5x por semana',
      benefits: ['Melhora circulação', 'Controla peso', 'Reduz inchaço', 'Aumenta energia'],
      tips: 'Use calçados confortáveis e evite horários de sol forte'
    },
    {
      name: 'Yoga para Gestantes',
      duration: '30-45 minutos',
      frequency: '2-3x por semana',
      benefits: ['Aumenta flexibilidade', 'Reduz estresse', 'Melhora postura', 'Prepara para o parto'],
      tips: 'Procure aulas especializadas para gestantes'
    },
    {
      name: 'Hidroginástica',
      duration: '40-50 minutos',
      frequency: '2-3x por semana',
      benefits: ['Alivia dores', 'Fortalece músculos', 'Reduz edemas', 'Baixo impacto'],
      tips: 'A água reduz o peso e protege as articulações'
    },
    {
      name: 'Alongamentos',
      duration: '10-15 minutos',
      frequency: 'Diariamente',
      benefits: ['Alivia tensões', 'Previne cãibras', 'Melhora mobilidade', 'Relaxa'],
      tips: 'Faça movimentos suaves, sem forçar'
    }
  ];

  const mentalHealthTips = [
    {
      title: 'Meditação e Mindfulness',
      description: 'Pratique 10-15 minutos por dia para reduzir ansiedade e conectar-se com seu bebê',
      icon: Flower2,
      color: 'purple'
    },
    {
      title: 'Técnicas de Respiração',
      description: 'Respiração profunda ajuda a controlar estresse e preparar para o trabalho de parto',
      icon: Wind,
      color: 'blue'
    },
    {
      title: 'Conexão Social',
      description: 'Mantenha contato com amigos, família e grupos de gestantes para apoio emocional',
      icon: Smile,
      color: 'pink'
    },
    {
      title: 'Sono de Qualidade',
      description: 'Durma 7-9 horas por noite, use travesseiros de apoio e estabeleça uma rotina',
      icon: Moon,
      color: 'indigo'
    }
  ];

  const sleepTips = [
    'Durma de lado (preferencialmente esquerdo) após o primeiro trimestre',
    'Use travesseiro entre as pernas para conforto',
    'Evite líquidos 2 horas antes de dormir para reduzir idas ao banheiro',
    'Mantenha o quarto fresco, escuro e silencioso',
    'Estabeleça uma rotina relaxante antes de dormir',
    'Evite telas (celular, TV) 1 hora antes de dormir',
    'Faça um lanche leve se sentir fome durante a noite',
    'Pratique técnicas de relaxamento se não conseguir dormir'
  ];

  const stressReduction = [
    {
      activity: 'Banho morno',
      description: 'Relaxa músculos e acalma a mente',
      time: '15-20 min'
    },
    {
      activity: 'Música relaxante',
      description: 'Sons suaves reduzem cortisol',
      time: '20-30 min'
    },
    {
      activity: 'Leitura',
      description: 'Distrai e acalma antes de dormir',
      time: '30 min'
    },
    {
      activity: 'Massagem',
      description: 'Alivia tensões e promove bem-estar',
      time: '30-45 min'
    },
    {
      activity: 'Aromaterapia',
      description: 'Lavanda e camomila promovem relaxamento',
      time: '10-15 min'
    },
    {
      activity: 'Diário da gestação',
      description: 'Expressar sentimentos reduz ansiedade',
      time: '15 min'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-purple-600">Bem-Estar e Qualidade de Vida</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Cuidar da saúde física e mental é essencial para uma gestação tranquila e saudável. 
          Pratique atividades seguras e dedique tempo para relaxar.
        </p>
      </div>

      {/* Hero Images */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1561742139-4b0210a1894d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFuY3klMjB5b2dhJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzYyOTQ1NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Yoga para gestantes"
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758555226115-ceff2d17f251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFuY3klMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2MzAwMDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Meditação"
            className="w-full h-[250px] object-cover"
          />
        </div>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="exercise" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
          <TabsTrigger value="exercise" className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4" />
            <span className="hidden sm:inline">Exercícios</span>
          </TabsTrigger>
          <TabsTrigger value="mental" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span className="hidden sm:inline">Saúde Mental</span>
          </TabsTrigger>
          <TabsTrigger value="sleep" className="flex items-center gap-2">
            <Moon className="w-4 h-4" />
            <span className="hidden sm:inline">Sono</span>
          </TabsTrigger>
        </TabsList>

        {/* Exercícios */}
        <TabsContent value="exercise" className="space-y-6 mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {exercises.map((exercise) => (
              <Card key={exercise.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Dumbbell className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-gray-800">{exercise.name}</CardTitle>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-600">⏱️ {exercise.duration}</span>
                    <span className="text-gray-600">📅 {exercise.frequency}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Benefícios:</p>
                    <ul className="space-y-1">
                      {exercise.benefits.map((benefit) => (
                        <li key={benefit} className="text-sm text-gray-600 flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">💡 {exercise.tips}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800">⚠️ Importante</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p>• Sempre consulte seu médico antes de iniciar qualquer atividade física</p>
              <p>• Pare imediatamente se sentir tontura, falta de ar ou dor</p>
              <p>• Evite exercícios com risco de queda ou impacto abdominal</p>
              <p>• Mantenha-se hidratada durante e após os exercícios</p>
              <p>• Não se exercite em jejum ou em temperaturas extremas</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Saúde Mental */}
        <TabsContent value="mental" className="space-y-6 mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {mentalHealthTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <Card key={tip.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${tip.color}-100 rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 text-${tip.color}-600`} />
                    </div>
                    <CardTitle className="text-gray-800">{tip.title}</CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="space-y-6">
            <h3 className="text-gray-800">Atividades para Reduzir o Estresse</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stressReduction.map((activity) => (
                <Card key={activity.activity}>
                  <CardContent className="pt-6">
                    <div className="text-center space-y-2">
                      <h4 className="text-gray-800">{activity.activity}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-sm text-purple-600">{activity.time}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-0">
            <CardHeader>
              <CardTitle className="text-purple-800">Quando Buscar Ajuda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p>Se você está sentindo:</p>
              <ul className="space-y-1 ml-4">
                <li>• Tristeza persistente por mais de 2 semanas</li>
                <li>• Ansiedade intensa ou ataques de pânico</li>
                <li>• Perda de interesse em atividades que antes gostava</li>
                <li>• Dificuldade para criar vínculo com a gestação</li>
                <li>• Pensamentos negativos recorrentes</li>
              </ul>
              <p className="pt-2">
                <strong>Procure ajuda profissional.</strong> Um psicólogo ou psiquiatra pode ajudar você 
                a atravessar esse período com mais leveza.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sono */}
        <TabsContent value="sleep" className="space-y-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <Moon className="w-6 h-6 text-indigo-600" />
                Dicas para um Sono Melhor
              </CardTitle>
              <CardDescription>
                O sono adequado é essencial para sua recuperação e desenvolvimento do bebê
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {sleepTips.map((tip) => (
                  <div key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">1º Trimestre</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>Comum sentir muito sono. Descanse sempre que possível e tire cochilos durante o dia.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">2º Trimestre</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>Período de mais energia. Aproveite para estabelecer uma boa rotina de sono.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">3º Trimestre</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>Desconforto pode dificultar o sono. Use travesseiros de apoio e encontre posições confortáveis.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-indigo-50 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-indigo-800">Posições para Dormir</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-700">✓ Lado esquerdo (melhor posição)</p>
                  <p className="text-sm text-gray-600">Melhora circulação e nutrição para o bebê</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-700">✓ Lado direito (também seguro)</p>
                  <p className="text-sm text-gray-600">Alterna com o lado esquerdo para conforto</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <div>
                  <p className="text-red-700">✗ De barriga para cima (evitar após 20 semanas)</p>
                  <p className="text-sm text-gray-600">Pode comprimir vasos sanguíneos importantes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

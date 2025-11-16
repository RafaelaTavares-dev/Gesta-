import { Apple, Fish, Milk, Wheat, Droplets, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NutritionSection() {
  const nutrients = [
    {
      icon: Apple,
      name: 'Ácido Fólico',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Essencial para formação do tubo neural do bebê',
      sources: ['Vegetais verde-escuros', 'Feijão', 'Lentilha', 'Laranja', 'Abacate'],
      daily: '400-600 mcg/dia'
    },
    {
      icon: Fish,
      name: 'Ômega-3',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Importante para desenvolvimento cerebral do bebê',
      sources: ['Salmão', 'Sardinha', 'Atum', 'Linhaça', 'Chia'],
      daily: '200-300 mg DHA/dia'
    },
    {
      icon: Milk,
      name: 'Cálcio',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Fundamental para ossos e dentes do bebê',
      sources: ['Leite', 'Iogurte', 'Queijo', 'Brócolis', 'Tofu'],
      daily: '1000 mg/dia'
    },
    {
      icon: Wheat,
      name: 'Ferro',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Previne anemia e garante oxigenação adequada',
      sources: ['Carne vermelha', 'Feijão', 'Espinafre', 'Grão-de-bico'],
      daily: '27 mg/dia'
    },
    {
      icon: Droplets,
      name: 'Hidratação',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100',
      description: 'Mantém volume sanguíneo e líquido amniótico',
      sources: ['Água', 'Água de coco', 'Chás naturais', 'Frutas'],
      daily: '2-3 litros/dia'
    }
  ];

  const avoidFoods = [
    'Carnes cruas ou mal passadas',
    'Peixes com alto teor de mercúrio (tubarão, peixe-espada)',
    'Ovos crus ou mal cozidos',
    'Queijos não pasteurizados',
    'Embutidos e frios sem aquecimento',
    'Álcool em qualquer quantidade',
    'Excesso de cafeína (máx. 200mg/dia)',
    'Adoçantes artificiais em excesso'
  ];

  const mealIdeas = [
    {
      meal: 'Café da Manhã',
      ideas: [
        'Pão integral com queijo branco e mamão',
        'Vitamina de frutas com aveia',
        'Tapioca com ovo e queijo',
        'Iogurte natural com granola e frutas'
      ]
    },
    {
      meal: 'Almoço',
      ideas: [
        'Arroz integral + feijão + frango grelhado + salada',
        'Macarrão integral + molho de tomate + carne moída + legumes',
        'Peixe assado + batata doce + brócolis',
        'Risoto de abóbora + carne desfiada + salada verde'
      ]
    },
    {
      meal: 'Jantar',
      ideas: [
        'Sopa de legumes com frango',
        'Omelete com vegetais + salada',
        'Sanduíche natural + suco natural',
        'Salmão grelhado + quinoa + aspargos'
      ]
    },
    {
      meal: 'Lanches',
      ideas: [
        'Frutas frescas',
        'Mix de castanhas',
        'Iogurte com chia',
        'Torrada integral com abacate'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-pink-600">Nutrição na Gestação</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Uma alimentação equilibrada é fundamental para o desenvolvimento saudável do bebê e 
          o bem-estar da mãe durante toda a gestação.
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642004828344-3196e7f41588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZnJ1aXRzJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NjMwMDA5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Alimentos saudáveis"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Nutrientes Essenciais */}
      <div className="space-y-6">
        <h3 className="text-gray-800">Nutrientes Essenciais</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nutrients.map((nutrient) => {
            const Icon = nutrient.icon;
            return (
              <Card key={nutrient.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${nutrient.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-6 h-6 ${nutrient.color}`} />
                  </div>
                  <CardTitle className="text-gray-800">{nutrient.name}</CardTitle>
                  <CardDescription>{nutrient.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Quantidade Diária:</p>
                      <p className={`${nutrient.color}`}>{nutrient.daily}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Fontes:</p>
                      <ul className="space-y-1">
                        {nutrient.sources.map((source) => (
                          <li key={source} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            {source}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Sugestões de Refeições */}
      <div className="space-y-6">
        <h3 className="text-gray-800">Sugestões de Refeições</h3>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {mealIdeas.map((meal, index) => (
            <AccordionItem
              key={meal.meal}
              value={`item-${index}`}
              className="bg-white rounded-lg px-6 border shadow-sm"
            >
              <AccordionTrigger className="text-gray-800 hover:text-pink-600">
                {meal.meal}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pt-2">
                  {meal.ideas.map((idea) => (
                    <li key={idea} className="text-gray-600 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Alimentos a Evitar */}
      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <CardTitle className="text-red-800">Alimentos a Evitar</CardTitle>
              <CardDescription className="text-red-700">
                Proteja você e seu bebê evitando estes alimentos
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {avoidFoods.map((food) => (
              <div key={food} className="flex items-start gap-2 text-red-800">
                <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{food}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dicas Extras */}
      <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-0">
        <CardHeader>
          <CardTitle className="text-purple-800">Dicas Importantes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Faça refeições menores e mais frequentes (5-6 por dia) para evitar náuseas e 
              manter energia constante
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Mastigue bem os alimentos e coma devagar para melhorar a digestão
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Tome vitaminas pré-natais conforme orientação médica para complementar a alimentação
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              Lave bem frutas e vegetais antes de consumir para evitar contaminação
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

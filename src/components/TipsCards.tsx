import { Droplets, Sun, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function TipsCards() {
  const quickTips = [
    {
      icon: Droplets,
      title: 'Hidrate-se',
      description: 'Beba 2-3 litros de água por dia',
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      icon: Sun,
      title: 'Vitamina D',
      description: 'Tome sol 15 min/dia pela manhã',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: BookOpen,
      title: 'Eduque-se',
      description: 'Leia sobre parto e amamentação',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Apoio Social',
      description: 'Participe de grupos de gestantes',
      color: 'bg-pink-100',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {quickTips.map((tip) => {
        const Icon = tip.icon;
        return (
          <Card key={tip.title} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`w-14 h-14 ${tip.color} rounded-full flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${tip.iconColor}`} />
                </div>
                <h4 className="text-gray-800">{tip.title}</h4>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

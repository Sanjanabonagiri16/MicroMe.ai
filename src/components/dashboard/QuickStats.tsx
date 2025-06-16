
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Heart, Award } from 'lucide-react';

export const QuickStats = () => {
  // In a real app, these would come from your database
  const stats = [
    {
      title: "Lessons Completed",
      value: "12",
      icon: BookOpen,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Mentor Sessions",
      value: "3",
      icon: Users,
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      title: "Community Posts",
      value: "8",
      icon: Heart,
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    },
    {
      title: "Badges Earned",
      value: "5",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

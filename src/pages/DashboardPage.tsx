import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DashboardPage: React.FC = () => {
  const cards = [
    {
      title: "Grades",
      icon: "bi-calculator",
      description: "Manage your grades",
      url: "/grades",
      color: "bg-green-500"
    },
    // Add more cards here if needed
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Welcome to the Academic Manager</h1>
        <p className="text-lg text-gray-600">Select a module to get started</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Link to={card.url} key={index}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <i className={`bi ${card.icon} text-4xl mr-4 ${card.color} p-2 rounded-full text-white`}></i>
                  <CardTitle>{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button>
                  Access
                  <i className="bi bi-arrow-right ml-2"></i>
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;


import React from 'react';
import { Calendar, Clock, MapPin, Music, Users, Utensils } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const EventDetails = () => {
  const eventHighlights = [
    {
      icon: Music,
      title: "Live Entertainment",
      description: "DJ, Live Bands, and Dance Performances"
    },
    {
      icon: Utensils,
      title: "Food & Refreshments",
      description: "Delicious snacks and beverages for all"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Meet seniors, make friends, build connections"
    }
  ];

  return (
    <section id="event-details" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            EVENT <span className="text-orange-400">DETAILS</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get ready for an epic welcome celebration designed to kickstart your college journey!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-orange-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Date & Time</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  <strong className="text-white">Date:</strong> Coming Soon<br />
                  <strong className="text-white">Time:</strong> 6:00 PM onwards
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="text-orange-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Venue</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  <strong className="text-white">Location:</strong> College Auditorium<br />
                  <strong className="text-white">Address:</strong> Main Campus Building
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg p-8 border border-orange-400/30">
            <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Welcome speeches from college administration
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Talent showcase and cultural performances
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Interactive games and fun activities
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Networking session with seniors
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Photo booth and memories capture
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Surprise prizes and giveaways
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {eventHighlights.map((highlight, index) => (
            <Card key={index} className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <highlight.icon className="text-orange-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-300">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

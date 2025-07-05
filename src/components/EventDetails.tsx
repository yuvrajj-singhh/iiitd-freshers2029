
import React from 'react';
import { Calendar, Clock, MapPin, Music, Users, Utensils } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const EventDetails = () => {
  const eventHighlights = [
    {
      icon: Music,
      title: "DJ & Music",
      description: "Professional DJ with the latest beats"
    },
    {
      icon: Utensils,
      title: "Food & Drinks",
      description: "Delicious food and refreshing beverages"
    },
    {
      icon: Users,
      title: "Clubbing Vibes",
      description: "Dance floor with amazing club atmosphere"
    }
  ];

  return (
    <section id="event-details" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-armada">
            EVENT <span className="text-orange-400">DETAILS</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-teachers">
            Get ready for an epic welcome celebration designed to kickstart your college journey!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-orange-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white font-druk-trial">Date & Time</h3>
                </div>
                <p className="text-gray-300 text-lg font-teachers">
                  <strong className="text-white">Date:</strong> Coming Soon<br />
                  <strong className="text-white">Time:</strong> Coming Soon
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="text-orange-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white font-druk-trial">Venue</h3>
                </div>
                <p className="text-gray-300 text-lg font-teachers">
                  <strong className="text-white">Location:</strong> Coming Soon<br />
                  <strong className="text-white">Address:</strong> Coming Soon
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg p-8 border border-orange-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 font-druk-trial">What to Expect</h3>
            <ul className="space-y-4 text-gray-300 font-teachers">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Epic clubbing experience with professional DJ
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Unlimited drinks and delicious food
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Dance floor with amazing lighting and sound
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Meet and connect with fellow freshers
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
                <h4 className="text-xl font-bold text-white mb-2 font-druk-trial">{highlight.title}</h4>
                <p className="text-gray-300 font-teachers">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

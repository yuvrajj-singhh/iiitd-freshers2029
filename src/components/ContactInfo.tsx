
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const contacts = [
    {
      name: "Event Coordinator",
      role: "Main Organizer",
      phone: "+91 XXXXX XXXXX",
      email: "coordinator@college.edu"
    },
    {
      name: "Student Representative",
      role: "Student Affairs",
      phone: "+91 XXXXX XXXXX",
      email: "student.rep@college.edu"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GET IN <span className="text-orange-400">TOUCH</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Have questions? Need more info? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <Card key={index} className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                  <p className="text-orange-400 mb-4">{contact.role}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Phone size={16} className="mr-2 text-orange-400" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail size={16} className="mr-2 text-orange-400" />
                      <span>{contact.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPin size={16} className="mr-2 text-orange-400 mt-1" />
                  <div>
                    <strong className="text-white">College Address:</strong><br />
                    Main Campus Building<br />
                    Your College Name<br />
                    City, State - PIN
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageCircle size={16} className="mr-2 text-orange-400" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg p-8 border border-orange-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-300 mb-6">
              For urgent queries or last-minute information, reach out to us directly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="mr-2" size={16} />
                Call Now
              </Button>
              <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
                <Mail className="mr-2" size={16} />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

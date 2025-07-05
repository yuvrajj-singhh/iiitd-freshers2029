
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    year: '',
    expectations: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    toast({
      title: "Registration Successful! 🎉",
      description: "Welcome to the fresher party! We'll contact you soon with more details.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      year: '',
      expectations: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="register" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            JOIN THE <span className="text-orange-400">CELEBRATION</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Register now to be part of an unforgettable welcome experience!
          </p>
        </div>

        <Card className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-400 text-center">
              Student Registration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white focus:border-orange-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white focus:border-orange-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white focus:border-orange-400"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="year" className="text-white mb-2 block">Academic Year *</Label>
                  <Input
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white focus:border-orange-400"
                    placeholder="1st Year, 2nd Year, etc."
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="course" className="text-white mb-2 block">Course/Department *</Label>
                <Input
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:border-orange-400"
                  placeholder="Computer Science, Engineering, etc."
                />
              </div>

              <div>
                <Label htmlFor="expectations" className="text-white mb-2 block">What are you most excited about?</Label>
                <Textarea
                  id="expectations"
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  className="bg-gray-700 border-gray-600 text-white focus:border-orange-400 min-h-24"
                  placeholder="Share your thoughts about the upcoming fresher party..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                REGISTER FOR THE PARTY 🚀
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StudentRegistration;

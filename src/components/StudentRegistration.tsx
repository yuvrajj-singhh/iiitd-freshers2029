
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://sheetdb.io/api/v1/6toevsxy7w3hb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [formData] }), // SheetDB requires { data: [...] }
      });
  
      if (response.ok) {
        toast({
          title: "Registration Successful! 🎉",
          description: "Welcome to the fresher party! We'll contact you soon with more details.",
        });
        setFormData({ name: '', email: '', phone: '' });
      } else {
        toast({
          title: "Error",
          description: "Could not save your registration. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
      });
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="register" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-druk-trial">
            START YOUR <span className="text-orange-400">NEW FUTURE</span>
          </h2>
          <p className="text-gray-300 text-lg font-teachers">
            Register now to be part of an unforgettable welcome experience!
          </p>
        </div>

        <Card className="bg-gray-800/50 border-orange-400/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-400 text-center font-druk-trial">
              Student Registration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block font-teachers">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:border-orange-400 font-teachers"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block font-teachers">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:border-orange-400 font-teachers"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white mb-2 block font-teachers">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:border-orange-400 font-teachers"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-teachers"
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

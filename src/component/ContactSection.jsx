import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data and sanitize it
    const formData = new FormData(e.target);
    
    const escapeHtml = (str) =>
      String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const templateParams = {
      name: escapeHtml(formData.get("name") || "").substring(0, 100),
      email: escapeHtml(formData.get("email") || "").substring(0, 100),
      subject: escapeHtml(formData.get("subject") || "").substring(0, 200),
      message: escapeHtml(formData.get("message") || "").substring(0, 5000),
      time:
        new Date().toISOString().split("T")[0] +
        " " +
        new Date().toTimeString().split(" ")[0],
      company: "",
      role: "",
    };

    if (isRecruiter) {
      templateParams.company = escapeHtml(formData.get("company") || "").substring(0, 100);
      templateParams.role = escapeHtml(formData.get("role") || "").substring(0, 100);
    }
    
    console.log("Sending with params:", templateParams);
    
    emailjs.send(
      'service_d9of5wm',
      'template_2vv4w6j',
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log("Success:", result);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I will get back to you soon.",
        duration: 3000,
        variant: "success",
      });
      e.target.reset();
    })
    .catch((error) => {
      console.error("Full error object:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        duration: 3000,
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. 
          Whether you have a project in mind, want to discuss ideas, 
          or just want to say hello, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
            
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:naimfitriabdulhalim@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    naimfitriabdulhalim@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+60138299773"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +60 13-829 9773
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <p className="text-muted-foreground">
                    Petaling Jaya, Selangor
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/naim-fitri/">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <div className="flex items-center space-x-2 mb-6">
              <input
                type="checkbox"
                id="recruiter"
                className="rounded border-input"
                onChange={(e) => setIsRecruiter(e.target.checked)}
              />
              <label htmlFor="recruiter" className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                I'm a recruiter reaching out about an opportunity
              </label>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {isRecruiter && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium mb-2">Job Role</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Position offered"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="job_opportunity">Job Opportunity</option>
                      <option value="interview_request">Interview Request</option>
                      <option value="portfolio_feedback">Portfolio Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </>
              )}

              {!isRecruiter && (
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Message subject"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder={isRecruiter ? "Describe the opportunity, requirements, and next steps..." : "Enter your message"}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
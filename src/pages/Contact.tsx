import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Contact Us</h1>
      <p className="text-center text-muted-foreground mb-8">
        Have a question or want to book an appointment? Send us a message and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-2xl shadow-sm border border-border">
        <div>
          <label className="block text-sm font-medium mb-1">Name (optional)</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message *</label>
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..." rows={5} required />
          <p className="text-xs text-muted-foreground mt-2 italic">
            ⚠️ Please do not enter personal or sensitive information in message zone.
          </p>
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;

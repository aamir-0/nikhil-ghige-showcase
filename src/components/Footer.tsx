import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/nikghige", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nikhil-ghige-481457347/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nikhil.ghige23@pcu.edu.in", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nikhil Ghige. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-to-br hover:from-primary hover:to-accent flex items-center justify-center transition-smooth group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-smooth" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

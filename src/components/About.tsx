import { Code2, Database, Laptop, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive and modern web applications",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing and optimizing database systems",
    },
    {
      icon: Laptop,
      title: "Software Engineering",
      description: "Creating scalable and maintainable solutions",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate technology professional with a strong foundation in software
            development and a keen interest in emerging technologies. My journey in tech
            is driven by curiosity and a commitment to continuous learning. I thrive on
            solving complex problems and building innovative solutions that make a
            difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-hover transition-smooth hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "University Name",
      period: "2019 - 2023",
      description: "Focused on software development, algorithms, and data structures.",
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science Stream",
      institution: "High School Name",
      period: "2017 - 2019",
      description: "Specialized in Mathematics, Physics, and Computer Science.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-hover transition-smooth"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <span className="text-sm font-medium text-primary">{edu.period}</span>
                    </div>
                    <p className="text-lg text-muted-foreground mb-1">{edu.field}</p>
                    <p className="text-sm font-medium text-foreground/80 mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

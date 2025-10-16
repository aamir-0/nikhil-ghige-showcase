import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
}

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "Demonstrated expertise in designing distributed systems on AWS.",
      skills: ["Cloud Computing", "AWS", "Architecture"],
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      description:
        "Validated skills in designing, building, and deploying applications on Google Cloud.",
      skills: ["GCP", "Cloud Development", "APIs"],
    },
    {
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2022",
      description:
        "Mastered advanced React patterns, hooks, and performance optimization.",
      skills: ["React", "JavaScript", "Frontend"],
    },
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2022",
      description:
        "Completed comprehensive training in modern full-stack development.",
      skills: ["Node.js", "MongoDB", "Express"],
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Certificates
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-hover transition-smooth cursor-pointer hover:-translate-y-1"
              onClick={() => setSelectedCert(cert)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-xs font-medium text-primary">{cert.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedCert?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-primary">
                {selectedCert?.issuer}
              </p>
              <p className="text-sm text-muted-foreground">
                Issued: {selectedCert?.date}
              </p>
            </div>
            <p className="text-foreground/80">{selectedCert?.description}</p>
            <div>
              <p className="text-sm font-semibold mb-2">Skills Covered:</p>
              <div className="flex flex-wrap gap-2">
                {selectedCert?.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certificates;

import { useState } from "react";
import { Award, ExternalLink, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/utils";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  pdfUrl: string;
  thumbUrl: string;
  verifyUrl: string;
}

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      name: "Full-stack Development with Django: Managing Migrations",
      issuer: "Coursera Project Network",
      date: "March 2025",
      description:
        "Successfully completed a project-based course on Django migrations and full-stack development.",
      skills: ["Django", "Python", "Full-stack Development", "Database Migrations"],
  pdfUrl: assetUrl("certificates/django-migrations.pdf"),
  thumbUrl: assetUrl("certificates/thumbs/django-migrations.jpg"),
      verifyUrl: "https://coursera.org/verify/Q8HCTJR04J5K",
    },
    {
      name: "Blockchain Platforms",
      issuer: "University at Buffalo, The State University of New York",
      date: "June 2025",
      description:
        "Completed comprehensive training in blockchain platforms and distributed ledger technologies.",
      skills: ["Blockchain", "Distributed Systems", "Smart Contracts"],
  pdfUrl: assetUrl("certificates/blockchain-platforms.pdf"),
  thumbUrl: assetUrl("certificates/thumbs/blockchain-platforms.jpg"),
      verifyUrl: "https://coursera.org/verify/Q0NAN94GW2TT",
    },
    {
      name: "Agile with Atlassian Jira",
      issuer: "Atlassian",
      date: "August 2025",
      description:
        "Mastered Agile project management methodologies and Jira workflow management.",
      skills: ["Agile", "Jira", "Project Management", "Scrum"],
  pdfUrl: assetUrl("certificates/agile-jira.pdf"),
  thumbUrl: assetUrl("certificates/thumbs/agile-jira.jpg"),
      verifyUrl: "https://coursera.org/verify/2WQTHBZUJQNP",
    },
    {
      name: "Software Engineering: Implementation and Testing",
      issuer: "The Hong Kong University of Science and Technology",
      date: "August 2025",
      description:
        "Gained expertise in software implementation best practices and comprehensive testing strategies.",
      skills: ["Software Engineering", "Testing", "Quality Assurance", "Implementation"],
  pdfUrl: assetUrl("certificates/software-engineering.pdf"),
  thumbUrl: assetUrl("certificates/thumbs/software-engineering.jpg"),
      verifyUrl: "https://coursera.org/verify/YR2IX6BVF3NQ",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Certificates
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-hover transition-smooth cursor-pointer hover:-translate-y-1 overflow-hidden"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={cert.thumbUrl}
                  alt={`${cert.name} certificate`}
                  className="w-full h-full object-cover"
                />
              </div>
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl pr-8">{selectedCert?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {selectedCert && (
              <>
                <div className="relative h-96 overflow-hidden rounded-lg border border-border">
                  <img
                    src={selectedCert.thumbUrl}
                    alt={`${selectedCert.name} certificate preview`}
                    className="w-full h-full object-contain bg-gradient-to-br from-primary/5 to-accent/5"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-primary">
                      {selectedCert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Issued: {selectedCert.date}
                    </p>
                  </div>
                  
                  <p className="text-foreground/80">{selectedCert.description}</p>
                  
                  <div>
                    <p className="text-sm font-semibold mb-2">Skills Covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="default"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={selectedCert.pdfUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Certificate
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify on Coursera
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certificates;

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Customer Churn Prediction",
    description: "A machine learning model to predict customer churn for a telecom company, achieving 88% accuracy and helping to reduce monthly churn rates.",
    image: "https://picsum.photos/600/400?random=1",
    imageHint: "data graph",
    tags: ["Python", "Scikit-learn", "Pandas", "Classification"],
    github: "#",
    live: "#",
  },
  {
    title: "Sales Forecasting System",
    description: "Developed a time-series forecasting model to predict weekly sales across multiple stores, improving inventory management and reducing stockouts.",
    image: "https://picsum.photos/600/400?random=2",
    imageHint: "analytics dashboard",
    tags: ["R", "Time Series", "XGBoost", "Shiny"],
    github: "#",
    live: null,
  },
  {
    title: "Real-time Sentiment Analysis",
    description: "Built a real-time data pipeline and NLP model to analyze sentiment from social media streams, providing instant feedback on brand perception.",
    image: "https://picsum.photos/600/400?random=3",
    imageHint: "social media",
    tags: ["NLP", "PyTorch", "Kafka", "Docker"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">A selection of my work in data science.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  data-ai-hint={project.imageHint}
                  className="object-cover"
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                <CardDescription className="flex-grow">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              <CardFooter className="flex justify-end gap-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.live && (
                  <Button variant="default" size="sm" asChild>
                    <Link href={project.live} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building, GraduationCap } from "lucide-react";

const experienceData = [
  {
    icon: <Building />,
    date: "2021 - Present",
    title: "Senior Data Scientist",
    company: "Innovatech Solutions",
    description: "Lead data science projects from conception to deployment. Developed predictive models that increased customer retention by 15%. Mentor junior data scientists and contribute to the development of our internal ML platform.",
  },
  {
    icon: <Building />,
    date: "2018 - 2021",
    title: "Data Scientist",
    company: "DataDriven Inc.",
    description: "Analyzed large datasets to identify trends and inform business strategy. Created dashboards and visualizations to communicate findings to stakeholders. Built and maintained data pipelines for model training and evaluation.",
  },
  {
    icon: <GraduationCap />,
    date: "2014 - 2018",
    title: "M.S. in Data Science",
    company: "University of Technology",
    description: "Focused on statistical modeling, machine learning algorithms, and big data technologies. Completed a thesis on natural language processing for sentiment analysis.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">Experience & Education</h2>
          <p className="mt-2 text-lg text-muted-foreground">My professional journey and academic background.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-start">
                <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:order-2'}`}>
                  <div className="md:w-10/12">
                    <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 text-primary p-3 rounded-full">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                            <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                            <CardDescription>{item.company}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="hidden md:flex items-center self-stretch h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

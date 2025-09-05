import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const writingData = [
  {
    title: "The Art of Feature Engineering",
    publication: "Towards Data Science",
    date: "May 2023",
    link: "#",
  },
  {
    title: "Understanding Transformer Models from Scratch",
    publication: "Medium",
    date: "February 2023",
    link: "#",
  },
  {
    title: "A/B Testing: A Practical Guide for Data Scientists",
    publication: "Personal Blog",
    date: "November 2022",
    link: "#",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">Writing & Publications</h2>
          <p className="mt-2 text-lg text-muted-foreground">Sharing knowledge and insights with the community.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {writingData.map((item, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block hover:bg-card/50 rounded-lg">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-headline text-xl mb-1">{item.title}</CardTitle>
                      <CardDescription>{item.publication} &bull; {item.date}</CardDescription>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground shrink-0" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-secondary/50">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-primary">
            Emmanuel Ani
          </h1>
          <p className="mt-2 font-headline text-2xl md:text-3xl font-medium text-foreground/80">
            Data Scientist & ML Engineer
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Transforming complex data into actionable insights. Passionate about machine learning, data visualization, and building intelligent applications.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/Resume.pdf" target="_blank">
                <FileText className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 w-64 md:h-80 md:w-80 justify-self-center">
            <Image
                src="/portrait.jpg"
                alt="Emmanuel Ani"
                width={400}
                height={400}
                data-ai-hint="person portrait"
                className="rounded-full object-cover shadow-lg border-4 border-background"
            />
        </div>
      </div>
    </section>
  );
}

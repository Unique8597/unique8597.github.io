"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const skillsData = {
  languages: [
    { name: "Python", proficiency: 95, fill: "var(--color-python)" },
    { name: "R", proficiency: 85, fill: "var(--color-r)" },
    { name: "SQL", proficiency: 90, fill: "var(--color-sql)" },
    { name: "JavaScript", proficiency: 70, fill: "var(--color-js)" },
  ],
  tools: [
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib",
    "Seaborn", "Plotly", "Docker", "Git", "Jupyter", "AWS", "GCP", "Spark", "Airflow"
  ],
};

const chartConfig = {
  proficiency: {
    label: "Proficiency",
  },
  python: {
    label: "Python",
    color: "hsl(var(--chart-1))",
  },
  r: {
    label: "R",
    color: "hsl(var(--chart-2))",
  },
  sql: {
    label: "SQL",
    color: "hsl(var(--chart-3))",
  },
  js: {
    label: "JavaScript",
    color: "hsl(var(--chart-4))",
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">Technical Skills</h2>
          <p className="mt-2 text-lg text-muted-foreground">A snapshot of my technical capabilities.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skillsData.languages} layout="vertical" margin={{ left: 10 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }} width={100} />
                    <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent />} />
                    <Bar dataKey="proficiency" radius={5} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline">Libraries, Frameworks & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skillsData.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-base px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

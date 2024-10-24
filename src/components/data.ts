export interface CaseStudy {
  title: string;
  description: string;
  userRetention: string;
  userSatisfaction: string;
  buttonText: string;
  tag: string;
  imageSrc: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Finance Intelligence with Fintelli",
    description:
      "Using a user-focused strategy, the objective was to produce a user-friendly interface for improved financial intelligence in budget planning.",
    userRetention: "60%",
    userSatisfaction: "5*",
    buttonText: "Read Case Study",
    tag: "Fintech",
    imageSrc: "/images/case.avif", // Replace with actual image paths
  },
  {
    title: "Designing a Scalable CRM Tool",
    description:
      "As the Product Designer and UX/UI Department Leader at Omnisafe, I successfully led the design team in creating a scalable design system and conceptualizing an internal CRM tool.",
    userRetention: "99%",
    userSatisfaction: "5*",
    buttonText: "Read Case Study",
    tag: "Insurance",
    imageSrc: "/images/chart.avif", // Replace with actual image paths
  },
  {
    title: "Transforming the Proxy Market with a User-Focused Approach",
    description:
      "Focus was to create a user-friendly interface that simplified the process of accessing premium operational web scraping proxies.",
    userRetention: "70%",
    userSatisfaction: "85",
    buttonText: "Read Case Study",
    tag: "Security",
    imageSrc: "/images/metric.avif", // Replace with actual image paths
  },
  {
    title: "Truly Redefining Product Research and Review",
    description:
      "The challenge was to make a design suitable for a wide age range of people.",
    userRetention: "28%",
    userSatisfaction: "5*",
    buttonText: "Read Case Study",
    tag: "Technology",
    imageSrc: "/images/site.avif", // Replace with actual image paths
  },
];

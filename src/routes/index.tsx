import { createFileRoute } from "@tanstack/react-router";
import MaLanding from "@/components/MaLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ma.ai — AI-powered experiences for ambitious brands" },
      {
        name: "description",
        content:
          "ma.ai partners with ambitious brands to build AI-powered solutions that drive impact, automate complexity and shape what's next.",
      },
      { property: "og:title", content: "ma.ai — AI-powered experiences" },
      {
        property: "og:description",
        content:
          "We turn ideas into intelligent experiences. AI strategy, design and engineering from Chennai, working globally.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaLanding,
});

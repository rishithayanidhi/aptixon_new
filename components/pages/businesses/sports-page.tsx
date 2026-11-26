import { Trophy } from "lucide-react";
import BusinessDetail from "@/components/pages/businesses/business-detail";

export default function SportsPage() {
  return (
    <BusinessDetail
      name="Aptixon Sports"
      eyebrow="SPORTS & GAMES"
      tagline="Building the future of sports."
      description="Sporting ecosystems, leagues and grassroots initiatives that connect players, teams and communities."
      services={[
        "Football League Management",
        "Sports Events & Tournaments",
        "Youth Development",
        "Sports Infrastructure",
        "Partnerships",
      ]}
      icon={Trophy}
      tone="green"
    />
  );
}

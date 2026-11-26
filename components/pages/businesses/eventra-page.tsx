import { Music2 } from "lucide-react";
import BusinessDetail from "@/components/pages/businesses/business-detail";

export default function EventraPage() {
  return (
    <BusinessDetail
      name="Aptixon EVENTRA"
      eyebrow="LIVE EXPERIENCES"
      tagline="Every event. One experience."
      description="End-to-end event planning, operations, registration and technology for seamless experiences."
      services={[
        "Event Management",
        "Event Planning",
        "Event Registration",
        "Event Ticketing",
        "Event Technology",
      ]}
      icon={Music2}
      tone="purple"
    />
  );
}

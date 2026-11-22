import { outcomeRoute } from "@/components/outcome-route";

const route = outcomeRoute({ namespace: "billing", outcome: "cancelled", tone: "info" });

export const generateMetadata = route.generateMetadata;
export default route.Page;

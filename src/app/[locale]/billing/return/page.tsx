import { outcomeRoute } from "@/components/outcome-route";

const route = outcomeRoute({ namespace: "billing", outcome: "return", tone: "success" });

export const generateMetadata = route.generateMetadata;
export default route.Page;

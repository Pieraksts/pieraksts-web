import { outcomeRoute } from "@/components/outcome-route";

const route = outcomeRoute({ namespace: "payouts", outcome: "refresh", tone: "info" });

export const generateMetadata = route.generateMetadata;
export default route.Page;

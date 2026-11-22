import { outcomeRoute } from "@/components/outcome-route";

const route = outcomeRoute({ namespace: "giftCards", outcome: "return", tone: "success" });

export const generateMetadata = route.generateMetadata;
export default route.Page;

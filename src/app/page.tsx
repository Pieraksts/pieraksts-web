import { redirect } from "next/navigation";
import { DEFAULT_VARIANT } from "@/lib/variants";

export default function Home() {
  redirect(`/${DEFAULT_VARIANT}`);
}

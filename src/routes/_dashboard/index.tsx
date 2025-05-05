import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/libs/i18n";
import HomePage from "@/modules/dashboard/home/page";
export const Route = createFileRoute("/_dashboard/")({
  component: RouteComponent,
  staticData: {
    title: i18n.t("home.title"),
  },
});

function RouteComponent() {
  return <HomePage />;
}

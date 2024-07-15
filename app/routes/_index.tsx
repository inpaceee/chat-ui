import type { MetaFunction } from "@remix-run/node";
import ChatUI from "../components/chatui";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <ChatUI />
    </div>
  );
}

import Image from "next/image";
import Tasks from "@/components/tasks";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1>Task app</h1>
      <Tasks />
    </main>
  );
}

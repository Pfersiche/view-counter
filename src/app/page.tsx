import kv from "@vercel/kv";

export default async function Home() {
  const res = await fetch(
    "https://api.github.com/repos/Pfersiche/view-counter"
  );
  const data = await res.json();

  const pageViews = await kv.incr("views");

  const myStyles = {};

  return (
    <main>
      <p>0</p>
      <span>⭐{data.stargazers.count}</span>
    </main>
  );
}

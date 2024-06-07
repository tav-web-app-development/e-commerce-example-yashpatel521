import CardSlider from "./components/CardSlider";
import Hero from "./components/Hero";
import { cardSilderData } from "./Data/cardSlidet";

export default function Home() {
  return (
    <main>
      <Hero />
      {cardSilderData.map((data, i) => (
        <CardSlider key={i} title={data.title} productList={data.items} />
      ))}
    </main>
  );
}

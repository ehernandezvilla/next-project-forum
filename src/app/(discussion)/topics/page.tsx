import Button from "@/components/button/Button";
import { CATEGORIES } from "@/data/postData";
import { capitalize } from "@/lib/utils";

export default function TopicsPage() {
  return (
    <>
      <h1>All Topics</h1>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category}>
            <Button
              href={`/topics/${category}`}
              label={capitalize(category)}
            ></Button>
          </li>
        ))}
      </ul>
    </>
  );
}
import Button from "@/components/button/Button";

export default function TopicsLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <div>
        {children}
        <footer>
            <Button href="/topics" label="Back To All Topics"></Button>
        </footer>
    </div>
    </>
  );
}
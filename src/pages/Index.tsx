import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";

export default function Index() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background p-4">
      <Button size="lg" className="cursor-pointer" onClick={() => setClicked(true)}>
        Test Button
      </Button>
      {clicked && (
        <p className="text-xl font-semibold text-foreground">
          GitHub Test Successful
        </p>
      )}
    </div>
  );
}

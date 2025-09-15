import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthCodeErrorPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Authentication Error</h1>
        <p className="text-sm text-muted-foreground">
          There was an error with your authentication. This could be due to an expired or invalid link.
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-sm text-muted-foreground">
          Please try signing in again or contact support if the problem persists.
        </p>
        <Button asChild>
          <Link href="/login">Try Again</Link>
        </Button>
      </div>
    </div>
  );
}

import {SignInButton, UserButton, currentUser} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Clapperboard, LogOut} from "lucide-react";
interface actionProps {
  dashboard?: boolean;
}
const Actions = async ({dashboard = false}: actionProps) => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button size="sm" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            {dashboard ? (
              <Link href={`/u/${user.username}`}>
                <Clapperboard className="h-5 w-5 lg:mr-2" />
                <span className="hidden lg:block">Dashboard</span>
              </Link>
            ) : (
              <Link href="/">
                <LogOut className="h-5 w-5 mr-2" />
                Exit
              </Link>
            )}
          </Button>
          <UserButton afterSignOutUrl="/ " />
        </div>
      )}
    </div>
  );
};

export default Actions;

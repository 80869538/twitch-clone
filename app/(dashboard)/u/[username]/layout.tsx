import {getSelfByUsername} from "@/lib/auth-service";
import {redirect} from "next/navigation";
import {Navbar} from "@/app/(browse)/_component/navbar";
import {Sidebar} from "@/app/(browse)/_component/sidebar";
import {Container} from "@/app/(browse)/_component/container";
interface CreatorLayoutProps {
  params: {username: string};
  children: React.ReactNode;
}
const CreatorLayout = async ({params, children}: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }
  return (
    <>
      <Navbar logoText="Creator dashboard" />
      <div className="flex h-full pt-20">
        <Sidebar toggleDisplayText="Dashboard" navigationDisplay />
        <Container>{children}</Container>
      </div>
    </>
  );
};
export default CreatorLayout;

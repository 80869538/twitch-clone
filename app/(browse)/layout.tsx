import {Sidebar, SidebarSkeleton} from "./_component/sidebar";
import {Navbar} from "./_component/navbar";
import {Container} from "./_component/container";
import {Suspense} from "react";
const BrowseLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar searchBar dashboard />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar followingDisplay recommendedDisplay />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};
export default BrowseLayout;

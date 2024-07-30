import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

import HeaderLogo from "@/components/header-logo";
import Navigation from "./navroutes";
import WelcomeUser from "./greetings";
import { Filters } from '@/components/filters';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-green-700 to-green-400 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeUser />
        <Filters />
      </div>
    </header>
  );
};

export default Header;
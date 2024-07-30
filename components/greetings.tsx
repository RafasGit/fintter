"use client";

import { useUser } from "@clerk/nextjs";

const WelcomeUser = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-black font-medium">
        Welcome Back{isLoaded ? "," : " "} {user?.firstName} 👋
      </h2>
      <p className="text-sm lg:text-base text-[#fffff]">
        An overview of your recent financial transactions 
      </p>
    </div>
  );
};

export default WelcomeUser;
"use client";
import DashboardLayout from "@/components/DashboardLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     document.querySelector(`.delay-animation`)?.classList.remove('invisible');
  //   }, 1000);
  // }, []);

  // ctrlAltRandom.parseJson({
  //   name: "The Ctrl Alt Random Podcast",
  //   description: "The Ctrl Alt Random Podcast is a place where we dive into random tech topics—from groundbreaking innovations to quirky gadgets. Expect fun, candid chats and surprising discoveries in every episode. Tech has never been this unpredictable—Click the button below to join the randomness!",
  //   // description: "Welcome to the Ctrl + Alt + Random podcast, where we dive into random tech topics—from groundbreaking innovations to quirky gadgets. Expect fun, candid chats and surprising discoveries in every episode. Tech has never been this unpredictable—hit play and join the randomness!",
  //   url: "https://ctrlaltrandom.com",
  //   urlText: "View website",
  //   urlClasses: "ctrlaltrandom",
  //   image: {
  //     src: "/projects/ctrlaltrandom.png",
  //     alt: "Ctrl Alt Random Podcast",
  //     width: 300,
  //     height: 300
  //   }
  // });

  return (
    <DashboardLayout>
      <div className="projects p-2">
        {children}
      </div>
    </DashboardLayout>
  );
}

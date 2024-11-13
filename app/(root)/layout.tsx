import {SideBar} from "../../components/index"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const loggedIn = {
      firstName :"'Mrig" ,
      lastName :"Datta"
    }

    return (
      <main className="flex h-full w-full font-inter">
        <SideBar user={loggedIn}/>
        {children}
      </main>
    );
  }
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export function Dashboard({ children }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const session = localStorage.getItem("access_token")

    if (!session) {
      navigate("/login")
    }
  }, [pathname])
  
  return (
    <SidebarProvider>
      <AppSidebar className="text-gray-900 dark:bg-gray-900 dark:text-black px-6 py-12" />
      <SidebarInset className="min-h-screen text-gray-900 dark:bg-gray-900 dark:text-black px-6 py-12">
        <div className="flex flex-1 flex-col gap-3 px-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

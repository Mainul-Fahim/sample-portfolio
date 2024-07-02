"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  //   const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } 
  }, []);

  // const fetchUser = async (token: string) => {
  //   const res = await fetch("/api/users/profile", {
  //     headers: {
  //       Authorization: `${token}`,
  //     },
  //   });
  //   if (res.ok) {
  //     const data = await res.json();
  //       setUser(data);
  //   } else {
  //     localStorage.removeItem("token");
  //     router.push("/admin/login");
  //   }
  // };

  //   if (!user) return <p>Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome, Admin</h1>
        {/* Add your admin management components here */}
      </div>
    </div>
  );
};

export default AdminDashboard;

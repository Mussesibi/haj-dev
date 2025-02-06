import React from "react";
import { useRouter } from "next/navigation";
function LogOutBtn() {
  const router = useRouter();
  const handleLogOut = async () => {
    const res = await fetch("/api/admin/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/");
    }
  };
  return (
    <button onClick={handleLogOut} className="px-4 py-2 bg-slate-500">
      Logout
    </button>
  );
}

export default LogOutBtn;

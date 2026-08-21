"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MobileActionBar() {
  const pathname = usePathname();
  const isForexPage = pathname === "/forex-broker-india";

  return (
    <div className="mobile-action-bar">
      <Link href={isForexPage ? "/forex-broker-india#fx-enquiry" : "/#lead"}>
        <MessageCircle size={17} />
        {isForexPage ? "Get MT5 setup help" : "Speak with advisory desk"}
      </Link>
    </div>
  );
}

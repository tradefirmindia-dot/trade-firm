import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <Link href="/#lead"><MessageCircle size={17} /> Get research service details</Link>
    </div>
  );
}

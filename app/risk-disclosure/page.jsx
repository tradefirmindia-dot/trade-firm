import TrustPage from "../../components/TrustPage";
import { trustPageMetadata, trustPages } from "../../lib/trust-pages";

const page = trustPages.risk;
export const metadata = trustPageMetadata(page);
export default function Page() { return <TrustPage page={page} />; }

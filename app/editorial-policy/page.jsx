import TrustPage from "../../components/TrustPage";
import { trustPageMetadata, trustPages } from "../../lib/trust-pages";

const page = trustPages.editorial;
export const metadata = trustPageMetadata(page);
export default function Page() { return <TrustPage page={page} />; }

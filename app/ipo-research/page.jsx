import SeoServicePage from "../../components/SeoServicePage";
import { seoServicePages, servicePageMetadata } from "../../lib/seo-pages";

const page = seoServicePages.ipoResearch;
export const metadata = servicePageMetadata(page);
export default function Page() { return <SeoServicePage page={page} />; }

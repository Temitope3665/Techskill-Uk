import { Helmet } from "react-helmet";

const ReactHelment = ({ title }) => (
    <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
</Helmet>
)

export default ReactHelment;
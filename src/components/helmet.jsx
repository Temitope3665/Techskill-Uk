import { Helmet } from "react-helmet";

const ReactHelment = ({ title }) => (
    <Helmet>
    <meta charSet="utf-8" />
    <title>{title || 'Techskill UK'}</title>
    <meta name='description' content='Accelerate you career today with Digital Transformation' />
    <meta name='icon' url='/logo-icon.svg' />
    <link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
</Helmet>
)

export default ReactHelment;
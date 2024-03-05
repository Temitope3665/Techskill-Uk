import { Helmet } from "react-helmet";

const ReactHelment = ({ title }) => (
    <Helmet>
    <meta charSet="utf-8" />
    <title>{title || 'Techskill UK'}</title>
    <meta name='description' content='Accelerate you career today with Digital Transformation' />
    <link rel="icon" type="image/svg+xml" href="https://res.cloudinary.com/dboqyj4bp/image/upload/v1709628383/logo-icon_tgxapk.png" />
</Helmet>
)

export default ReactHelment;
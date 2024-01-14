import Navbar from "../components/nav-bar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
};

export default Layout;

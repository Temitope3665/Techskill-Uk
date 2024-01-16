import Navbar from "../components/nav-bar";

const Layout = ({ children }) => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />

            <div className="pt-20">
                {children}
            </div>
        </div>
    )
};

export default Layout;

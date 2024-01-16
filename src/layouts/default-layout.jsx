import Navbar from "../components/nav-bar";

const Layout = ({ children }) => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />

            <div className="pb-8 pt-20">
                {children}
            </div>
        </div>
    )
};

export default Layout;

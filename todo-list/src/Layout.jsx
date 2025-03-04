const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-neutral-900">
            <main>{children}</main>
        </div>
    );
};

export default Layout;

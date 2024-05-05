import Navbar from "../components/nav-bar";
import NavbarMain from "../components/navbar-main-pages";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
      <div className=" fixed top-0 w-full">
        <NavbarMain />
      </div>
    </section>
  );
}

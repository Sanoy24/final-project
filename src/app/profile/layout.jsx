import Navbar from "../components/nav-bar";
import NavbarMain from "../components/navbar-main-pages";
import ProfileSidebar from "../components/profile-sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div>
      <div>
        <NavbarMain />
      </div>
      <div className=" flex gap-12">
        <div className=" w-80 mt-5 pl-5">
          <ProfileSidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

import Image from "next/image";
import ProfileMain from "../components/profile-main";
import ProfileSidebar from "../components/profile-sidebar";

export default function Page() {
  return (
    <>
      <div className="  flex justify-center flex-row gap-24 mt-24">
        <div className="">
          <ProfileSidebar />
        </div>
        <div>
          <ProfileMain />
        </div>
      </div>
    </>
  );
}

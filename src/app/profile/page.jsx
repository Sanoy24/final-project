import Image from "next/image";
import ProfileMain from "../components/profile-main";
import ProfileSidebar from "../components/profile-sidebar";

export default function Page() {
  return (
    <>
      <div className="  flex justify-center flex-row gap-24 mt-5">
        <div className="">
          <ProfileMain />
        </div>
      </div>
    </>
  );
}

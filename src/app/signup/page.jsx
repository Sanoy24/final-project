import SignUp from "../components/signup-form";

export default function SignUpPage() {
  return (
    <main
      className="flex justify-center items-center content-center
    "
    >
      <div className=" m-9 p-14  self-center content-center bg-slate-50 rounded-md shadow-lg">
        <SignUp />
      </div>
    </main>
  );
}

import AuthForm from "@/components/auth-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={2048}
          height={2048}
          className="mx-auto w-auto h-14"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </main>
  );
}

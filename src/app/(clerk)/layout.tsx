import Logo from "@/components/Logo";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full flex flex-col gap-y-6 justify-center items-center">
      <Logo size={80} isVertical />
      {children}
    </main>
  );
};

export default AuthLayout;

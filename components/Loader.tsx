import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-4">
      <div className="relative w-10 h-10 animate-spin">
        <Image src="/logo.png" alt="logo" fill />
      </div>
      <p className="text-sm text-muted-foreground">Genius is thinking...</p>
    </div>
  );
};

export default Loader;

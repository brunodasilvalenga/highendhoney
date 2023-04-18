import Navbar from "@/components/Navbar";

export const metadata = {
  title: "High end Honey - Models",
  description: "Your gateway to a world of high-end companionship",
};

export default function ModelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </>
  );
}

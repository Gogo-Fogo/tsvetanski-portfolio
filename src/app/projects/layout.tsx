import ScrollToTopButton from "@/components/scroll-to-top-button";

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <ScrollToTopButton />
    </>
  );
}

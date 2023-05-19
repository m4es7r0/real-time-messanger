import Sidebar from "@/components/sidebar";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error Server-Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}

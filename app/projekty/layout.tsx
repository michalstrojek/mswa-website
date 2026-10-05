export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // CUTLINE uses its own shell; holding pages wrap content themselves.
  return children;
}

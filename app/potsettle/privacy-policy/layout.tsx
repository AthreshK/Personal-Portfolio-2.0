export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-8">
      {children}
      <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
          &copy; 2026 Athresh Kiran. All rights reserved.
        </small>
      </footer>
    </div>
  );
}

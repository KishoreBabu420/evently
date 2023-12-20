import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

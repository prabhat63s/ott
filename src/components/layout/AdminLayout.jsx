import Footer from "./Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="">
      {children}
      <Footer />
    </div>
  );
}

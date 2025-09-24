import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="border-t bg-white shadow-sm py-4">
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6">
        <p className="text-center text-sm text-gray-600">
          © {currentYear} Vincent Wilkie. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;

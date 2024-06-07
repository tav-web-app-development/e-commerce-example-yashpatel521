import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 border-t border-white">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:justify-between">
          <div className="mb-4 sm:mb-0 max-w-lg">
            <h6 className="font-bold">About Grabbers</h6>
            <p>
              Grabbers is a leading online store offering a wide range of
              products. We are committed to providing our customers with
              high-quality products at the best prices.
            </p>
          </div>
          <div>
            <h6 className="font-bold">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <a href="#shop" className="hover:text-gray-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-gray-300">
                  Categories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Grabbers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

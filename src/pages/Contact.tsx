import React from "react";
import ContactUs from "../contact/ContactUs";

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="container mx-auto">
        <ContactUs />
      </div>
    </main>
  );
};

export default Contact;

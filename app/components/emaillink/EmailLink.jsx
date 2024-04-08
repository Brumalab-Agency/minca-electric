"use client"
import { ubuntu } from "@/ui/fonts";

const EmailLink = ({ email, subject }) => {
    const handleClick = (e) => {
      e.preventDefault()
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
      window.location.href = mailtoLink;
    };

    return (
        <a
          href="#"

          onClick={handleClick}
          className={`${ubuntu.className} text-[12px] font-bold text-[#111]`}
        >
          {email}
        </a>
      );
}
export default EmailLink
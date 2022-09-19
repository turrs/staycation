import React from "react";
import Link from "next/link";
const LinkFooter = ({ text, url }) => {
  return (
    <Link href={url}>
      <p className="text-gray1">{text}</p>
    </Link>
  );
};

export default LinkFooter;

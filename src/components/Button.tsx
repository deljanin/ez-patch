import React from "react";

function Button({
  children,
  styles,
  type,
  onClick,
  icon = true,
  disabled = false,
}: {
  children: React.ReactNode;
  styles?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      className={`bg-red-main font-mansfield group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 py-1.5 font-extrabold text-white transition-all duration-200 hover:scale-105 ${styles}`}
    >
      {children}
      {icon && (
        <svg
          className="size-4 transition-all duration-200 group-hover:-rotate-45 md:size-5"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.31658 31.9004C4.86348 31.7575 5.38433 31.439 5.81404 31.0037C6.19166 30.6137 15.3261 19.599 15.3261 19.5276C15.3261 19.5081 14.6881 18.8582 13.9068 18.0849L12.494 16.6748L6.86226 21.3146C3.76317 23.8685 1.07426 26.1234 0.885452 26.3183C0.29298 26.9487 0 27.7025 0 28.6253C0 29.5415 0.38413 30.4708 1.01567 31.0751C1.32818 31.3806 1.95321 31.7315 2.42849 31.8744C2.9233 32.0304 3.79573 32.0434 4.31658 31.9004ZM2.85819 29.5025C1.9532 28.9762 2.39593 27.5855 3.43113 27.67C3.82828 27.7025 4.05616 27.8649 4.25148 28.2548C4.42727 28.6123 4.40773 28.8722 4.17335 29.2101C3.86735 29.665 3.32696 29.782 2.85819 29.5025Z"
            fill="white"
          />
          <path
            d="M18.4643 19.677C18.8875 19.2611 19.2326 18.8842 19.2326 18.8452C19.2326 18.8127 17.8718 17.4221 16.2051 15.7585L13.1776 12.7368L12.4549 13.4516C11.6671 14.2379 11.5174 14.4458 11.5825 14.7123C11.6085 14.8227 12.6177 15.8755 14.4016 17.6625C17.1166 20.3723 17.1882 20.4373 17.4356 20.4373C17.6765 20.4373 17.7416 20.3853 18.4643 19.677Z"
            fill="white"
          />
          <path
            d="M20.5933 18.3838C24.4476 17.682 28.5038 15.6155 31.6224 12.7563L32 12.4119L19.5516 0L19.1219 0.454885C16.3679 3.38564 14.2063 7.67456 13.5422 11.5346L13.4446 12.0869L16.6478 15.2906C18.8549 17.4936 19.8901 18.4878 19.9813 18.4813C20.0529 18.4748 20.3263 18.4358 20.5933 18.3838Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}

export default Button;

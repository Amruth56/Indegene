import React from "react";

function NotificationIcon({ count }) {
  let cnt  = 0;
  if(count > 0) cnt = count 
  return (
    <div className="relative">
      <button aria-label={`${count} notifications`}>
        <svg
          width="40"
          height="20"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_270)">
            <path
              d="M7.00001 0C6.44689 0 6.00001 0.446875 6.00001 1V1.6C3.71876 2.0625 2.00001 4.08125 2.00001 6.5V7.0875C2.00001 8.55625 1.45939 9.975 0.484387 11.075L0.253137 11.3344C-0.00936282 11.6281 -0.0718628 12.05 0.0875122 12.4094C0.246887 12.7688 0.606262 13 1.00001 13H13C13.3938 13 13.75 12.7688 13.9125 12.4094C14.075 12.05 14.0094 11.6281 13.7469 11.3344L13.5156 11.075C12.5406 9.975 12 8.55938 12 7.0875V6.5C12 4.08125 10.2813 2.0625 8.00001 1.6V1C8.00001 0.446875 7.55314 0 7.00001 0ZM8.41564 15.4156C8.79064 15.0406 9.00001 14.5312 9.00001 14H7.00001H5.00001C5.00001 14.5312 5.20939 15.0406 5.58439 15.4156C5.95939 15.7906 6.46876 16 7.00001 16C7.53126 16 8.04064 15.7906 8.41564 15.4156Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_270">
              <path d="M0 0H14V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
        {cnt}
      </span>
    </div>
  );
}

export default NotificationIcon;

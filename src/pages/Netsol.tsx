import React from 'react'
import { Link } from 'react-router-dom';
import MobNetsol from '../components/MobNetsol';



const CustomIcon = ({ width = 28, height = 29, fill = '#38E8EE', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 28 29"
    fill="none"
    {...props}
  >
    <path
      d="M13.65 3.77251C13.7604 3.72433 13.8795 3.69946 14 3.69946C14.1205 3.69946 14.2396 3.72433 14.35 3.77251C18.6644 5.65831 22.7798 7.97005 26.635 10.6733C26.7709 10.7686 26.8768 10.9006 26.9405 11.0538C27.0043 11.207 27.0231 11.3752 26.9948 11.5387C26.9666 11.7022 26.8924 11.8543 26.781 11.9773C26.6696 12.1003 26.5255 12.189 26.3655 12.2332C22.3631 13.3386 18.4903 14.8686 14.8132 16.7972L14.8097 16.7995C14.6767 16.8695 14.5448 16.9383 14.413 17.0095C14.2861 17.0773 14.1445 17.1128 14.0006 17.1128C13.8567 17.1128 13.7151 17.0773 13.5882 17.0095C12.011 16.1678 10.3966 15.3978 8.75 14.7018V14.4405C8.75 14.2877 8.82817 14.1512 8.95067 14.0777C10.7116 13.0105 12.5232 12.0294 14.3792 11.1377C14.5883 11.0371 14.749 10.8576 14.8258 10.6386C14.9026 10.4196 14.8892 10.179 14.7887 9.96984C14.6881 9.76068 14.5086 9.60003 14.2896 9.52323C14.0705 9.44643 13.83 9.45978 13.6208 9.56035C11.7142 10.4765 9.85317 11.4845 8.04417 12.5808C7.7868 12.737 7.56478 12.945 7.39223 13.1917C7.21969 13.4383 7.10041 13.7182 7.042 14.0135C5.27008 13.3317 3.4658 12.7372 1.63567 12.232C1.47571 12.1878 1.33161 12.0991 1.22018 11.9761C1.10875 11.8532 1.03459 11.7011 1.00634 11.5375C0.978084 11.374 0.996912 11.2058 1.06062 11.0526C1.12434 10.8994 1.2303 10.7675 1.36617 10.6722C5.22105 7.96938 9.33606 5.65803 13.65 3.77251Z"
      fill={fill}
    />
    <path
      d="M15.2367 18.5518C18.1023 17.0209 21.0946 15.7398 24.1803 14.7228C24.3367 16.3725 24.437 18.0397 24.4778 19.7208C24.4824 19.8971 24.4335 20.0706 24.3378 20.2186C24.242 20.3666 24.1038 20.4822 23.9412 20.5503C20.634 21.9316 17.4674 23.628 14.4853 25.616C14.3416 25.7118 14.1727 25.763 14 25.763C13.8273 25.763 13.6584 25.7118 13.5147 25.616C10.5329 23.628 7.36678 21.9316 4.06 20.5503C3.89737 20.4825 3.75901 20.3671 3.66305 20.2193C3.56708 20.0715 3.51798 19.8982 3.52217 19.722C3.563 18.0397 3.66333 16.3737 3.81967 14.7217C4.89417 15.0763 5.95467 15.4613 7 15.8767V17.3583C6.74792 17.5036 6.53603 17.7094 6.38349 17.9571C6.23095 18.2048 6.14258 18.4867 6.12636 18.7771C6.11015 19.0676 6.16661 19.3575 6.29063 19.6207C6.41465 19.8839 6.60232 20.112 6.83667 20.2843C6.73167 20.7277 6.57767 21.1628 6.3735 21.5793C6.90083 21.8278 7.42467 22.0857 7.94383 22.3493C8.23648 21.7541 8.45248 21.1241 8.58667 20.4745C8.8817 20.3433 9.13469 20.1331 9.31764 19.867C9.50059 19.601 9.60637 19.2895 9.62328 18.9671C9.64019 18.6446 9.56756 18.3238 9.41344 18.0401C9.25931 17.7564 9.0297 17.5208 8.75 17.3595V16.607C10.1128 17.2024 11.4516 17.8511 12.7633 18.5518C13.1439 18.7551 13.5686 18.8614 14 18.8614C14.4314 18.8614 14.8561 18.7551 15.2367 18.5518Z"
      fill={fill}
    />
    <path
      d="M5.20567 23.2056C5.69567 22.7168 6.08417 22.1673 6.37233 21.5781C6.90083 21.8278 7.42467 22.0856 7.94383 22.3505C7.5621 23.1258 7.0552 23.833 6.4435 24.4435C6.27763 24.598 6.05824 24.6822 5.83156 24.6782C5.60487 24.6742 5.38859 24.5823 5.22827 24.422C5.06796 24.2617 4.97613 24.0454 4.97213 23.8187C4.96813 23.5921 5.05227 23.3727 5.20683 23.2068L5.20567 23.2056Z"
      fill={fill}
    />
  </svg>
);


const RectSvg = () =>(<svg xmlns="http://www.w3.org/2000/svg" width="131" height="97" viewBox="0 0 131 97" fill="none">
  <g clip-path="url(#clip0_640_694)">
    <g opacity="0.2">
      <path opacity="0.5" d="M105.091 25.6836H9.04982C7.15241 25.6836 5.61426 27.2168 5.61426 29.1081V88.328C5.61426 90.2193 7.15241 91.7524 9.04982 91.7524H105.091C106.989 91.7524 108.527 90.2193 108.527 88.328V29.1081C108.527 27.2168 106.989 25.6836 105.091 25.6836Z" fill="white"/>
      <path opacity="0.5" d="M108.527 29.7933C108.527 31.6845 106.989 33.2178 105.092 33.2178H9.04981C7.1524 33.2178 5.61425 31.6845 5.61426 29.7933V29.1081C5.61426 27.2168 7.1524 25.6836 9.04982 25.6836H105.092C106.989 25.6836 108.527 27.2168 108.527 29.1081V29.7933Z" fill="white"/>
    </g>
    <g opacity="0.4">
      <path opacity="0.5" d="M116.256 14.9998H20.2144C18.317 14.9998 16.7788 16.5329 16.7788 18.4242V77.6441C16.7788 79.5354 18.317 81.0686 20.2144 81.0686H116.256C118.153 81.0686 119.691 79.5354 119.691 77.6441V18.4242C119.691 16.5329 118.153 14.9998 116.256 14.9998Z" fill="white"/>
      <path opacity="0.5" d="M122.269 15.6847C122.269 17.576 120.73 19.1091 118.833 19.1091H22.791C20.8936 19.1091 19.3555 17.5759 19.3555 15.6847V14.9994C19.3555 13.1081 20.8936 11.575 22.791 11.575H118.833C120.73 11.575 122.269 13.1081 122.269 14.9994V15.6847Z" fill="white"/>
    </g>
    <g opacity="0.5">
      <path d="M131 8.39423L28.0715 8.39422V3.42446C28.0715 1.53319 29.6097 -1.65341e-07 31.5071 0L127.564 8.37049e-06C129.462 8.53583e-06 131 1.5332 131 3.42447V8.39423Z" fill="white"/>
      <path opacity="0.5" d="M127.549 0H31.5071C29.6097 0 28.0715 1.53318 28.0715 3.42446V62.6444C28.0715 64.5357 29.6097 66.0688 31.5071 66.0688H127.549C129.446 66.0688 130.984 64.5357 130.984 62.6444V3.42446C130.984 1.53318 129.446 0 127.549 0Z" fill="white"/>
    </g>
    <path opacity="0.4" d="M34.6214 6.52886C35.655 6.52886 36.4929 5.6937 36.4929 4.66348C36.4929 3.63326 35.655 2.7981 34.6214 2.7981C33.5879 2.7981 32.75 3.63326 32.75 4.66348C32.75 5.6937 33.5879 6.52886 34.6214 6.52886Z" fill="white"/>
    <path opacity="0.4" d="M40.2357 6.52886C41.2692 6.52886 42.1071 5.6937 42.1071 4.66348C42.1071 3.63326 41.2692 2.7981 40.2357 2.7981C39.2021 2.7981 38.3643 3.63326 38.3643 4.66348C38.3643 5.6937 39.2021 6.52886 40.2357 6.52886Z" fill="white"/>
    <path opacity="0.4" d="M45.8499 6.52886C46.8835 6.52886 47.7214 5.6937 47.7214 4.66348C47.7214 3.63326 46.8835 2.7981 45.8499 2.7981C44.8164 2.7981 43.9785 3.63326 43.9785 4.66348C43.9785 5.6937 44.8164 6.52886 45.8499 6.52886Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_640_694">
      <rect width="131" height="97" fill="white"/>
    </clipPath>
  </defs>
</svg>)

const CircleSvg = () =>(<svg xmlns="http://www.w3.org/2000/svg" width="90" height="91" viewBox="0 0 90 91" fill="none">
  <g opacity="0.2">
    <path d="M45.0439 90.0572C69.6206 90.0572 89.5439 70.1084 89.5439 45.5003C89.5439 20.8922 69.6206 0.943359 45.0439 0.943359C20.4673 0.943359 0.543945 20.8922 0.543945 45.5003C0.543945 70.1084 20.4673 90.0572 45.0439 90.0572Z" fill="white"/>
  </g>
  <g opacity="0.4">
    <path d="M45.0446 76.6061C62.2019 76.6061 76.1106 62.6795 76.1106 45.5003C76.1106 28.3211 62.2019 14.3945 45.0446 14.3945C27.8873 14.3945 13.9785 28.3211 13.9785 45.5003C13.9785 62.6795 27.8873 76.6061 45.0446 76.6061Z" fill="white"/>
  </g>
  <path opacity="0.4" d="M45.0439 63.9945C55.2456 63.9945 63.5156 55.7139 63.5156 45.4992C63.5156 35.2845 55.2456 27.0039 45.0439 27.0039C34.8423 27.0039 26.5723 35.2845 26.5723 45.4992C26.5723 55.7139 34.8423 63.9945 45.0439 63.9945Z" fill="white"/>
</svg>)

const CheckIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 16.5C3 9.32 8.82 3.5 16 3.5C23.18 3.5 29 9.32 29 16.5C29 23.68 23.18 29.5 16 29.5C8.82 29.5 3 23.68 3 16.5ZM20.8133 14.0813C20.8933 13.9747 20.9512 13.8532 20.9836 13.7239C21.0159 13.5946 21.0221 13.4602 21.0018 13.3285C20.9815 13.1968 20.935 13.0704 20.8651 12.9569C20.7953 12.8434 20.7034 12.745 20.595 12.6675C20.4866 12.59 20.3638 12.535 20.2337 12.5056C20.1037 12.4763 19.9692 12.4732 19.838 12.4966C19.7068 12.52 19.5816 12.5694 19.4697 12.6419C19.3579 12.7144 19.2616 12.8085 19.1867 12.9187L14.872 18.9587L12.7067 16.7933C12.5171 16.6167 12.2664 16.5205 12.0073 16.5251C11.7482 16.5297 11.5011 16.6346 11.3178 16.8178C11.1346 17.0011 11.0297 17.2482 11.0251 17.5073C11.0205 17.7664 11.1167 18.0171 11.2933 18.2067L14.2933 21.2067C14.396 21.3092 14.5197 21.3882 14.656 21.4382C14.7922 21.4881 14.9377 21.5078 15.0824 21.4959C15.227 21.484 15.3673 21.4407 15.4935 21.3691C15.6197 21.2975 15.7289 21.1993 15.8133 21.0813L20.8133 14.0813Z" fill="#75E761"/>
</svg>)

const Stars = () => (<svg xmlns="http://www.w3.org/2000/svg" width="86" height="16" viewBox="0 0 86 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22335 0.98499C7.72747 0.749795 7.15219 0.749795 6.65631 0.984989C6.31302 1.14781 6.06951 1.45601 5.85373 1.80434C5.63679 2.15457 5.39877 2.63062 5.10237 3.22344L5.10236 3.22346L5.09076 3.24668L4.85186 3.72447C4.64861 4.13097 4.58951 4.2375 4.5153 4.31517C4.43876 4.39528 4.34699 4.45928 4.24536 4.50341C4.14682 4.54618 4.02643 4.56482 3.57473 4.61501L3.35787 4.63911L3.33184 4.642H3.33184C2.61977 4.72111 2.05094 4.78431 1.62029 4.87191C1.19557 4.9583 0.799742 5.08618 0.522665 5.36888C0.126232 5.77335 -0.0604009 6.3387 0.0173119 6.8997C0.0716268 7.29178 0.313515 7.63022 0.603331 7.95251C0.89719 8.27924 1.31659 8.66875 1.84161 9.15626L1.86079 9.17408L2.08975 9.38665C2.48744 9.75594 2.58941 9.8604 2.64654 9.97164C2.70552 10.0865 2.73694 10.2135 2.7383 10.3427C2.73961 10.4675 2.69726 10.61 2.51513 11.1291L2.50652 11.1537L2.50651 11.1537C2.23773 11.9197 2.02488 12.5264 1.90403 12.9983C1.78663 13.4568 1.72085 13.907 1.8739 14.2968C2.08927 14.8454 2.55587 15.2566 3.12721 15.4012C3.53207 15.5037 3.96656 15.3843 4.40268 15.2123C4.85039 15.0357 5.41731 14.7522 6.13211 14.3948L6.15551 14.3831L6.7113 14.1052C7.08604 13.9178 7.18837 13.8717 7.28657 13.8533C7.38784 13.8343 7.49183 13.8343 7.59309 13.8533C7.69129 13.8717 7.79362 13.9178 8.16836 14.1052L8.72415 14.3831L8.74762 14.3948C9.46239 14.7522 10.0293 15.0357 10.477 15.2123C10.9131 15.3843 11.3476 15.5037 11.7524 15.4012C12.3238 15.2566 12.7904 14.8454 13.0058 14.2968C13.1588 13.907 13.093 13.4568 12.9756 12.9983C12.8548 12.5264 12.6419 11.9197 12.3731 11.1537V11.1536L12.3645 11.1291C12.1824 10.61 12.1401 10.4675 12.1413 10.3427C12.1427 10.2135 12.1741 10.0865 12.2332 9.97164C12.2903 9.8604 12.3922 9.75594 12.7899 9.38665L13.0189 9.17408L13.0381 9.15619C13.5631 8.66868 13.9825 8.27924 14.2763 7.95251C14.5662 7.63022 14.808 7.29178 14.8624 6.8997C14.9401 6.3387 14.7535 5.77335 14.357 5.36888C14.0799 5.08618 13.6841 4.9583 13.2594 4.87191C12.8287 4.78431 12.2599 4.72111 11.5478 4.642L11.5218 4.63911L11.305 4.61501C10.8532 4.56482 10.7328 4.54618 10.6343 4.50341C10.5327 4.45928 10.4409 4.39528 10.3644 4.31517C10.2902 4.2375 10.2311 4.13097 10.0278 3.72446L9.78892 3.24668L9.77728 3.22345C9.48087 2.63062 9.2429 2.15457 9.02595 1.80434C8.81019 1.45601 8.5667 1.14781 8.22335 0.98499Z" fill="#FFC250"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.863 0.98499C25.3671 0.749795 24.7918 0.749795 24.296 0.984989C23.9527 1.14781 23.7092 1.45601 23.4934 1.80434C23.2764 2.15457 23.0384 2.63062 22.742 3.22344L22.742 3.22346L22.7304 3.24668L22.4915 3.72447C22.2883 4.13097 22.2292 4.2375 22.155 4.31517C22.0784 4.39528 21.9866 4.45928 21.885 4.50341C21.7865 4.54618 21.6661 4.56482 21.2144 4.61501L20.9975 4.63911L20.9715 4.642H20.9715C20.2594 4.72111 19.6906 4.78431 19.2599 4.87191C18.8352 4.9583 18.4394 5.08618 18.1623 5.36888C17.7659 5.77335 17.5792 6.3387 17.657 6.8997C17.7113 7.29178 17.9532 7.63022 18.243 7.95251C18.5368 8.27924 18.9562 8.66875 19.4813 9.15626L19.5004 9.17408L19.7294 9.38665C20.1271 9.75594 20.2291 9.8604 20.2862 9.97164C20.3452 10.0865 20.3766 10.2135 20.3779 10.3427C20.3793 10.4675 20.3369 10.61 20.1548 11.1291L20.1462 11.1537L20.1462 11.1537C19.8774 11.9197 19.6645 12.5264 19.5437 12.9983C19.4263 13.4568 19.3605 13.907 19.5135 14.2968C19.7289 14.8454 20.1955 15.2566 20.7669 15.4012C21.1717 15.5037 21.6062 15.3843 22.0423 15.2123C22.49 15.0357 23.057 14.7522 23.7718 14.3948L23.7952 14.3831L24.3509 14.1052C24.7257 13.9178 24.828 13.8717 24.9262 13.8533C25.0275 13.8343 25.1315 13.8343 25.2327 13.8533C25.3309 13.8717 25.4333 13.9178 25.808 14.1052L26.3638 14.3831L26.3873 14.3948C27.102 14.7522 27.6689 15.0357 28.1166 15.2123C28.5527 15.3843 28.9872 15.5037 29.3921 15.4012C29.9634 15.2566 30.4301 14.8454 30.6454 14.2968C30.7985 13.907 30.7327 13.4568 30.6153 12.9983C30.4944 12.5264 30.2816 11.9197 30.0128 11.1537V11.1536L30.0042 11.1291C29.8221 10.61 29.7797 10.4675 29.781 10.3427C29.7824 10.2135 29.8138 10.0865 29.8728 9.97164C29.9299 9.8604 30.0318 9.75594 30.4296 9.38665L30.6585 9.17408L30.6777 9.15619C31.2027 8.66868 31.6222 8.27924 31.916 7.95251C32.2058 7.63022 32.4477 7.29178 32.502 6.8997C32.5797 6.3387 32.3931 5.77335 31.9966 5.36888C31.7196 5.08618 31.3237 4.9583 30.899 4.87191C30.4684 4.78431 29.8995 4.72111 29.1875 4.642L29.1614 4.63911L28.9446 4.61501C28.4929 4.56482 28.3725 4.54618 28.274 4.50341C28.1723 4.45928 28.0806 4.39528 28.004 4.31517C27.9298 4.2375 27.8707 4.13097 27.6675 3.72446L27.4286 3.24668L27.4169 3.22345C27.1205 2.63062 26.8826 2.15457 26.6656 1.80434C26.4498 1.45601 26.2064 1.14781 25.863 0.98499Z" fill="#FFC250"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5026 0.98499C43.0068 0.749795 42.4315 0.749795 41.9356 0.984989C41.5923 1.14781 41.3488 1.45601 41.133 1.80434C40.9161 2.15457 40.6781 2.63062 40.3817 3.22344L40.3817 3.22346L40.3701 3.24668L40.1312 3.72447C39.9279 4.13097 39.8688 4.2375 39.7946 4.31517C39.7181 4.39528 39.6263 4.45928 39.5247 4.50341C39.4261 4.54618 39.3057 4.56482 38.854 4.61501L38.6372 4.63911L38.6111 4.642H38.6111C37.8991 4.72111 37.3302 4.78431 36.8996 4.87191C36.4749 4.9583 36.079 5.08618 35.802 5.36888C35.4055 5.77335 35.2189 6.3387 35.2966 6.8997C35.3509 7.29178 35.5928 7.63022 35.8826 7.95251C36.1765 8.27924 36.5959 8.66875 37.1209 9.15626L37.1401 9.17408L37.369 9.38665C37.7667 9.75594 37.8687 9.8604 37.9258 9.97164C37.9848 10.0865 38.0162 10.2135 38.0176 10.3427C38.0189 10.4675 37.9766 10.61 37.7944 11.1291L37.7858 11.1537L37.7858 11.1537C37.517 11.9197 37.3042 12.5264 37.1833 12.9983C37.0659 13.4568 37.0001 13.907 37.1532 14.2968C37.3686 14.8454 37.8352 15.2566 38.4065 15.4012C38.8114 15.5037 39.2459 15.3843 39.682 15.2123C40.1297 15.0357 40.6966 14.7522 41.4114 14.3948L41.4348 14.3831L41.9906 14.1052C42.3653 13.9178 42.4677 13.8717 42.5659 13.8533C42.6671 13.8343 42.7711 13.8343 42.8724 13.8533C42.9706 13.8717 43.0729 13.9178 43.4477 14.1052L44.0034 14.3831L44.0269 14.3948C44.7417 14.7522 45.3086 15.0357 45.7563 15.2123C46.1924 15.3843 46.6269 15.5037 47.0317 15.4012C47.6031 15.2566 48.0697 14.8454 48.2851 14.2968C48.4381 13.907 48.3723 13.4568 48.2549 12.9983C48.1341 12.5264 47.9212 11.9197 47.6524 11.1537V11.1536L47.6438 11.1291C47.4617 10.61 47.4194 10.4675 47.4206 10.3427C47.422 10.2135 47.4534 10.0865 47.5125 9.97164C47.5696 9.8604 47.6715 9.75594 48.0692 9.38665L48.2982 9.17408L48.3174 9.15619C48.8424 8.66868 49.2618 8.27924 49.5556 7.95251C49.8455 7.63022 50.0873 7.29178 50.1417 6.8997C50.2194 6.3387 50.0328 5.77335 49.6363 5.36888C49.3592 5.08618 48.9634 4.9583 48.5387 4.87191C48.108 4.78431 47.5392 4.72111 46.8271 4.642L46.8011 4.63911L46.5843 4.61501C46.1325 4.56482 46.0121 4.54618 45.9136 4.50341C45.812 4.45928 45.7202 4.39528 45.6437 4.31517C45.5695 4.2375 45.5104 4.13097 45.3071 3.72446L45.0682 3.24668L45.0566 3.22345C44.7602 2.63062 44.5222 2.15457 44.3052 1.80434C44.0895 1.45601 43.846 1.14781 43.5026 0.98499Z" fill="#FFC250"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M61.1423 0.98499C60.6464 0.749795 60.0711 0.749795 59.5753 0.984989C59.232 1.14781 58.9885 1.45601 58.7727 1.80434C58.5557 2.15457 58.3177 2.63062 58.0213 3.22344L58.0213 3.22346L58.0097 3.24668L57.7708 3.72447C57.5676 4.13097 57.5085 4.2375 57.4342 4.31517C57.3577 4.39528 57.2659 4.45928 57.1643 4.50341C57.0658 4.54618 56.9454 4.56482 56.4937 4.61501L56.2768 4.63911L56.2508 4.642H56.2508C55.5387 4.72111 54.9699 4.78431 54.5392 4.87191C54.1145 4.9583 53.7187 5.08618 53.4416 5.36888C53.0452 5.77335 52.8585 6.3387 52.9363 6.8997C52.9906 7.29178 53.2325 7.63022 53.5223 7.95251C53.8161 8.27924 54.2355 8.66875 54.7606 9.15626L54.7797 9.17408L55.0087 9.38665C55.4064 9.75594 55.5084 9.8604 55.5655 9.97164C55.6245 10.0865 55.6559 10.2135 55.6572 10.3427C55.6586 10.4675 55.6162 10.61 55.4341 11.1291L55.4255 11.1537L55.4255 11.1537C55.1567 11.9197 54.9438 12.5264 54.823 12.9983C54.7056 13.4568 54.6398 13.907 54.7928 14.2968C55.0082 14.8454 55.4748 15.2566 56.0462 15.4012C56.451 15.5037 56.8855 15.3843 57.3216 15.2123C57.7693 15.0357 58.3363 14.7522 59.0511 14.3948L59.0745 14.3831L59.6302 14.1052C60.005 13.9178 60.1073 13.8717 60.2055 13.8533C60.3068 13.8343 60.4108 13.8343 60.512 13.8533C60.6102 13.8717 60.7126 13.9178 61.0873 14.1052L61.6431 14.3831L61.6666 14.3948C62.3813 14.7522 62.9482 15.0357 63.3959 15.2123C63.832 15.3843 64.2665 15.5037 64.6714 15.4012C65.2427 15.2566 65.7094 14.8454 65.9247 14.2968C66.0778 13.907 66.0119 13.4568 65.8946 12.9983C65.7737 12.5264 65.5609 11.9197 65.2921 11.1537V11.1536L65.2835 11.1291C65.1014 10.61 65.059 10.4675 65.0603 10.3427C65.0617 10.2135 65.0931 10.0865 65.1521 9.97164C65.2092 9.8604 65.3111 9.75594 65.7089 9.38665L65.9378 9.17408L65.957 9.15619C66.482 8.66868 66.9015 8.27924 67.1953 7.95251C67.4851 7.63022 67.727 7.29178 67.7813 6.8997C67.859 6.3387 67.6724 5.77335 67.2759 5.36888C66.9989 5.08618 66.603 4.9583 66.1783 4.87191C65.7477 4.78431 65.1788 4.72111 64.4668 4.642L64.4407 4.63911L64.2239 4.61501C63.7722 4.56482 63.6518 4.54618 63.5533 4.50341C63.4516 4.45928 63.3599 4.39528 63.2833 4.31517C63.2091 4.2375 63.15 4.13097 62.9468 3.72446L62.7079 3.24668L62.6962 3.22345C62.3998 2.63062 62.1618 2.15457 61.9449 1.80434C61.7291 1.45601 61.4856 1.14781 61.1423 0.98499Z" fill="#FFC250"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M78.7819 0.98499C78.2861 0.749795 77.7108 0.749795 77.2149 0.984989C76.8716 1.14781 76.6281 1.45601 76.4123 1.80434C76.1954 2.15457 75.9574 2.63062 75.661 3.22344L75.661 3.22346L75.6493 3.24668L75.4105 3.72447C75.2072 4.13097 75.1481 4.2375 75.0739 4.31517C74.9974 4.39528 74.9056 4.45928 74.8039 4.50341C74.7054 4.54618 74.585 4.56482 74.1333 4.61501L73.9165 4.63911L73.8904 4.642H73.8904C73.1784 4.72111 72.6095 4.78431 72.1789 4.87191C71.7542 4.9583 71.3583 5.08618 71.0813 5.36888C70.6848 5.77335 70.4982 6.3387 70.5759 6.8997C70.6302 7.29178 70.8721 7.63022 71.1619 7.95251C71.4558 8.27924 71.8752 8.66875 72.4002 9.15626L72.4194 9.17408L72.6483 9.38665C73.046 9.75594 73.148 9.8604 73.2051 9.97164C73.2641 10.0865 73.2955 10.2135 73.2969 10.3427C73.2982 10.4675 73.2559 10.61 73.0737 11.1291L73.0651 11.1537L73.0651 11.1537C72.7963 11.9197 72.5835 12.5264 72.4626 12.9983C72.3452 13.4568 72.2794 13.907 72.4325 14.2968C72.6479 14.8454 73.1145 15.2566 73.6858 15.4012C74.0907 15.5037 74.5252 15.3843 74.9613 15.2123C75.409 15.0357 75.9759 14.7522 76.6907 14.3948L76.7141 14.3831L77.2699 14.1052C77.6446 13.9178 77.747 13.8717 77.8452 13.8533C77.9464 13.8343 78.0504 13.8343 78.1517 13.8533C78.2499 13.8717 78.3522 13.9178 78.727 14.1052L79.2827 14.3831L79.3062 14.3948C80.021 14.7522 80.5879 15.0357 81.0356 15.2123C81.4717 15.3843 81.9062 15.5037 82.311 15.4012C82.8824 15.2566 83.349 14.8454 83.5644 14.2968C83.7174 13.907 83.6516 13.4568 83.5342 12.9983C83.4134 12.5264 83.2005 11.9197 82.9317 11.1537V11.1536L82.9231 11.1291C82.741 10.61 82.6987 10.4675 82.6999 10.3427C82.7013 10.2135 82.7327 10.0865 82.7918 9.97164C82.8489 9.8604 82.9508 9.75594 83.3485 9.38665L83.5775 9.17408L83.5967 9.15619C84.1217 8.66868 84.5411 8.27924 84.8349 7.95251C85.1247 7.63022 85.3666 7.29178 85.421 6.8997C85.4987 6.3387 85.312 5.77335 84.9156 5.36888C84.6385 5.08618 84.2427 4.9583 83.818 4.87191C83.3873 4.78431 82.8185 4.72111 82.1064 4.642L82.0804 4.63911L81.8636 4.61501C81.4118 4.56482 81.2914 4.54618 81.1929 4.50341C81.0913 4.45928 80.9995 4.39528 80.923 4.31517C80.8488 4.2375 80.7897 4.13097 80.5864 3.72446L80.3475 3.24668L80.3359 3.22345C80.0395 2.63062 79.8015 2.15457 79.5845 1.80434C79.3688 1.45601 79.1253 1.14781 78.7819 0.98499Z" fill="#FFC250"/>
</svg>)

const Netsol:React.FC = () => {
  return (
    <div>
      <div className='hidden sm:block'>
        <div className='text-[20px] text-[#A1A1AA] leading-8 px-[104px] pt-[80px] pb-[80px]'>
          Casestudies {'>'} <span className='text-[#00C6CC]'>Netsol</span>
        </div>

        <div className='flex flex-col items-center gap-[122px] px-[104px] pb-[100px]'>
          <div className='flex flex-col items-center gap-[48px]'>
            <h1 className='text-white text-[44px] leading-[54px] text-center tracking-[-1.2px] font-bold'>Premium private ride-hailing platform for a <br /> leading auto brand</h1>
            <p className='text-[22px] text-[#959595] leading-8 text-center'>Clyde created a secure, white-labeled ride-hailing solution for an elite German automaker. Designed for VIP and executive travel, the system repurposed idle premium vehicles for internal rides—eliminating the need for external platforms like Uber.</p>
            <div className='flex'>
              <img src="/assets/avatargroup.png" alt="" className='h-[46px] pr-5'/>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                <circle cx="4.16992" cy="4.16992" r="4.16992" fill="white"/>
                </svg>
                <p className='text-white pl-2 font-medium'>400k users</p>
              </div>
            </div>
          </div>
          <img src="/assets/netsolimg1.svg" alt="" className='w-full'/>
        </div>

        {/* Overview */}
        <div className='px-[104px]'>
        <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
        </div>
        <div className='px-[104px] pt-[60px] pb-[70px] '>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Overview</h1>
          <p className='text-[22px] text-[#BEBEBE] font-medium leading-8'>A world-class automotive giant needed a private ride-hailing solution that maximized the ROI of unused luxury vehicles while delivering a seamless, secure experience for their executives. Clyde designed and deployed an internal platform enabling fleet control, privacy, and ride optimization.</p>
        </div>

        {/* Challenges */}
        <div className='px-[104px]'>
        <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
        </div>
        <div className='px-[104px] pt-[60px] pb-[70px]'>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Challenges</h1>
          <p className='text-[22px] text-[#A1A1AA] leading-8'>The client needed a fully private alternative to commercial ride-hailing apps. The solution had to ensure high availability, fleet utilization, and airtight security while providing a top-tier passenger experience for high-ranking executives.</p>
        </div>

        {/* How did we build the VIP Ride-Hailing App? */}
        <div className='px-[104px]'>
        <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
        </div>
        <div className='px-[104px] pt-[60px] pb-[80px]'>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>How did we build the VIP Ride-Hailing App?</h1>
          <div className='flex gap-[35px]'>
            <div className='bg-[#3245FF]  rounded-[20px] pt-6 pl-6 pr-[29px] pb-[50px]'>
              <div><RectSvg/></div>
              <h1 className='text-[#F3F4F6] text-[32px] font-semibold leading-[48px] pt-[25px]'>Smart Ride Matching</h1>
              <p className='text-[16px] text-[#F3F4F6] leading-6 font-medium pt-[21px]'>Intelligent dispatch system prioritizing executive travel requests.</p>
            </div>
            <div className='rounded-[20px] pt-6 pl-6 pr-[29px] pb-[50px]'
            style={{
              background: 'linear-gradient(84deg, #325CB5 0%, #47C9E3 100%)',
            }}
            >
              <div><CircleSvg/></div>
              <h1 className='text-[#F3F4F6] text-[32px] font-semibold leading-[48px] pt-[25px]'>Live Fleet Management</h1>
              <p className='text-[16px] text-[#F3F4F6] leading-6 font-medium pt-[21px]'>Real-time vehicle tracking, estimated arrival, and dynamic routing.</p>
            </div>
            <div className='rounded-[20px] pt-6 pl-6 pr-[29px] pb-[50px]'
            style={{
              background: 'linear-gradient(84deg, #DC3554 0%, #EA3DCC 100%)',
            }}
            >
              <div><CircleSvg/></div>
              <h1 className='text-[#F3F4F6] text-[32px] font-semibold leading-[48px] pt-[25px]'>Admin Command Centre</h1>
              <p className='text-[16px] text-[#F3F4F6] leading-6 font-medium pt-[21px]'>Web dashboard with analytics, ride summaries, and vehicle performance.</p>
            </div>
          </div>
        </div>


        {/* Tech Stack */}
        <div className='px-[104px]'>
        <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
        </div>
        <div className='px-[104px] pt-[60px]'>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Tech Stack</h1>
          <div className='flex flex-col gap-[35px]'>
            <div className='flex gap-[34px]'>
              <div className='flex items-center w-1/2 pl-[28px] py-[31px] border border-[#212121] rounded-[24px]'>
                <div className='p-[15px] bg-[#EBEBEB0D] rounded-xl'>
                  <CustomIcon/>
                </div>
                <p className='text-[22px] leading-7 text-[#EFEFEF] pl-[43px]'><span className='text-[#939393]'>Frontend:</span>React Native (Rider & Driver)</p>
              </div>
              <div className='flex items-center w-1/2 pl-[28px] py-[31px] border border-[#212121] rounded-[24px]'>
                <div className='p-[15px]  bg-[#EBEBEB0D] rounded-xl'>
                  <CustomIcon/>
                </div>
                <p className='text-[22px] leading-7 text-[#EFEFEF] pl-[43px]'><span className='text-[#939393]'>Backend:</span>Node.js, PostgreSQL</p>
              </div>
            </div>
            <div className='flex gap-[34px]'>
              <div className='flex items-center w-1/2 pl-[28px] py-[31px] border border-[#212121] rounded-[24px]'>
                <div className='p-[15px] bg-[#EBEBEB0D] rounded-xl'>
                  <CustomIcon/>
                </div>
                <p className='text-[22px] leading-7 text-[#EFEFEF] pl-[43px]'><span className='text-[#939393]'>Mapping:</span>Google Maps API, Custom Routing Logic</p>
              </div>
              <div className='flex items-center w-1/2 pl-[28px] py-[31px] border border-[#212121] rounded-[24px]'>
                <div className='p-[15px] bg-[#EBEBEB0D] rounded-xl'>
                  <CustomIcon/>
                </div>
                <p className='text-[22px] leading-7 text-[#EFEFEF] pl-[43px]'><span className='text-[#939393]'>Hosting:</span>AWS (secure, isolated infra)</p>
              </div>
            </div>
          </div>
        </div>

        {/* what we delivered */}
        <div className='px-[104px] pt-[150px] pb-[80px]'>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[59px]'>What We Delivered</h1>
          <div className='flex gap-[52px]'>
            <div className='flex flex-col justify-center gap-[20px] py-[23px] w-[58%]'>
              <div className='flex items-center py-[21px] px-[50px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
                <CheckIcon/>
                <p className='text-[24px] text-white leading-[30px] pl-[12px]'>Boosted purchase conversion rates</p>
              </div>
              <div className='flex items-center py-[21px] px-[50px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
                <CheckIcon/>
                <p className=' text-[24px] text-white leading-[30px] pl-[12px]'>Improved User retention</p>
              </div>
              <div className='flex items-center py-[21px] px-[50px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
                <CheckIcon/>
                <p className='text-[24px] text-white leading-[30px] pl-[12px]'>Reduced drop-offs across payment flows</p>
              </div>
              <div className='flex items-center py-[21px] px-[50px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
                <CheckIcon/>
                <p className='text-[24px] text-white leading-[30px] pl-[12px]'>Boosted purchase conversion rates</p>
              </div>
              <div className='flex items-center py-[21px] px-[50px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
                <CheckIcon/>
                <p className='text-[24px] text-white leading-[30px] pl-[12px]'>Boosted purchase conversion rates</p>
              </div>
            </div>

            <img src="/assets/deliver1.png" alt="" className='w-[42%]'/>
          </div>
        </div>

        {/* Tracking Performance and Measuring Results */}
        <div className='px-[104px]'>
        <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
        </div>
        <div className='px-[104px] pt-[70px] '>
          <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Tracking Performance and Measuring Results</h1>
          <div className='flex gap-[34px]'>
            <div className='flex flex-col justify-between py-[30px] w-[22.36%] bg-[#101215] rounded-2xl'>
              <h1 className='text-4 leading-5 font-semibold text-[#BBBBBB] tracking-[0.01px] px-[30px]'>
                Fleet Utilization Breakdown
              </h1>

              {/* Centered Fleet Component */}
              <div className='flex justify-center items-center px-[30px] pt-[35px] pb-[30px]'>
                <div className='absolute pt-7'>
                <h1 className=' text-[16px] text-[#CFCFCF] font-semibold'>Active Vehicles</h1>
                <p className='text-[10px] text-[#696D6E] font-semibold text-center'>100+</p>
                </div>
                <img src="/assets/donut.png" alt="" />
              </div>

              <div className='flex justify-between px-[24px]'>
                <div className='bg-[#FF715B] text-[10px] rounded-[4px] text-white font-medium leading-5 px-2'>
                  S-CLASS
                </div>
                <div className='bg-[#663EE6] text-[10px] rounded-1 text-white font-medium leading-5 px-2'>
                  F-SERIES
                </div>
                <div className='bg-[#33D09A] text-[10px] rounded-1 text-white font-medium leading-5 px-5'>
                  EOS
                </div>
              </div>
            </div>



            <div className='flex flex-col justify-between px-[30px] pt-[30px] bg-[#101215] w-[46.58%] rounded-2xl'>
              <h1 className='text-4 leading-5 font-semibold text-[#BBBBBB]'>Last Month Ride Activity Snapshot</h1>
              <div className='flex gap-7'>
                <div>
                  <h1 className='text-[#0496FF] text-[28px] font-bold leading-10'>68.4</h1>
                  <p className='text-[#727677]'>Bookings</p>
                </div>
                <div className='w-[1px] bg-[#E4EAF0]'></div>
                <div>
                  <h1 className='text-[#FF715B] text-[28px] font-bold leading-10'>55.2</h1>
                  <p className='text-[#727677] '>completed Rides</p>
                </div>
              </div>
              {/* w-[89.2%] */}
              <img src="/assets/graph1.png" alt="" />
            </div>
            {/* <img src="/assets/tracking.png" alt="" className='w-[69.6%]'/> */}
            <div className='flex flex-col w-[24.3%] gap-[25px] '>
              <div style={{background: 'linear-gradient(180deg, rgba(0, 142, 153, 0.26) 0%, rgba(255, 255, 255, 0.00) 100%)'}} className='flex flex-col items-center gap-[8px] h-1/2 justify-center  rounded-2xl'>
                <h1 className='text-[40px] text-white font-semibold text-center'>70%</h1>
                <p  className='text-[#B5B2B2] text-center text-[16px]'>Increase in player retention</p>
              </div>
              <div style={{background: 'linear-gradient(180deg, rgba(0, 142, 153, 0.26) 0%, rgba(255, 255, 255, 0.00) 100%)'}} className='flex flex-col items-center gap-[8px] h-1/2 justify-center  rounded-2xl'>
                <h1 className='text-[40px] font-semibold text-white text-center'>3x</h1>
                <p  className='text-[#B5B2B2] text-[16px] '>Longer average play sessions</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* founder */}
        <div className='px-[104px] pt-[80px] pb-[68px]'>
          <div className='flex flex-col px-[38px] py-[44px] gap-[38px] bg-[#1D2123] rounded-[24px]'>
            <div className='flex gap-6'>
              <img src="/assets/netsolfounder.png" alt="" className='h-[58px]'/>
              <div>
                <h1 className='text-[20px] text-white '>Ashley Cooper, CEO - Netsol</h1>
                <div>
                  <Stars/>
                </div>
              </div>
            </div>
            <div className='text-[#DFDFDF] leading-[30px] text-[20px]'>Working with Clyde was a game-changer. We needed a private, secure, and premium ride-hailing solution for our executives—and they delivered exactly that. The platform not only aligned with our brand’s standards but also gave us full control over our fleet. It’s streamlined, reliable, and built entirely around our needs.</div>
          </div>
        </div>

        <div className='px-[104px] pt-[80px] pb-[68px]'>    
          <div className='flex gap-[46px]'>
            <img src="/assets/netsol3.png" alt="" className='w-[42.11%]'/>
            <img src="/assets/netsol4.png" alt="" className='w-[53.75%]'/>
          </div>
        </div>

        <div className='px-[104px] pt-[80px] pb-[68px]'>    
          <div className='bg-[url("/assets/bgnetsol.png")] py-[72px] flex flex-col items-center bg-cover
          bg-center rounded-[32px]'>
            <h1 className=' text-[40px] font-semibold leading-[58px] tracking-[-1.2px] text-[#EDF3FF]'>Ready to build your private ride platform?</h1>
            <p className='text-[24px] leading-[58px] tracking-[-1.2px] text-[#747474] pt-4 pb-[48px]'>Take control of your fleet. Go white-label.</p>
            <Link to="/contact">
            <button className='text-white bg-[#008E99] py-3 px-5 rounded-[12px]'>Contact Us</button></Link>
          </div>
        </div>
      </div>
      <div className='sm:hidden'>
        <MobNetsol/>
      </div>
    </div>
  )
}

export default Netsol
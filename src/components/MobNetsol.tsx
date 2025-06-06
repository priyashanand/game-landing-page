import React from 'react'
import { Link } from 'react-router-dom';

const CustomIcon = ({ width = 20, height = 20, fill = '#38E8EE', ...props }) => (
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

const Quotes = () =>(
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 41 39" fill="none">
    <path d="M17.3194 31.98H5.96008V18.5816C5.96008 14.9799 6.71737 12.2425 8.23194 10.3696C9.89798 8.4247 12.6999 7.30816 16.6378 7.02002V13.3951C15.2747 13.3951 14.1388 13.9353 13.23 15.0159C12.7757 15.5921 12.5485 16.7087 12.5485 18.3655V20.4185H17.3194V31.98ZM35.0399 31.98H23.6806V18.5816C23.6806 14.9799 24.3622 12.3506 25.7253 10.6938C27.5428 8.53275 30.4205 7.30816 34.3584 7.02002V13.3951C32.0108 13.3951 30.6855 14.5116 30.3826 16.7447C30.3069 17.0328 30.269 17.5731 30.269 18.3655V20.4185H35.0399V31.98Z" fill="#8C8C8B"/>
  </svg>
);



const RectSvg = () =>(<svg xmlns="http://www.w3.org/2000/svg" width="44" height="33" viewBox="0 0 131 97" fill="none">
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


const CheckIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 16.5C3 9.32 8.82 3.5 16 3.5C23.18 3.5 29 9.32 29 16.5C29 23.68 23.18 29.5 16 29.5C8.82 29.5 3 23.68 3 16.5ZM20.8133 14.0813C20.8933 13.9747 20.9512 13.8532 20.9836 13.7239C21.0159 13.5946 21.0221 13.4602 21.0018 13.3285C20.9815 13.1968 20.935 13.0704 20.8651 12.9569C20.7953 12.8434 20.7034 12.745 20.595 12.6675C20.4866 12.59 20.3638 12.535 20.2337 12.5056C20.1037 12.4763 19.9692 12.4732 19.838 12.4966C19.7068 12.52 19.5816 12.5694 19.4697 12.6419C19.3579 12.7144 19.2616 12.8085 19.1867 12.9187L14.872 18.9587L12.7067 16.7933C12.5171 16.6167 12.2664 16.5205 12.0073 16.5251C11.7482 16.5297 11.5011 16.6346 11.3178 16.8178C11.1346 17.0011 11.0297 17.2482 11.0251 17.5073C11.0205 17.7664 11.1167 18.0171 11.2933 18.2067L14.2933 21.2067C14.396 21.3092 14.5197 21.3882 14.656 21.4382C14.7922 21.4881 14.9377 21.5078 15.0824 21.4959C15.227 21.484 15.3673 21.4407 15.4935 21.3691C15.6197 21.2975 15.7289 21.1993 15.8133 21.0813L20.8133 14.0813Z" fill="#75E761"/>
</svg>)

const Stars = () => (<svg width="64" height="9" viewBox="0 0 64 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.97391 0.108511C4.67397 -0.0361699 4.32602 -0.0361704 4.02608 0.10851C3.81844 0.208668 3.67115 0.398257 3.54064 0.612535C3.40942 0.827979 3.26545 1.12082 3.08618 1.4855L3.08617 1.48551L3.07915 1.49979L2.93466 1.79371C2.81172 2.04377 2.77597 2.1093 2.73109 2.15708C2.68479 2.20636 2.62928 2.24573 2.56781 2.27287C2.50821 2.29918 2.43539 2.31065 2.16218 2.34153L2.03101 2.35635L2.01527 2.35813H2.01527C1.58457 2.40679 1.24052 2.44567 0.980038 2.49956C0.723142 2.5527 0.483725 2.63137 0.316135 2.80527C0.0763518 3.05408 -0.0365336 3.40186 0.0104711 3.74696C0.0433236 3.98815 0.18963 4.19634 0.364926 4.39459C0.542667 4.59559 0.796344 4.83519 1.1139 5.13509L1.1255 5.14605L1.26399 5.27681C1.50453 5.50398 1.56621 5.56824 1.60076 5.63667C1.63644 5.70735 1.65544 5.78547 1.65626 5.8649C1.65706 5.94172 1.63144 6.02937 1.52128 6.34869L1.51608 6.36379L1.51606 6.36383C1.3535 6.83502 1.22475 7.20821 1.15165 7.49854C1.08064 7.78055 1.04086 8.0575 1.13343 8.29731C1.2637 8.6348 1.54592 8.88769 1.8915 8.97666C2.13638 9.03973 2.39918 8.96627 2.66297 8.86045C2.93377 8.75182 3.27667 8.57745 3.70901 8.3576L3.72317 8.3504L4.05934 8.17943C4.286 8.06417 4.34789 8.03583 4.40729 8.02446C4.46854 8.0128 4.53144 8.0128 4.59269 8.02446C4.65209 8.03583 4.71399 8.06417 4.94065 8.17943L5.27682 8.3504L5.29101 8.3576C5.72334 8.57745 6.06623 8.75182 6.33701 8.86045C6.60078 8.96627 6.8636 9.03973 7.10848 8.97666C7.45406 8.88769 7.7363 8.6348 7.86656 8.29731C7.95914 8.0575 7.91932 7.78055 7.84834 7.49854C7.77523 7.20821 7.6465 6.83502 7.4839 6.36379V6.36374L7.47871 6.34869C7.36856 6.02937 7.34294 5.94172 7.3437 5.8649C7.34455 5.78547 7.36353 5.70735 7.39924 5.63667C7.43379 5.56824 7.49544 5.50398 7.73602 5.27681L7.87448 5.14605L7.88611 5.13504C8.20365 4.83515 8.45734 4.59559 8.63506 4.39459C8.81036 4.19634 8.95667 3.98815 8.98953 3.74696C9.03654 3.40186 8.92365 3.05408 8.68384 2.80527C8.51626 2.63137 8.27685 2.5527 8.01995 2.49956C7.75946 2.44567 7.41541 2.40679 6.98473 2.35813L6.96897 2.35635L6.83782 2.34153C6.56459 2.31065 6.49176 2.29918 6.4322 2.27287C6.37071 2.24573 6.31521 2.20636 6.26892 2.15708C6.22404 2.1093 6.18828 2.04377 6.06534 1.7937L5.92084 1.4998L5.91381 1.48551C5.73452 1.12082 5.59059 0.827979 5.45936 0.612535C5.32886 0.398257 5.18158 0.208672 4.97391 0.108511Z" fill="#FFC250"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5266 0.108511C18.1933 -0.0361699 17.8067 -0.0361704 17.4734 0.10851C17.2427 0.208668 17.0791 0.398257 16.934 0.612535C16.7882 0.827979 16.6283 1.12082 16.4291 1.4855L16.4291 1.48551L16.4213 1.49979L16.2607 1.79371C16.1241 2.04377 16.0844 2.1093 16.0345 2.15708C15.9831 2.20636 15.9214 2.24573 15.8531 2.27287C15.7869 2.29918 15.706 2.31065 15.4024 2.34153L15.2567 2.35635L15.2392 2.35813H15.2392C14.7606 2.40679 14.3784 2.44567 14.0889 2.49956C13.8035 2.5527 13.5375 2.63137 13.3513 2.80527C13.0848 3.05408 12.9594 3.40186 13.0116 3.74696C13.0481 3.98815 13.2107 4.19634 13.4055 4.39459C13.603 4.59559 13.8848 4.83519 14.2377 5.13509L14.2506 5.14605L14.4044 5.27681C14.6717 5.50398 14.7402 5.56824 14.7786 5.63667C14.8183 5.70735 14.8394 5.78547 14.8403 5.8649C14.8412 5.94172 14.8127 6.02937 14.6903 6.34869L14.6845 6.36379L14.6845 6.36383C14.5039 6.83502 14.3608 7.20821 14.2796 7.49854C14.2007 7.78055 14.1565 8.0575 14.2594 8.29731C14.4041 8.6348 14.7177 8.88769 15.1017 8.97666C15.3738 9.03973 15.6658 8.96627 15.9589 8.86045C16.2597 8.75182 16.6407 8.57745 17.1211 8.3576L17.1369 8.3504L17.5104 8.17943C17.7622 8.06417 17.831 8.03583 17.897 8.02446C17.965 8.0128 18.0349 8.0128 18.103 8.02446C18.169 8.03583 18.2378 8.06417 18.4896 8.17943L18.8631 8.3504L18.8789 8.3576C19.3593 8.57745 19.7403 8.75182 20.0411 8.86045C20.3342 8.96627 20.6262 9.03973 20.8983 8.97666C21.2823 8.88769 21.5959 8.6348 21.7406 8.29731C21.8435 8.0575 21.7992 7.78055 21.7204 7.49854C21.6391 7.20821 21.4961 6.83502 21.3154 6.36379V6.36374L21.3097 6.34869C21.1873 6.02937 21.1588 5.94172 21.1597 5.8649C21.1606 5.78547 21.1817 5.70735 21.2214 5.63667C21.2598 5.56824 21.3283 5.50398 21.5956 5.27681L21.7494 5.14605L21.7623 5.13504C22.1152 4.83515 22.397 4.59559 22.5945 4.39459C22.7893 4.19634 22.9519 3.98815 22.9884 3.74696C23.0406 3.40186 22.9152 3.05408 22.6487 2.80527C22.4625 2.63137 22.1965 2.5527 21.911 2.49956C21.6216 2.44567 21.2393 2.40679 20.7608 2.35813L20.7433 2.35635L20.5976 2.34153C20.294 2.31065 20.2131 2.29918 20.1469 2.27287C20.0786 2.24573 20.0169 2.20636 19.9655 2.15708C19.9156 2.1093 19.8759 2.04377 19.7393 1.7937L19.5787 1.4998L19.5709 1.48551C19.3717 1.12082 19.2118 0.827979 19.066 0.612535C18.921 0.398257 18.7573 0.208672 18.5266 0.108511Z" fill="#FFC250"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.5266 0.108511C32.1933 -0.0361699 31.8067 -0.0361704 31.4734 0.10851C31.2427 0.208668 31.0791 0.398257 30.934 0.612535C30.7882 0.827979 30.6283 1.12082 30.4291 1.4855L30.4291 1.48551L30.4213 1.49979L30.2607 1.79371C30.1241 2.04377 30.0844 2.1093 30.0345 2.15708C29.9831 2.20636 29.9214 2.24573 29.8531 2.27287C29.7869 2.29918 29.706 2.31065 29.4024 2.34153L29.2567 2.35635L29.2392 2.35813H29.2392C28.7606 2.40679 28.3784 2.44567 28.0889 2.49956C27.8035 2.5527 27.5375 2.63137 27.3513 2.80527C27.0848 3.05408 26.9594 3.40186 27.0116 3.74696C27.0481 3.98815 27.2107 4.19634 27.4055 4.39459C27.603 4.59559 27.8848 4.83519 28.2377 5.13509L28.2506 5.14605L28.4044 5.27681C28.6717 5.50398 28.7402 5.56824 28.7786 5.63667C28.8183 5.70735 28.8394 5.78547 28.8403 5.8649C28.8412 5.94172 28.8127 6.02937 28.6903 6.34869L28.6845 6.36379L28.6845 6.36383C28.5039 6.83502 28.3608 7.20821 28.2796 7.49854C28.2007 7.78055 28.1565 8.0575 28.2594 8.29731C28.4041 8.6348 28.7177 8.88769 29.1017 8.97666C29.3738 9.03973 29.6658 8.96627 29.9589 8.86045C30.2597 8.75182 30.6407 8.57745 31.1211 8.3576L31.1369 8.3504L31.5104 8.17943C31.7622 8.06417 31.831 8.03583 31.897 8.02446C31.965 8.0128 32.0349 8.0128 32.103 8.02446C32.169 8.03583 32.2378 8.06417 32.4896 8.17943L32.8631 8.3504L32.8789 8.3576C33.3593 8.57745 33.7403 8.75182 34.0411 8.86045C34.3342 8.96627 34.6262 9.03973 34.8983 8.97666C35.2823 8.88769 35.5959 8.6348 35.7406 8.29731C35.8435 8.0575 35.7992 7.78055 35.7204 7.49854C35.6391 7.20821 35.4961 6.83502 35.3154 6.36379V6.36374L35.3097 6.34869C35.1873 6.02937 35.1588 5.94172 35.1597 5.8649C35.1606 5.78547 35.1817 5.70735 35.2214 5.63667C35.2598 5.56824 35.3283 5.50398 35.5956 5.27681L35.7494 5.14605L35.7623 5.13504C36.1152 4.83515 36.397 4.59559 36.5945 4.39459C36.7893 4.19634 36.9519 3.98815 36.9884 3.74696C37.0406 3.40186 36.9152 3.05408 36.6487 2.80527C36.4625 2.63137 36.1965 2.5527 35.911 2.49956C35.6216 2.44567 35.2393 2.40679 34.7608 2.35813L34.7433 2.35635L34.5976 2.34153C34.294 2.31065 34.2131 2.29918 34.1469 2.27287C34.0786 2.24573 34.0169 2.20636 33.9655 2.15708C33.9156 2.1093 33.8759 2.04377 33.7393 1.7937L33.5787 1.4998L33.5709 1.48551C33.3717 1.12082 33.2118 0.827979 33.066 0.612535C32.921 0.398257 32.7573 0.208672 32.5266 0.108511Z" fill="#FFC250"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.5266 0.108511C46.1933 -0.0361699 45.8067 -0.0361704 45.4734 0.10851C45.2427 0.208668 45.0791 0.398257 44.934 0.612535C44.7882 0.827979 44.6283 1.12082 44.4291 1.4855L44.4291 1.48551L44.4213 1.49979L44.2607 1.79371C44.1241 2.04377 44.0844 2.1093 44.0345 2.15708C43.9831 2.20636 43.9214 2.24573 43.8531 2.27287C43.7869 2.29918 43.706 2.31065 43.4024 2.34153L43.2567 2.35635L43.2392 2.35813H43.2392C42.7606 2.40679 42.3784 2.44567 42.0889 2.49956C41.8035 2.5527 41.5375 2.63137 41.3513 2.80527C41.0848 3.05408 40.9594 3.40186 41.0116 3.74696C41.0481 3.98815 41.2107 4.19634 41.4055 4.39459C41.603 4.59559 41.8848 4.83519 42.2377 5.13509L42.2506 5.14605L42.4044 5.27681C42.6717 5.50398 42.7402 5.56824 42.7786 5.63667C42.8183 5.70735 42.8394 5.78547 42.8403 5.8649C42.8412 5.94172 42.8127 6.02937 42.6903 6.34869L42.6845 6.36379L42.6845 6.36383C42.5039 6.83502 42.3608 7.20821 42.2796 7.49854C42.2007 7.78055 42.1565 8.0575 42.2594 8.29731C42.4041 8.6348 42.7177 8.88769 43.1017 8.97666C43.3738 9.03973 43.6658 8.96627 43.9589 8.86045C44.2597 8.75182 44.6407 8.57745 45.1211 8.3576L45.1369 8.3504L45.5104 8.17943C45.7622 8.06417 45.831 8.03583 45.897 8.02446C45.965 8.0128 46.0349 8.0128 46.103 8.02446C46.169 8.03583 46.2378 8.06417 46.4896 8.17943L46.8631 8.3504L46.8789 8.3576C47.3593 8.57745 47.7403 8.75182 48.0411 8.86045C48.3342 8.96627 48.6262 9.03973 48.8983 8.97666C49.2823 8.88769 49.5959 8.6348 49.7406 8.29731C49.8435 8.0575 49.7992 7.78055 49.7204 7.49854C49.6391 7.20821 49.4961 6.83502 49.3154 6.36379V6.36374L49.3097 6.34869C49.1873 6.02937 49.1588 5.94172 49.1597 5.8649C49.1606 5.78547 49.1817 5.70735 49.2214 5.63667C49.2598 5.56824 49.3283 5.50398 49.5956 5.27681L49.7494 5.14605L49.7623 5.13504C50.1152 4.83515 50.397 4.59559 50.5945 4.39459C50.7893 4.19634 50.9519 3.98815 50.9884 3.74696C51.0406 3.40186 50.9152 3.05408 50.6487 2.80527C50.4625 2.63137 50.1965 2.5527 49.911 2.49956C49.6216 2.44567 49.2393 2.40679 48.7608 2.35813L48.7433 2.35635L48.5976 2.34153C48.294 2.31065 48.2131 2.29918 48.1469 2.27287C48.0786 2.24573 48.0169 2.20636 47.9655 2.15708C47.9156 2.1093 47.8759 2.04377 47.7393 1.7937L47.5787 1.4998L47.5709 1.48551C47.3717 1.12082 47.2118 0.827979 47.066 0.612535C46.921 0.398257 46.7573 0.208672 46.5266 0.108511Z" fill="#FFC250"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M59.9739 0.108511C59.674 -0.0361699 59.326 -0.0361704 59.0261 0.10851C58.8184 0.208668 58.6712 0.398257 58.5406 0.612535C58.4094 0.827979 58.2655 1.12082 58.0862 1.4855L58.0862 1.48551L58.0792 1.49979L57.9347 1.79371C57.8117 2.04377 57.776 2.1093 57.7311 2.15708C57.6848 2.20636 57.6293 2.24573 57.5678 2.27287C57.5082 2.29918 57.4354 2.31065 57.1622 2.34153L57.031 2.35635L57.0153 2.35813H57.0153C56.5846 2.40679 56.2405 2.44567 55.98 2.49956C55.7231 2.5527 55.4837 2.63137 55.3161 2.80527C55.0764 3.05408 54.9635 3.40186 55.0105 3.74696C55.0433 3.98815 55.1896 4.19634 55.3649 4.39459C55.5427 4.59559 55.7963 4.83519 56.1139 5.13509L56.1255 5.14605L56.264 5.27681C56.5045 5.50398 56.5662 5.56824 56.6008 5.63667C56.6364 5.70735 56.6554 5.78547 56.6563 5.8649C56.6571 5.94172 56.6314 6.02937 56.5213 6.34869L56.5161 6.36379L56.5161 6.36383C56.3535 6.83502 56.2248 7.20821 56.1517 7.49854C56.0806 7.78055 56.0409 8.0575 56.1334 8.29731C56.2637 8.6348 56.5459 8.88769 56.8915 8.97666C57.1364 9.03973 57.3992 8.96627 57.663 8.86045C57.9338 8.75182 58.2767 8.57745 58.709 8.3576L58.7232 8.3504L59.0593 8.17943C59.286 8.06417 59.3479 8.03583 59.4073 8.02446C59.4685 8.0128 59.5314 8.0128 59.5927 8.02446C59.6521 8.03583 59.714 8.06417 59.9406 8.17943L60.2768 8.3504L60.291 8.3576C60.7233 8.57745 61.0662 8.75182 61.337 8.86045C61.6008 8.96627 61.8636 9.03973 62.1085 8.97666C62.4541 8.88769 62.7363 8.6348 62.8666 8.29731C62.9591 8.0575 62.9193 7.78055 62.8483 7.49854C62.7752 7.20821 62.6465 6.83502 62.4839 6.36379V6.36374L62.4787 6.34869C62.3686 6.02937 62.3429 5.94172 62.3437 5.8649C62.3445 5.78547 62.3635 5.70735 62.3992 5.63667C62.4338 5.56824 62.4954 5.50398 62.736 5.27681L62.8745 5.14605L62.8861 5.13504C63.2037 4.83515 63.4573 4.59559 63.6351 4.39459C63.8104 4.19634 63.9567 3.98815 63.9895 3.74696C64.0365 3.40186 63.9237 3.05408 63.6838 2.80527C63.5163 2.63137 63.2768 2.5527 63.0199 2.49956C62.7595 2.44567 62.4154 2.40679 61.9847 2.35813L61.969 2.35635L61.8378 2.34153C61.5646 2.31065 61.4918 2.29918 61.4322 2.27287C61.3707 2.24573 61.3152 2.20636 61.2689 2.15708C61.224 2.1093 61.1883 2.04377 61.0653 1.7937L60.9208 1.4998L60.9138 1.48551C60.7345 1.12082 60.5906 0.827979 60.4594 0.612535C60.3289 0.398257 60.1816 0.208672 59.9739 0.108511Z" fill="#FFC250"/>
</svg>
)

const MobNetsol:React.FC = () => {
  return (
    <div  className='pt-[63px]'>
      <div className='flex flex-col items-center gap-[41px] px-[22px] pb-[54px]'>
        <div className='flex flex-col items-center gap-[32px]'>
          <h1 className='text-white text-[24px] leading-[32px] tracking-[-1.2px] font-bold text-center px-[28px]'>Premium private ride-hailing platform for a leading 
auto brand</h1>
          <p className='text-[13px] text-[#A1A1AA] text-center leading-5'>Clyde built a private, secure ride-hailing platform that lets the automaker’s VIPs book its own idle luxury cars—no Uber required.</p>

          <div className='flex'>
            <img src="/assets/avatargroup.png" alt="" className='h-[33px] pr-5'/>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
              <circle cx="4.16992" cy="4.16992" r="4.16992" fill="white"/>
              </svg>
              <p className='text-white pl-2 text-[11px]'>400k users</p>
            </div>
          </div>
        
        </div>
        <img src="/assets/netsolimg1.svg" alt="" />
      </div>


      {/* Overview */}
      <div className='px-[22px]'>
      <div className='px-[22px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[22px] pt-[54px] pb-[54px] '>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-8  sm:pt-0 pb-[32px]'>Overview</h1>
        <p className='text-[13px] text-[#A1A1AA] font-medium text-center leading-5'>A world-class automotive giant needed a private ride-hailing solution that maximized the ROI of unused luxury vehicles while delivering a seamless, secure experience for their executives. Clyde designed and deployed an internal platform enabling fleet control, privacy, and ride optimization.</p>
      </div>

      {/* Challenges */}
     <div className='px-[22px]'>
      <div className='px-[22px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[22px] pt-[54px] pb-[54px] '>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-8  sm:pt-0 pb-[32px]'>Challenge</h1>
        <p className='text-[13px] text-[#A1A1AA] font-medium text-center leading-5'>The client needed a fully private alternative to commercial ride-hailing apps. The solution had to ensure high availability, fleet utilization, and airtight security while providing a top-tier passenger experience for high-ranking executives.</p>
      </div>


      {/* How did we build the VIP Ride-Hailing App? */}
      <div className='px-[22px]'>
      <div className='px-[22px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[22px] pt-[60px] pb-[80px]'>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>How did we build the VIP Ride-Hailing App?</h1>
        <div className='flex flex-col gap-[28px]'>
          <div className='bg-[#3245FF]  rounded-[12px] py-6 px-7 pr-[29px]'>
            <div><RectSvg/></div>
            <h1 className='text-[#F3F4F6] text-[20px] font-bold leading-[32px] pt-[16px]'>Smart Ride Matching</h1>
            <p className='text-[13px] text-[#DCDCDC] leading-6 font-medium pt-[8px]'>Intelligent dispatch system prioritizing executive travel requests.</p>
          </div>
          <div className='rounded-[12px] py-6 px-7 pr-[29px]'
          style={{
            background: 'linear-gradient(84deg, #325CB5 0%, #47C9E3 100%)',
          }}
          >
            <div><RectSvg/></div>
            <h1 className='text-[#F3F4F6] text-[20px] font-bold leading-[32px] pt-[16px]'>Live Fleet Management</h1>
            <p className='text-[13px] text-[#DCDCDC] leading-6 font-medium pt-[8px]'>Real-time vehicle tracking, estimated arrival, and dynamic routing.</p>
          </div>
          <div className='rounded-[12px] py-6 px-7 pr-[29px]'
          style={{
            background: 'linear-gradient(84deg, #DC3554 0%, #EA3DCC 100%)',
          }}
          >
            <div><RectSvg/></div>
            <h1 className='text-[#F3F4F6] text-[20px] font-bold leading-[32px] pt-[16px]'>Admin Command Centre</h1>
            <p className='text-[13px] text-[#DCDCDC] leading-6 font-medium pt-[8px]'>Web dashboard with analytics, ride summaries, and vehicle performance.</p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className='px-[22px]'>
      <div className='px-[22px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[22px] pt-[54px] pb-[55px]'>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pb-[32px]'>Tech Stack</h1>
        <div className='flex flex-col gap-[35px]'>  
          <div className='flex items-center  px-[14px] py-[10px] border border-[#212121] rounded-[24px]'>
            <div className='p-[13px] bg-[#EBEBEB0D] rounded-xl'>
              <CustomIcon/>
            </div>
            <p className='text-[13px] leading-[22px] text-[#EFEFEF] pl-[18px]'><span className='text-[#939393]'>Frontend:</span>React.js (S3 Hosted)</p>
          </div>
          <div className='flex items-center  px-[14px] py-[10px] border border-[#212121] rounded-[24px]'>
            <div className='p-[13px] bg-[#EBEBEB0D] rounded-xl'>
              <CustomIcon/>
            </div>
            <p className='text-[13px] leading-[22px] text-[#EFEFEF] pl-[18px]'><span className='text-[#939393]'>Backend:</span>Express.js on EC2, PostgreSQL (RDS)</p>
          </div>
        
        
          <div className='flex items-center px-[14px] py-[10px] border border-[#212121] rounded-[24px]'>
            <div className='p-[13px] bg-[#EBEBEB0D] rounded-xl'>
              <CustomIcon/>
            </div>
            <p className='text-[13px] leading-[22px] text-[#EFEFEF] pl-[18px]'><span className='text-[#939393]'>Payments:</span>Stripe (fiat), USDT on-chain (crypto)</p>
          </div>
          <div className='flex items-center px-[14px] py-[10px] border border-[#212121] rounded-[24px]'>
            <div className='p-[13px] bg-[#EBEBEB0D] rounded-xl'>
              <CustomIcon/>
            </div>
            <p className='text-[13px] leading-[22px] text-[#EFEFEF] pl-[18px]'><span className='text-[#939393]'>Security:</span>JWT login, webhook validation</p>
          </div>          
        </div>
        <img src="/assets/mobnetsol.svg" alt="" className='w-full h-auto pt-[44px]'/>
      </div>
      


      {/* What we Delivered */}
      <div className='px-[22px]'>
      <div className='px-[22px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[22px] pt-[54px] pb-[80px]'>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight '>What We Delivered</h1>
        <div className='flex gap-[24px] pt-[32px] '>
          <div className='flex flex-col justify-center gap-[20px] py-[23px] w-full'>
            <div className='flex items-center py-[14px] px-[14px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
              <CheckIcon/>
              <p className='text-[13px] text-[#DBDBDB] leading-[28px] pl-[12px]'>Dual apps for riders & drivers</p>
            </div>
            <div className='flex items-center py-[14px] px-[14px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
              <CheckIcon/>
              <p className=' text-[13px] text-[#DBDBDB] leading-[28px] pl-[12px]'>Real-time location tracking & ETAs</p>
            </div>
            <div className='flex items-center py-[14px] px-[14px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
              <CheckIcon/>
              <p className='text-[13px] text-[#DBDBDB] leading-[28px] pl-[12px]'>Priority matching engine for execs</p>
            </div>
            <div className='flex items-center py-[14px] px-[14px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
              <CheckIcon/>
              <p className='text-[13px] text-[#DBDBDB] leading-[28px] pl-[12px]'>Admin dashboard for fleet insights</p>
            </div>
            <div className='flex items-center py-[14px] px-[14px] bg-[#121315] border border-[#8A8A8A] rounded-full'>
              <CheckIcon/>
              <p className='text-[13px] text-[#DBDBDB] leading-[28px] pl-[12px]'>Simulated fare estimate-internal reports</p>
            </div>
          </div>
        </div>
      </div>


      {/* Tracking Performance and Measuring Results */}
      <div className='px-[22px]'>
      <div className='px-[22px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[22px] pt-[54px] pb-[80px]'>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight '>Tracking Performance and Measuring Results</h1>
        <div className='pt-[32.46px] flex flex-col gap-[46px]'>
          <div className='bg-[#101215] rounded-[16px] flex flex-col items-center px-[25px] py-[33px]'>
            <h1 className='text-[#BBBBBB] text-[16px] font-semibold pb-[32.48px]'>Fleet Utilization Breakdown</h1>
            <div className='flex justify-between'>
              <div className='flex justify-center items-center w-[54.04%]'>
                <div className='absolute pt-7'>
                <h1 className=' text-[13px] text-[#CFCFCF] font-semibold'>Active Vehicles</h1>
                <p className='text-[10px] text-[#696D6E] font-semibold text-center'>100+</p>
                </div>
                <img src="/assets/donut.svg" alt="" className=''/>
              </div>
              <div className='flex flex-col justify-center gap-3'>
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
          </div>
          <div className='flex flex-col justify-between px-[24px] py-[32px] bg-[#101215] rounded-[10px]'>
            <h1 className='text-4 leading-5 font-semibold text-[#BBBBBB] pb-4'>Last Month Ride Activity Snapshot</h1>
            <div className='flex gap-7 pb-10'>
              <div>
                <h1 className='text-[#0496FF] text-[24px] font-bold leading-10'>68.4</h1>
                <p className='text-[#727677] text-[12px]'>Bookings</p>
              </div>
              <div className='w-[1px] bg-[#E4EAF0]'></div>
              <div>
                <h1 className='text-[#FF715B] text-[24px] font-bold leading-10'>55.2</h1>
                <p className='text-[#727677] text-[12px]'>completed Rides</p>
              </div>
            </div>
            {/* w-[89.2%] */}
            <img src="/assets/graph1.png" alt="" />
          </div>
          <div className='flex gap-[14px] '>
            <div style={{background: 'linear-gradient(180deg, rgba(0, 142, 153, 0.26) 0%, rgba(255, 255, 255, 0.00) 100%)'}} className='flex flex-col items-center gap-[8px] h-1/2 justify-center  rounded-2xl px-[19px] py-[36px]'>
              <h1 className='text-[24px] text-white font-semibold text-center'>85%</h1>
              <p  className='text-[#DCDCDC] text-center text-[13px]'>Fleet utilization in the first month</p>
            </div>
            <div style={{background: 'linear-gradient(180deg, rgba(0, 142, 153, 0.26) 0%, rgba(255, 255, 255, 0.00) 100%)'}} className='flex flex-col items-center gap-[8px] h-1/2 justify-center  rounded-2xl px-[19px] py-[36px]'>
              <h1 className='text-[24px] font-semibold text-white text-center'>4x</h1>
              <p  className='text-[#DCDCDC] text-[13px] text-center'>Drop in third-party platform usage</p>
            </div>
          </div>
        </div>
      </div>


      {/* founder */}
      <div className='px-[22px] pb-[48px]'>
        <div className='px-[14px] py-[24px] bg-[#101012] rounded-2xl'>
          <div className='flex gap-[14px]'>
            <img src="/assets/netsolfounder.png" alt="" className='h-[37px]'/>
            <div className='flex flex-col items-start'>
              <h1 className='text-[14px] text-[#FFFCF6]  font-semibold'>Ashley Cooper, CEO -Netsol</h1>
              <Stars/>
            </div>
          </div>
          <div className='flex flex-col justify-between pt-5'>
            <Quotes/>
            <p className='text-[12px] text-[#DFDFDF] pt-4'>“ Working with Clyde was a game-changer. We needed a private, secure, and premium ride-hailing solution for our executives—and they delivered exactly that. The platform not only aligned with our brand’s standards but also gave us full control over our fleet. <span className='text-[#32B9C4] font-medium'>It’s streamlined, reliable, and built entirely around our needs. ”</span></p>
          </div>
        </div>
          <img src="/assets/mobnetsol1.svg" alt="" className='pt-[54px] w-full h-auto'/>
          <img src="/assets/mobnetsol2.svg" alt="" className='pt-[54px] w-full h-auto'/>

      </div>


      {/* the last section */}
      <div className='px-[22px] pt-[61px] pb-[48px]'>    
        <div className='bg-[url("/assets/bgnetsol.png")] py-[32px] flex flex-col items-center bg-cover
        bg-center rounded-[32px]'>
          <h1 className=' text-[20px] font-bold leading-[32px] tracking-[-1.2px] text-[#EDF3FF] text-center px-[29px]'>Ready to build your private ride platform?</h1>
          <p className='text-[12px] leading-[20px] tracking-[-1.2px] text-[#747474] pt-[14px] pb-[28px] text-center'>Take control of your fleet. Go white-label.</p>
          <Link to="/contact">
          <button className='text-white bg-[#008E99] py-3 px-5 rounded-[12px]'>Contact Us</button></Link>
        </div>
      </div>
    </div>
  )
}

export default MobNetsol
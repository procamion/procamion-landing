import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';

interface BenefitCardProps {
  title: string;
  iconFirst: React.ReactNode;
  iconSecond: React.ReactNode;
  textFirst: React.ReactNode;
  textSecond: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  iconFirst,
  iconSecond,
  textFirst,
  textSecond,
}) => {
  return (
    <div className="h-full w-full">
      <Title size={'small'}>{title}</Title>
      <div className="h-full  rounded-xl bg-[#252523] p-4">
        <div className="float-right -ml-20">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.25">
                  <path
                    d="M11.404 7.36353H21.7C21.9325 7.36353 22.1213 7.5424 22.1213 7.76278C22.1213 7.85237 22.0901 7.93505 22.0373 8.0017L20.8081 9.8216L21.7597 10.4048C21.9193 10.5016 21.9863 10.6842 21.9368 10.849L21.1809 13.8019L23.4888 10.3856L22.5355 9.80022C22.3823 9.70591 22.3156 9.53238 22.3561 9.37299L22.7923 7.66909C22.8387 7.48707 23.0108 7.36478 23.2002 7.36478L24.5963 7.36353L24.7333 7.3695C25.1396 7.40251 25.4995 7.57887 25.7586 7.84231C26.0219 8.11079 26.1818 8.47011 26.1818 8.86245L26.1758 8.98631C26.139 9.46227 26.1088 9.93634 26.0787 10.4265C25.7626 15.4856 25.3387 22.2456 18.4216 22.5084V28.6559H21.2599C21.4924 28.6559 21.6811 28.8348 21.6811 29.0552C21.6811 29.2756 21.4924 29.4544 21.2599 29.4544H14.7408C14.5083 29.4544 14.3196 29.2756 14.3196 29.0552C14.3196 28.8348 14.5083 28.6559 14.7408 28.6559H17.5791V22.5084C10.67 22.2434 10.2381 15.4319 9.91934 10.3859C9.88916 9.90711 9.85964 9.44561 9.82315 8.97657L9.81818 8.86245C9.81818 8.47011 9.97805 8.1111 10.2417 7.84231C10.5034 7.57541 10.8693 7.39811 11.2819 7.36856L11.404 7.36353ZM20.9315 8.16203L11.3476 8.1636C11.1509 8.17712 10.9791 8.26043 10.8567 8.38492C10.735 8.5091 10.6607 8.67729 10.6607 8.86245L10.6623 8.91747C10.6958 9.34753 10.7267 9.83512 10.7585 10.3394C11.0633 15.1675 11.4776 21.7187 18.0003 21.7187C24.5307 21.7187 24.9373 15.219 25.2395 10.3799C25.2713 9.8653 25.3028 9.36796 25.337 8.92627L25.3393 8.86245C25.3393 8.67729 25.265 8.50878 25.1436 8.38492C25.0229 8.26231 24.8547 8.17995 24.6657 8.16423C24.3008 8.14663 23.8988 8.16203 23.5299 8.16203L23.2424 9.28622C23.5863 9.50031 23.9446 9.73012 24.2945 9.93194C24.4895 10.0505 24.5462 10.2972 24.4212 10.4821L20.5344 16.236C20.4402 16.3747 20.2605 16.4486 20.082 16.4077C19.8568 16.3561 19.7185 16.1408 19.7729 15.9273L21.0545 10.9213C20.7059 10.7091 20.3547 10.4783 20.0024 10.2752C19.8074 10.1567 19.7507 9.90994 19.8757 9.72509L20.9315 8.16203Z"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    stroke="white"
                  />
                </g>
              </svg>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.25">
                  <path
                    d="M17.035 28.2148C16.1648 28.3308 15.2785 28.3055 14.4137 28.1382C13.2991 27.9225 12.2482 27.4762 11.3343 26.8313C10.4206 26.1865 9.66627 25.359 9.12339 24.4076C8.58054 23.4563 8.26194 22.4037 8.18911 21.3235L8.16711 20.997H7.83991H7.09688L9.86902 17.6272L12.6348 20.9966H11.9318H11.5564L11.5827 21.3711C11.6994 23.03 12.3655 24.608 13.4814 25.8761C14.4289 26.9527 15.6584 27.7581 17.035 28.2148ZM6.85301 21.2934L6.85521 21.2908L6.85301 21.2934Z"
                    stroke="white"
                    strokeWidth="0.7"
                  />
                  <path
                    d="M28.0885 13.9741L28.0891 13.9752C29.0506 15.6114 29.3431 17.5477 28.9076 19.3891C28.472 21.2305 27.3407 22.8396 25.7433 23.8868L25.4655 24.069L25.6328 24.3559L25.9871 24.9632L21.6941 24.3509L23.3067 20.3773L23.6484 20.9611L23.8354 21.2805L24.1439 21.076C25.5381 20.1517 26.5983 18.812 27.1698 17.251C27.6573 15.9191 27.7671 14.4858 27.4945 13.1045C27.7129 13.3799 27.9114 13.6705 28.0885 13.9741Z"
                    stroke="white"
                    strokeWidth="0.7"
                  />
                  <path
                    d="M8.74385 13.086C9.06843 12.2046 9.53526 11.3894 10.1241 10.6779C10.8606 9.78797 11.7698 9.08219 12.787 8.60862C13.804 8.1351 14.9051 7.90482 16.0131 7.9331C17.1211 7.96138 18.2107 8.24757 19.2056 8.77261L19.5115 8.934L19.6765 8.63015L20.0382 7.96438L21.6827 12.3424L17.3002 13.0124L17.6711 12.3272L17.8403 12.0147L17.5253 11.8503C16.0003 11.0541 14.2744 10.7956 12.5997 11.114C11.1628 11.3873 9.831 12.0725 8.74385 13.086ZM8.18935 13.6682L8.18937 13.6682L8.18935 13.6682Z"
                    stroke="white"
                    strokeWidth="0.7"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    stroke="white"
                  />
                </g>
              </svg>
            </div>
            <svg
              width="77"
              height="21"
              viewBox="0 0 77 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.25">
                <path
                  d="M77 0.419434V20.2904H68.6304V0.419434H77ZM66.1196 0.419434V20.2904H61.9348V0.419434H66.1196ZM60.2609 0.419434V20.2904H58.587V0.419434H60.2609ZM56.913 0.419434V20.2904H51.8913V0.419434H56.913ZM50.2174 0.419434V20.2904H48.5435V0.419434H50.2174ZM45.1957 0.419434V20.2904H43.5217V0.419434H45.1957ZM41.0109 0.419434V20.2904H39.337V0.419434H41.0109ZM37.663 0.419434V20.2904H35.9891V0.419434H37.663ZM32.6413 0.419434V20.2904H25.9457V0.419434H32.6413ZM23.4348 0.419434V20.2904H18.413V0.419434H23.4348ZM15.0652 0.419434V20.2904H13.3913V0.419434H15.0652ZM11.7174 0.419434V20.2904H8.36957V0.419434H11.7174ZM6.69565 0.419434V20.2904H0V0.419434H6.69565Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="align-center m-auto flex max-w-[350px] flex-col items-center justify-center text-center">
          {iconFirst}
          <Subtitle className="text-white" size={'medium'}>
            {textFirst}
          </Subtitle>
        </div>
        <div className="m-auto my-10 h-[1px] w-[350px] bg-gray-300/30" />
        <div className="align-center m-auto flex max-w-[350px] flex-col items-center justify-center text-center">
          {iconSecond}
          <Subtitle className="text-white" size={'medium'}>
            {textSecond}
          </Subtitle>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;

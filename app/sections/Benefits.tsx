import React from 'react';
import Title from '../components/Title';
import BenefitCard from '../components/BenefitCard';
import CircularProgressBar from '../components/CircleProgressBar/CircleProgressBar';
import {
  useScreenSizeCategory,
  ScreenSizeCategory,
} from '../lib/hooks/useScreenSize';

const Benefits = () => {
  const screenSizeCategory = useScreenSizeCategory();
  const isMobile = screenSizeCategory === ScreenSizeCategory.Mobile;
  return (
    <div
      id="numbers"
      className="align-center m-auto mt-20 flex max-w-[1250px] flex-col items-center justify-center"
    >
      <div className="mb-8 flex items-center justify-center">
        {!isMobile && <CircularProgressBar />}
      </div>
      <div className="text-center text-sm font-medium uppercase text-neutral-500  md:text-xl">
        environmental care
      </div>
      <Title className="mb-4 px-4 text-center">
        CO2 emissions {isMobile && <br />} into the atmosphere
      </Title>
      {isMobile && (
        <div className="w-[60%]">
          <CircularProgressBar />
        </div>
      )}
      <div className="mt-20 flex w-full max-w-[1250px] flex-col justify-center gap-4 px-4 md:flex-row">
        <div className="align-center flex w-full flex-col items-center justify-center gap-4">
          <b>Shipper</b>
          <BenefitCard
            title={''}
            iconFirst={
              <svg
                width="176"
                height="120"
                viewBox="0 0 176 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M122.745 77H125.027L130.85 91.4897L136.661 77H138.956L131.729 94.7734H129.947L122.745 77ZM122 77H124.014L124.344 87.8398V94.7734H122V77ZM137.674 77H139.688V94.7734H137.344V87.8398L137.674 77Z"
                  fill="url(#paint0_linear_185_256)"
                />
                <path
                  d="M146.353 77V94.7734H143.997V77H146.353Z"
                  fill="url(#paint1_linear_185_256)"
                />
                <path
                  d="M164.31 77V94.7734H161.941L152.994 81.0649V94.7734H150.638V77H152.994L161.978 90.7451V77H164.31Z"
                  fill="url(#paint2_linear_185_256)"
                />
                <path
                  d="M42.1152 25.9985C42.6675 25.9985 43.1152 26.4463 43.1152 26.9985V92.7695C43.1152 93.3218 42.6675 93.7695 42.1152 93.7695H32.936C32.3838 93.7695 31.936 93.3218 31.936 92.7695V40.6599C31.936 39.9753 31.2635 39.4931 30.615 39.7129L16.697 44.4302C16.0485 44.65 15.376 44.1678 15.376 43.4831V36.3461C15.376 35.9263 15.6383 35.5511 16.0326 35.4069L41.6037 26.0593C41.7137 26.0191 41.8299 25.9985 41.9471 25.9985H42.1152ZM104.624 54.3408V65.3809C104.624 70.6689 104.098 75.1839 103.047 78.9258C102.026 82.6367 100.542 85.6519 98.5938 87.9712C96.6455 90.2905 94.3107 91.9914 91.5894 93.0737C88.8989 94.1561 85.8838 94.6973 82.5439 94.6973C79.8844 94.6973 77.4105 94.3571 75.1221 93.6768C72.8646 92.9964 70.8236 91.9295 68.999 90.4761C67.1745 89.0226 65.6128 87.1517 64.314 84.8633C63.0461 82.5439 62.0565 79.7762 61.3452 76.5601C60.6649 73.3439 60.3247 69.6175 60.3247 65.3809V54.3408C60.3247 49.0218 60.8504 44.5378 61.9019 40.8887C62.9533 37.2087 64.4531 34.2244 66.4014 31.936C68.3496 29.6167 70.6689 27.9313 73.3594 26.8799C76.0807 25.8285 79.1113 25.3027 82.4512 25.3027C85.1416 25.3027 87.6156 25.6429 89.873 26.3232C92.1615 26.9727 94.2025 28.0086 95.9961 29.4312C97.8206 30.8537 99.3669 32.7091 100.635 34.9976C101.934 37.255 102.923 39.9919 103.604 43.208C104.284 46.3932 104.624 50.1042 104.624 54.3408ZM93.4448 66.958V52.6709C93.4448 49.9805 93.2902 47.6147 92.981 45.5737C92.6717 43.5018 92.2078 41.7546 91.5894 40.332C91.0018 38.8786 90.2596 37.7035 89.3628 36.8066C88.466 35.8789 87.4455 35.214 86.3013 34.812C85.1571 34.3791 83.8737 34.1626 82.4512 34.1626C80.7194 34.1626 79.1732 34.5028 77.8125 35.1831C76.4518 35.8325 75.3076 36.884 74.3799 38.3374C73.4521 39.7909 72.7409 41.7082 72.2461 44.0894C71.7822 46.4396 71.5503 49.3001 71.5503 52.6709V66.958C71.5503 69.6794 71.7049 72.076 72.0142 74.1479C72.3234 76.2199 72.7873 77.998 73.4058 79.4824C74.0243 80.9359 74.7664 82.1419 75.6323 83.1006C76.5291 84.0283 77.5496 84.7087 78.6938 85.1416C79.869 85.5745 81.1523 85.791 82.5439 85.791C84.3066 85.791 85.8683 85.4508 87.229 84.7705C88.5897 84.0902 89.7339 83.0078 90.6616 81.5234C91.5894 80.0081 92.2852 78.0444 92.749 75.6323C93.2129 73.2202 93.4448 70.3288 93.4448 66.958Z"
                  stroke="url(#paint3_linear_185_256)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_185_256"
                    x1="143.463"
                    y1="71.9971"
                    x2="143.463"
                    y2="100.427"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_185_256"
                    x1="143.463"
                    y1="71.9971"
                    x2="143.463"
                    y2="100.427"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_185_256"
                    x1="143.463"
                    y1="71.9971"
                    x2="143.463"
                    y2="100.427"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_185_256"
                    x1="60.6494"
                    y1="5.76953"
                    x2="60.6494"
                    y2="116.77"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                </defs>
              </svg>
            }
            iconSecond={
              <svg
                width="176"
                height="120"
                viewBox="0 0 176 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M122 81.0467V80.0187C122 79.2799 122.165 78.6079 122.496 78.0027C122.827 77.3974 123.3 76.9123 123.916 76.5474C124.531 76.1825 125.262 76 126.107 76C126.971 76 127.706 76.1825 128.312 76.5474C128.928 76.9123 129.401 77.3974 129.732 78.0027C130.063 78.6079 130.228 79.2799 130.228 80.0187V81.0467C130.228 81.7677 130.063 82.4308 129.732 83.036C129.41 83.6413 128.942 84.1264 128.326 84.4913C127.72 84.8563 126.989 85.0387 126.135 85.0387C125.28 85.0387 124.541 84.8563 123.916 84.4913C123.3 84.1264 122.827 83.6413 122.496 83.036C122.165 82.4308 122 81.7677 122 81.0467ZM123.916 80.0187V81.0467C123.916 81.4562 123.994 81.8433 124.15 82.2083C124.315 82.5732 124.564 82.8714 124.894 83.1028C125.225 83.3253 125.639 83.4366 126.135 83.4366C126.631 83.4366 127.04 83.3253 127.361 83.1028C127.683 82.8714 127.922 82.5732 128.078 82.2083C128.234 81.8433 128.312 81.4562 128.312 81.0467V80.0187C128.312 79.6004 128.23 79.2087 128.064 78.8438C127.908 78.47 127.665 78.1718 127.334 77.9493C127.012 77.7178 126.603 77.6021 126.107 77.6021C125.62 77.6021 125.211 77.7178 124.881 77.9493C124.559 78.1718 124.315 78.47 124.15 78.8438C123.994 79.2087 123.916 79.6004 123.916 80.0187ZM131.772 91.9947V90.9533C131.772 90.2234 131.937 89.5559 132.268 88.9506C132.599 88.3453 133.072 87.8603 133.688 87.4953C134.303 87.1304 135.034 86.9479 135.879 86.9479C136.743 86.9479 137.478 87.1304 138.084 87.4953C138.7 87.8603 139.173 88.3453 139.504 88.9506C139.835 89.5559 140 90.2234 140 90.9533V91.9947C140 92.7245 139.835 93.3921 139.504 93.9973C139.182 94.6026 138.714 95.0877 138.098 95.4526C137.492 95.8175 136.761 96 135.907 96C135.052 96 134.317 95.8175 133.701 95.4526C133.086 95.0877 132.608 94.6026 132.268 93.9973C131.937 93.3921 131.772 92.7245 131.772 91.9947ZM133.688 90.9533V91.9947C133.688 92.4041 133.766 92.7957 133.922 93.1696C134.087 93.5345 134.335 93.8327 134.666 94.0641C134.997 94.2866 135.41 94.3979 135.907 94.3979C136.403 94.3979 136.812 94.2866 137.133 94.0641C137.464 93.8327 137.708 93.5345 137.864 93.1696C138.02 92.8046 138.098 92.413 138.098 91.9947V90.9533C138.098 90.5349 138.015 90.1433 137.85 89.7784C137.694 89.4134 137.45 89.1197 137.119 88.8972C136.798 88.6658 136.384 88.5501 135.879 88.5501C135.392 88.5501 134.983 88.6658 134.652 88.8972C134.331 89.1197 134.087 89.4134 133.922 89.7784C133.766 90.1433 133.688 90.5349 133.688 90.9533ZM136.513 79.0441L126.714 94.2376L125.28 93.3565L135.08 78.1629L136.513 79.0441Z"
                  fill="url(#paint0_linear_185_263)"
                />
                <path
                  d="M41.7549 26.147C42.3072 26.147 42.7549 26.5947 42.7549 27.147V92.918C42.7549 93.4703 42.3072 93.918 41.7549 93.918H32.5757C32.0234 93.918 31.5757 93.4703 31.5757 92.918V40.8084C31.5757 40.1237 30.9031 39.6415 30.2547 39.8613L16.3366 44.5786C15.6882 44.7984 15.0156 44.3162 15.0156 43.6316V36.4946C15.0156 36.0747 15.2779 35.6995 15.6723 35.5554L41.2434 26.2078C41.3534 26.1675 41.4696 26.147 41.5867 26.147H41.7549ZM71.4516 62.1438C71.1988 62.3713 70.8511 62.4653 70.5207 62.3844L62.9949 60.5422C62.5081 60.423 62.1847 59.9618 62.2385 59.4635L65.7127 27.2716C65.7675 26.7638 66.1962 26.3789 66.707 26.3789H101.223C101.775 26.3789 102.223 26.8266 102.223 27.3789V34.8418C102.223 35.3941 101.775 35.8418 101.223 35.8418H75.9806C75.4714 35.8418 75.0436 36.2244 74.9869 36.7304L73.4536 50.4148C73.3619 51.2336 74.2645 51.8403 75.0242 51.5214C75.7714 51.2076 76.627 50.8981 77.5913 50.5928C79.4468 49.9743 81.5651 49.665 83.9463 49.665C87.1315 49.665 89.9766 50.1908 92.4814 51.2422C95.0173 52.2627 97.1665 53.7625 98.9292 55.7417C100.692 57.6899 102.037 60.0711 102.965 62.8853C103.893 65.6685 104.356 68.8073 104.356 72.3018C104.356 75.4251 103.893 78.3475 102.965 81.0688C102.068 83.7902 100.707 86.1868 98.8828 88.2588C97.0583 90.3307 94.7544 91.9543 91.9712 93.1294C89.2189 94.2736 85.9564 94.8457 82.1836 94.8457C79.3695 94.8457 76.6636 94.4437 74.0659 93.6396C71.4992 92.8047 69.1953 91.5832 67.1543 89.9751C65.1133 88.3361 63.4743 86.326 62.2373 83.9448C61.1418 81.8087 60.4587 79.3936 60.1878 76.6995C60.1303 76.1268 60.5891 75.6416 61.1647 75.6416H70.1695C70.6732 75.6416 71.0951 76.017 71.1813 76.5132C71.4979 78.3366 72.0574 79.9169 72.8599 81.2544C73.8185 82.7697 75.0864 83.9294 76.6636 84.7334C78.2407 85.5374 80.0653 85.9395 82.1372 85.9395C84.0236 85.9395 85.6471 85.6147 87.0078 84.9653C88.3685 84.285 89.4972 83.3263 90.394 82.0894C91.3218 80.8215 92.0021 79.3371 92.4351 77.6362C92.8989 75.9354 93.1309 74.049 93.1309 71.9771C93.1309 69.9979 92.868 68.1888 92.3423 66.5498C91.8475 64.9108 91.0898 63.4883 90.0693 62.2822C89.0798 61.0762 87.8273 60.1484 86.312 59.499C84.7967 58.8187 83.0495 58.4785 81.0703 58.4785C78.4108 58.4785 76.3698 58.8651 74.9473 59.6382C73.7085 60.3264 72.5433 61.1616 71.4516 62.1438Z"
                  stroke="url(#paint1_linear_185_263)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_185_263"
                    x1="131.131"
                    y1="70.3704"
                    x2="131.131"
                    y2="102.361"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_185_263"
                    x1="59.3613"
                    y1="5.91797"
                    x2="59.3613"
                    y2="116.918"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                </defs>
              </svg>
            }
            textFirst={
              'It takes senders to find a suitable offer for Procamion'
            }
            textSecond={'Savings on transportation compared to cargo companies'}
          />
        </div>
        <div className="align-center flex w-full flex-col items-center justify-center gap-4">
          <b>Carrier</b>
          <BenefitCard
            title={''}
            iconFirst={
              <svg
                width="176"
                height="120"
                viewBox="0 0 176 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M135.672 77V94.7734H133.304L124.356 81.0649V94.7734H122V77H124.356L133.34 90.7451V77H135.672Z"
                  fill="url(#paint0_linear_633_14956)"
                />
                <path
                  d="M151.138 92.8569V94.7734H141.727V92.8569H151.138ZM142.203 77V94.7734H139.847V77H142.203ZM149.893 84.6416V86.5581H141.727V84.6416H149.893ZM151.016 77V78.9287H141.727V77H151.016Z"
                  fill="url(#paint1_linear_633_14956)"
                />
                <path
                  d="M158.731 89.4023L162.259 77H163.968L162.979 81.8218L159.183 94.7734H157.486L158.731 89.4023ZM155.081 77L157.889 89.1582L158.731 94.7734H157.046L152.737 77H155.081ZM168.533 89.146L171.28 77H173.636L169.339 94.7734H167.654L168.533 89.146ZM164.224 77L167.654 89.4023L168.899 94.7734H167.203L163.541 81.8218L162.54 77H164.224Z"
                  fill="url(#paint2_linear_633_14956)"
                />
                <path
                  d="M41.6422 50.2007L41.6421 50.2007L41.6384 50.2111C41.1634 51.5503 40.3139 53.1073 39.0555 54.8881C37.7962 56.6702 36.0618 58.8049 33.8426 61.2965L13.7328 83.1208C13.3925 83.4901 13.2036 83.9739 13.2036 84.476V90.1444C13.2036 91.2489 14.0991 92.1444 15.2036 92.1444H55.1676C56.2721 92.1444 57.1676 91.249 57.1676 90.1444V83.9305C57.1676 82.8259 56.2721 81.9305 55.1676 81.9305H29.5404L41.5456 68.7718C43.4487 66.8203 45.1962 64.8947 46.7872 62.995L46.7919 62.9893C48.3946 61.0468 49.7842 59.1121 50.9581 57.1851C52.1689 55.2161 53.1062 53.2357 53.7635 51.2439C54.4262 49.2357 54.7598 47.2049 54.7598 45.1551C54.7598 41.4981 53.9519 38.2769 52.2967 35.5301C50.6678 32.7795 48.2901 30.6687 45.2049 29.194C42.1133 27.7162 38.403 27 34.1107 27C29.5342 27 25.5583 27.9257 22.2247 29.8247C18.9189 31.6793 16.3746 34.2056 14.6182 37.3987C13.0321 40.2565 12.1684 43.3834 12.0221 46.7645C11.9724 47.9137 12.9074 48.8075 13.9998 48.8075H22.3618C23.4803 48.8075 24.3295 47.9085 24.3875 46.8633C24.484 45.1234 24.8514 43.5861 25.4737 42.2371L25.4737 42.2371L25.4762 42.2315C26.2018 40.633 27.2642 39.403 28.6693 38.5133C30.0507 37.6386 31.8032 37.1711 33.9817 37.1711C35.8393 37.1711 37.351 37.5791 38.5655 38.3436L38.5717 38.3475L38.578 38.3513C39.8129 39.1037 40.7417 40.1379 41.3763 41.4765L41.3812 41.4869L41.3864 41.4971C42.0498 42.8173 42.3978 44.3838 42.3978 46.2246C42.3978 47.4902 42.1515 48.8138 41.6422 50.2007ZM94.9021 91.3412L94.9072 91.3391C97.6118 90.2028 99.8751 88.6217 101.675 86.5879C103.458 84.5733 104.785 82.245 105.658 79.6135C106.555 76.9922 107 74.1882 107 71.2086C107 67.8982 106.558 64.8938 105.658 62.2074C104.76 59.4981 103.449 57.1771 101.711 55.2656C99.9735 53.3251 97.8554 51.8563 95.3713 50.8605C92.9099 49.8337 90.1408 49.3316 87.0816 49.3316C84.793 49.3316 82.7225 49.6267 80.8835 50.2356C80.0285 50.5052 79.2551 50.7808 78.5657 51.0632C78.5349 51.0758 78.4745 51.0787 78.4106 51.0342C78.3825 51.0146 78.3705 50.9961 78.3672 50.9894C78.3659 50.9868 78.3661 50.9886 78.3666 50.9846L79.7631 38.5829H103.022C104.127 38.5829 105.022 37.6875 105.022 36.5829V29.8556C105.022 28.751 104.127 27.8556 103.022 27.8556H71.1676C70.1465 27.8556 69.2894 28.6248 69.1793 29.6399L65.9739 59.1914C65.8657 60.1892 66.5138 61.1127 67.489 61.3503L74.3641 63.0248C75.0279 63.1865 75.7081 62.9946 76.1946 62.5609C77.1432 61.7151 78.1516 60.9979 79.2198 60.407C80.327 59.8096 82.0246 59.4599 84.4158 59.4599C86.1364 59.4599 87.6126 59.7539 88.8665 60.3141L88.8743 60.3176L88.8821 60.3209C90.1483 60.8609 91.1762 61.6227 91.9855 62.6041L91.9903 62.61L91.9953 62.6157C92.8452 63.6152 93.4848 64.8029 93.9069 66.1941L93.9094 66.2023L93.9121 66.2106C94.363 67.6095 94.5948 69.1727 94.5948 70.9091C94.5948 72.7458 94.3881 74.395 93.9854 75.864L93.9831 75.8722L93.981 75.8805C93.6079 77.3392 93.028 78.5881 92.2524 79.6428L92.2498 79.6464C91.5147 80.6552 90.5955 81.4328 89.4821 81.9883C88.3858 82.5071 87.0372 82.7861 85.4047 82.7861C83.6145 82.7861 82.0831 82.4411 80.7836 81.782C79.4869 81.1242 78.4483 80.1814 77.6557 78.9386C76.9985 77.8454 76.5228 76.5332 76.2459 74.9836C76.0777 74.0422 75.2668 73.2888 74.2481 73.2888H66.0432C64.9051 73.2888 63.9489 74.2575 64.0738 75.4508C64.3417 78.0105 65.0029 80.333 66.0706 82.4047L66.0731 82.4093C67.2824 84.7257 68.8899 86.6889 70.8929 88.2893L70.8928 88.2893L70.9001 88.295C72.8882 89.8535 75.1291 91.0343 77.6155 91.8391L77.6223 91.8413L77.6291 91.8434C80.1356 92.6153 82.7431 93 85.4477 93C89.0423 93 92.2022 92.458 94.9021 91.3412Z"
                  stroke="url(#paint3_linear_633_14956)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_633_14956"
                    x1="148.194"
                    y1="71.9971"
                    x2="148.194"
                    y2="100.427"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_633_14956"
                    x1="148.194"
                    y1="71.9971"
                    x2="148.194"
                    y2="100.427"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_633_14956"
                    x1="148.194"
                    y1="71.9971"
                    x2="148.194"
                    y2="100.427"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_633_14956"
                    x1="59.5213"
                    y1="9.98525"
                    x2="59.5213"
                    y2="112.356"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                </defs>
              </svg>
            }
            iconSecond={
              <svg
                width="141"
                height="95"
                viewBox="0 0 141 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M105.854 62.7V75.1414H104.29L98.3779 65.5454V75.1414H96.8213V62.7H98.3779L104.314 72.3215V62.7H105.854Z"
                  fill="url(#paint0_linear_228_1478)"
                />
                <path
                  d="M116.073 73.7998V75.1414H109.855V73.7998H116.073ZM110.169 62.7V75.1414H108.613V62.7H110.169ZM115.251 68.0491V69.3906H109.855V68.0491H115.251ZM115.993 62.7V64.05H109.855V62.7H115.993Z"
                  fill="url(#paint1_linear_228_1478)"
                />
                <path
                  d="M121.09 71.3816L123.421 62.7H124.55L123.897 66.0752L121.388 75.1414H120.267L121.09 71.3816ZM118.678 62.7L120.533 71.2107L121.09 75.1414H119.977L117.13 62.7H118.678ZM127.566 71.2021L129.381 62.7H130.938L128.099 75.1414H126.986L127.566 71.2021ZM124.719 62.7L126.986 71.3816L127.808 75.1414H126.687L124.268 66.0752L123.606 62.7H124.719Z"
                  fill="url(#paint2_linear_228_1478)"
                />
                <path
                  d="M33.7283 20.5822C34.228 20.5822 34.6331 20.9873 34.6331 21.487V73.2342C34.6331 73.7865 34.1854 74.2343 33.6331 74.2343H26.7829C26.2306 74.2343 25.7829 73.7865 25.7829 73.2343V32.4798C25.7829 31.7951 25.1103 31.3129 24.4619 31.5327L13.9939 35.0807C13.3454 35.3004 12.6729 34.8183 12.6729 34.1336V28.9197C12.6729 28.4998 12.9352 28.1247 13.3295 27.9805L33.4177 20.6372C33.5172 20.6008 33.6224 20.5822 33.7283 20.5822V20.5822ZM83.3276 43.0199V51.7599C83.3276 55.9463 82.9114 59.5206 82.079 62.4829C81.2711 65.4208 80.096 67.8078 78.5536 69.6439C77.0112 71.48 75.1629 72.8265 73.0084 73.6834C70.8785 74.5403 68.4915 74.9687 65.8475 74.9687C63.7421 74.9687 61.7835 74.6994 59.9718 74.1608C58.1847 73.6222 56.5689 72.7776 55.1244 71.6269C53.68 70.4763 52.4437 68.9951 51.4154 67.1835C50.4117 65.3473 49.6283 63.1562 49.0652 60.6101C48.5266 58.064 48.2573 55.1139 48.2573 51.7599V43.0199C48.2573 38.809 48.6735 35.2591 49.5058 32.3702C50.3382 29.4569 51.5256 27.0944 53.068 25.2827C54.6103 23.4466 56.4465 22.1123 58.5764 21.2799C60.7308 20.4476 63.13 20.0314 65.7741 20.0314C67.904 20.0314 69.8625 20.3007 71.6497 20.8393C73.4614 21.3534 75.0772 22.1735 76.4971 23.2997C77.9415 24.4259 79.1656 25.8948 80.1694 27.7064C81.1976 29.4936 81.9811 31.6603 82.5197 34.2064C83.0583 36.728 83.3276 39.6658 83.3276 43.0199ZM74.4774 53.0085V41.6978C74.4774 39.5679 74.355 37.695 74.1101 36.0792C73.8653 34.439 73.4981 33.0557 73.0084 31.9296C72.5433 30.7789 71.9557 29.8486 71.2458 29.1386C70.5358 28.4042 69.7279 27.8778 68.822 27.5595C67.9162 27.2168 66.9002 27.0454 65.7741 27.0454C64.4031 27.0454 63.179 27.3147 62.1018 27.8533C61.0246 28.3675 60.1187 29.1998 59.3843 30.3505C58.6498 31.5011 58.0867 33.019 57.695 34.9041C57.3278 36.7647 57.1442 39.0293 57.1442 41.6978V53.0085C57.1442 55.1629 57.2666 57.0602 57.5114 58.7005C57.7562 60.3408 58.1235 61.7485 58.6131 62.9236C59.1027 64.0743 59.6903 65.0291 60.3758 65.788C61.0858 66.5225 61.8937 67.0611 62.7995 67.4038C63.7298 67.7466 64.7458 67.9179 65.8475 67.9179C67.243 67.9179 68.4793 67.6486 69.5565 67.11C70.6337 66.5714 71.5395 65.7146 72.274 64.5394C73.0084 63.3398 73.5593 61.7852 73.9265 59.8756C74.2937 57.966 74.4774 55.677 74.4774 53.0085Z"
                  stroke="url(#paint3_linear_228_1478)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_228_1478"
                    x1="114.128"
                    y1="59.1979"
                    x2="114.128"
                    y2="79.0986"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_228_1478"
                    x1="114.128"
                    y1="59.1979"
                    x2="114.128"
                    y2="79.0986"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_228_1478"
                    x1="114.128"
                    y1="59.1979"
                    x2="114.128"
                    y2="79.0986"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_228_1478"
                    x1="48.5143"
                    y1="4.56759"
                    x2="48.5143"
                    y2="92.4426"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6C443" />
                    <stop offset="1" stopColor="#EBB017" />
                  </linearGradient>
                </defs>
              </svg>
            }
            textFirst={
              'It takes senders to find a suitable offer for Procamion'
            }
            textSecond={'Savings on transportation compared to cargo companies'}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;

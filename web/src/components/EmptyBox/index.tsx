import React from "react";
import { Icon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";
import clsx from "clsx";

export default function EmptyBox(props: {
  children: React.ReactElement;
  hideIcon?: boolean;
  className?: string;
}) {
  const { children, hideIcon, className } = props;
  return (
    <Center className={clsx("h-full w-full flex-1 flex-col", className)}>
      {hideIcon ? null : (
        <Icon
          width="150"
          height="120"
          viewBox="0 0 150 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="120" />
          <path
            d="M37.8 80.3999H92.4C92.7089 80.3999 93.01 80.3666 93.3 80.3033C93.5899 80.3666 93.891 80.3999 94.2 80.3999H125.4C127.72 80.3999 129.6 78.5195 129.6 76.1999C129.6 73.8803 127.72 71.9999 125.4 71.9999H121.8C119.48 71.9999 117.6 70.1195 117.6 67.7999C117.6 65.4803 119.48 63.5999 121.8 63.5999H133.2C135.52 63.5999 137.4 61.7195 137.4 59.3999C137.4 57.0803 135.52 55.1999 133.2 55.1999H120C122.32 55.1999 124.2 53.3195 124.2 50.9999C124.2 48.6803 122.32 46.7999 120 46.7999H81.6C83.9195 46.7999 85.8 44.9195 85.8 42.5999C85.8 40.2803 83.9195 38.3999 81.6 38.3999H47.4C45.0804 38.3999 43.2 40.2803 43.2 42.5999C43.2 44.9195 45.0804 46.7999 47.4 46.7999H23.4C21.0804 46.7999 19.2 48.6803 19.2 50.9999C19.2 53.3195 21.0804 55.1999 23.4 55.1999H38.4C40.7195 55.1999 42.6 57.0803 42.6 59.3999C42.6 61.7195 40.7195 63.5999 38.4 63.5999H14.4C12.0804 63.5999 10.2 65.4803 10.2 67.7999C10.2 70.1195 12.0804 71.9999 14.4 71.9999H37.8C35.4804 71.9999 33.6 73.8803 33.6 76.1999C33.6 78.5195 35.4804 80.3999 37.8 80.3999ZM135.6 80.4C137.92 80.4 139.8 78.5196 139.8 76.2C139.8 73.8804 137.92 72 135.6 72C133.28 72 131.4 73.8804 131.4 76.2C131.4 78.5196 133.28 80.4 135.6 80.4Z"
            fill="#E8FAF7"
          />
          <path
            d="M67.871 67.384C67.8242 67.716 67.7999 68.0552 67.7999 68.4001C67.7999 72.3765 71.0235 75.6001 74.9999 75.6001C78.9764 75.6001 82.1999 72.3765 82.1999 68.4001C82.1999 68.0552 82.1757 67.716 82.1288 67.384H99.5999V83.4001C99.5999 84.3942 98.794 85.2001 97.7999 85.2001H52.1999C51.2058 85.2001 50.3999 84.3942 50.3999 83.4001V67.384H67.871Z"
            fill="white"
          />
          <path
            d="M82.7999 67.2001C82.7999 71.5079 79.3077 75.0001 74.9999 75.0001C70.6921 75.0001 67.1999 71.5079 67.1999 67.2001C67.1999 67.0605 67.2036 66.9218 67.2108 66.7841H50.3999L56.1362 49.8234C56.3835 49.0922 57.0694 48.6001 57.8413 48.6001H92.1585C92.9304 48.6001 93.6163 49.0922 93.8636 49.8234L99.5999 66.7841H82.789C82.7962 66.9218 82.7999 67.0605 82.7999 67.2001Z"
            fill="white"
          />
          <path
            d="M81.6583 67.7727C81.6583 71.1015 78.6772 74.4 74.9998 74.4C71.3224 74.4 68.3413 71.1015 68.3413 67.7727C68.3413 67.6649 68.3444 66.9577 68.3506 66.8513H55.7998L60.6966 54.9453C60.9077 54.3803 61.4933 54 62.1522 54H87.8474C88.5063 54 89.0919 54.3803 89.303 54.9453L94.1998 66.8513H81.649C81.6552 66.9577 81.6583 67.6649 81.6583 67.7727Z"
            fill="#D3F1EF"
          />
          <path
            d="M51.1501 66.9072V82.7999C51.1501 83.3798 51.6202 83.8499 52.2001 83.8499H97.8001C98.38 83.8499 98.8501 83.3798 98.8501 82.7999V66.9072L93.1534 50.0635C93.0092 49.6369 92.609 49.3499 92.1588 49.3499H57.8415C57.3913 49.3499 56.9911 49.6369 56.8469 50.0635L51.1501 66.9072Z"
            stroke="#18BCB0"
            strokeWidth="1.5"
          />
          <path
            d="M58.8 66.5999C61.1619 66.5999 63.7109 66.5999 66.4469 66.5999C67.5727 66.5999 67.5727 67.391 67.5727 67.7999C67.5727 71.7763 70.8704 74.9999 74.9384 74.9999C79.0063 74.9999 82.304 71.7763 82.304 67.7999C82.304 67.391 82.304 66.5999 83.4298 66.5999H98.4M54.3442 66.5999H55.8H54.3442Z"
            stroke="#18BCB0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M90.0596 34.9815L83.3998 42.4534M74.4596 32.3999V42.4534V32.3999ZM58.7998 34.9815L65.4596 42.4534L58.7998 34.9815Z"
            stroke="#B5E3DB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Icon>
      )}
      {React.cloneElement(children, {
        className: hideIcon ? "text-grayIron-600" : "text-grayIron-700 text-lg",
      })}
    </Center>
  );
}

export type MailIconPropTypes = {
    styling?: string
};

export const MailIcon = ({styling}: MailIconPropTypes) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <g clipPath="url(#clip0_187_859)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM26.1562 22.2026V10.3111L20.2102 16.2568L26.1562 22.2026ZM7.114 22.4448H24.8864L19.4546 17.0131L17.3844 19.0829C17.2841 19.183 17.1481 19.2392 17.0063 19.2392H14.9938C14.9236 19.2393 14.8541 19.2255 14.7892 19.1987C14.7243 19.1719 14.6653 19.1325 14.6156 19.0829L12.5455 17.0131L7.11375 22.4448H7.114ZM5.84375 10.3108V22.2029L11.7898 16.2568L5.84375 10.3108ZM25.4004 9.55519H6.6L15.2153 18.1704H16.7851L25.4004 9.55519Z"
                      fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_187_859">
                    <rect width="100%" height="100%" fill="currentColor"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default MailIcon;
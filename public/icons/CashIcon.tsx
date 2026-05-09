export type CashIconPropTypes = {
    styling?: string,
};

export const CashIcon = ({styling}: CashIconPropTypes) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <rect width="100%" height="100%" fill="url(#pattern0_18_39)"/>
            <defs>
                <pattern id="pattern0_18_39" patternContentUnits="objectBoundingBox" width="100%" height="100%">
                    <use transform="scale(0.0078125)"/>
                </pattern>
                <image id="image0_18_39" width="100%" height="100%" preserveAspectRatio="none"/>
            </defs>
        </svg>
    );
};

export default CashIcon;
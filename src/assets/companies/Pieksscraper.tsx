
import * as React from "react"

function JogoLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={155}
            height={57}
            viewBox="0 0 155 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <path fill="url(#prefix__pattern0)" d="M0 0h155v57H0z" />
            <defs>
                <pattern
                    id="prefix__pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use xlinkHref="#prefix__image0" transform="scale(.00645 .01754)" />
                </pattern>
                <image
                    id="prefix__image0"
                    width={155}
                    height={57}
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    )
}

const MemoSvgComponent = React.memo(JogoLogo)
export default MemoSvgComponent

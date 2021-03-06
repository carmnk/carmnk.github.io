import { makeStyles, Theme } from "@material-ui/core";

export const useSwiperGlobalStyles = makeStyles(
  (theme: Theme) => ({
    "@global": {
      "@font-face": {
        fontFamily: "'swiper-icons'",
        src:
          "url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA') format('woff')",
        fontWeight: "400",
        fontStyle: "normal",
      },
      ":root": {
        "--swiper-theme-color": theme.palette.secondary.main,
        "--swiper-navigation-size": "44px",
      },
      ".swiper-container": {
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        overflow: "hidden",
        listStyle: "none",
        padding: "0",
        zIndex: "1",
        height: "",
      },
      ".swiper-container-vertical > .swiper-wrapper": {
        flexDirection: "column",
      },
      ".swiper-wrapper": {
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: "1",
        display: "flex",
        transitionProperty: "transform",
        boxSizing: "content-box",
      },
      ".swiper-container-android .swiper-slide, .swiper-wrapper": {
        transform: "translate3d(0px, 0, 0)",
      },
      ".swiper-container-multirow > .swiper-wrapper": {
        flexWrap: "wrap",
      },
      ".swiper-container-multirow-column > .swiper-wrapper": {
        flexWrap: "wrap",
        flexDirection: "column",
      },
      ".swiper-container-free-mode > .swiper-wrapper": {
        transitionTimingFunction: "ease-out",
        margin: "0 auto",
      },
      ".swiper-container-pointer-events": {
        touchAction: "pan-y",
      },
      ".swiper-container-pointer-events.swiper-container-vertical": {
        touchAction: "pan-x",
      },
      ".swiper-slide": {
        flexShrink: "0",
        width: "100%",
        position: "relative",
        transitionProperty: "transform",
        maxWidth: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      ".swiper-slide-invisible-blank": {
        visibility: "hidden",
      },
      ".swiper-container-autoheight, .swiper-container-autoheight .swiper-slide": {
        height: "auto",
      },
      ".swiper-container-autoheight .swiper-wrapper": {
        alignItems: "flex-start",
        transitionProperty: "transform, height",
      },
      ".swiper-container-3d": {
        perspective: 1200,
      },
      ".swiper-container-3d .swiper-wrapper, .swiper-container-3d .swiper-slide, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-cube-shadow": {
        transformStyle: "preserve-3d",
      },
      ".swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-slide-shadow-bottom": {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: "10",
      },
      ".swiper-container-3d .swiper-slide-shadow-left": {
        backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
      },
      ".swiper-container-3d .swiper-slide-shadow-right": {
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
      },
      ".swiper-container-3d .swiper-slide-shadow-top": {
        backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
      },
      ".swiper-container-3d .swiper-slide-shadow-bottom": {
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
      },
      ".swiper-container-css-mode > .swiper-wrapper": {
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      },
      ".swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar": {
        display: "none",
      },
      ".swiper-container-css-mode > .swiper-wrapper > .swiper-slide": {
        scrollSnapAlign: "start start",
      },
      ".swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper": {
        scrollSnapType: "x mandatory",
      },
      ".swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper": {
        scrollSnapType: "y mandatory",
      },
      ".swiper-button-prev, .swiper-button-next": {
        position: "absolute",
        top: "50%",
        width: "calc(var(--swiper-navigation-size) / 44 * 27)",
        height: "var(--swiper-navigation-size)",
        marginTop: "calc(-1 * var(--swiper-navigation-size) / 2)",
        zIndex: "10",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--swiper-navigation-color, var(--swiper-theme-color))",
      },
      ".swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled": {
        opacity: "0.35",
        cursor: "auto",
        pointerEvents: "none",
      },
      ".swiper-button-prev:after, .swiper-button-next:after": {
        fontFamily: "swiper-icons",
        fontSize: "var(--swiper-navigation-size)",
        textTransform: "none",
        letterSpacing: "0",
        fallbacks: [
          {
            textTransform: "none !important",
          },
        ],
        fontVariant: "initial",
        lineHeight: "1",
      },
      ".swiper-button-prev, .swiper-container-rtl .swiper-button-next": {
        left: 10,
        right: "auto",
      },
      ".swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after": {
        content: "'prev'",
      },
      ".swiper-button-next, .swiper-container-rtl .swiper-button-prev": {
        right: 10,
        left: "auto",
      },
      ".swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after": {
        content: "'next'",
      },
      ".swiper-button-prev.swiper-button-white, .swiper-button-next.swiper-button-white": {
        swiperNavigationColor: "#fff",
      },
      ".swiper-button-prev.swiper-button-black, .swiper-button-next.swiper-button-black": {
        swiperNavigationColor: "#000",
      },
      ".swiper-button-lock": {
        display: "none",
      },
      ".swiper-pagination": {
        position: "absolute",
        textAlign: "center",
        transition: "300ms opacity",
        transform: "translate3d(0, 0, 0)",
        zIndex: "10",
      },
      ".swiper-pagination.swiper-pagination-hidden": {
        opacity: "0",
      },
      ".swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets": {
        bottom: 10,
        left: "0",
        width: "100%",
      },
      ".swiper-pagination-bullets-dynamic": {
        overflow: "hidden",
        fontSize: "0",
      },
      ".swiper-pagination-bullets-dynamic .swiper-pagination-bullet": {
        transform: "scale(0.33)",
        position: "relative",
      },
      ".swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active": {
        transform: "scale(1)",
      },
      ".swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main": {
        transform: "scale(1)",
      },
      ".swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev": {
        transform: "scale(0.66)",
      },
      ".swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev": {
        transform: "scale(0.33)",
      },
      ".swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next": {
        transform: "scale(0.66)",
      },
      ".swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next": {
        transform: "scale(0.33)",
      },
      ".swiper-pagination-bullet": {
        width: 8,
        height: 8,
        display: "inline-block",
        borderRadius: "50%",
        background: "#000",
        opacity: "0.2",
      },
      "button.swiper-pagination-bullet": {
        border: "none",
        margin: "0",
        padding: "0",
        boxShadow: "none",
        webkitAppearance: "none",
        mozAppearance: "none",
        appearance: "none",
      },
      ".swiper-pagination-clickable .swiper-pagination-bullet": {
        cursor: "pointer",
      },
      ".swiper-pagination-bullet-active": {
        opacity: "1",
        background: "var(--swiper-pagination-color, var(--swiper-theme-color))",
      },
      ".swiper-container-vertical > .swiper-pagination-bullets": {
        right: 10,
        top: "50%",
        transform: "translate3d(0px, -50%, 0)",
      },
      ".swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet": {
        margin: "6px 0",
        display: "block",
      },
      ".swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic": {
        top: "50%",
        transform: "translateY(-50%)",
        width: 8,
      },
      ".swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet": {
        display: "inline-block",
        transition: "200ms transform, 200ms top",
      },
      ".swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet": {
        margin: "0 4px",
      },
      ".swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic": {
        left: "50%",
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
      },
      ".swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet": {
        transition: "200ms transform, 200ms left",
      },
      ".swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet": {
        transition: "200ms transform, 200ms right",
      },
      ".swiper-pagination-progressbar": {
        background: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
      },
      ".swiper-pagination-progressbar .swiper-pagination-progressbar-fill": {
        background: "var(--swiper-pagination-color, var(--swiper-theme-color))",
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        transform: "scale(0)",
        transformOrigin: "left top",
      },
      ".swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill": {
        transformOrigin: "right top",
      },
      ".swiper-container-horizontal > .swiper-pagination-progressbar, .swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite": {
        width: "100%",
        height: 4,
        left: "0",
        top: "0",
      },
      ".swiper-container-vertical > .swiper-pagination-progressbar, .swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite": {
        width: 4,
        height: "100%",
        left: "0",
        top: "0",
      },
      ".swiper-pagination-white": {
        swiperPaginationColor: "#fff",
      },
      ".swiper-pagination-black": {
        swiperPaginationColor: "#000",
      },
      ".swiper-pagination-lock": {
        display: "none",
      },
      ".swiper-scrollbar": {
        borderRadius: 10,
        position: "relative",
        msTouchAction: "none",
        background: "rgba(0, 0, 0, 0.1)",
      },
      ".swiper-container-horizontal > .swiper-scrollbar": {
        position: "absolute",
        left: "1%",
        bottom: 3,
        zIndex: "50",
        height: 5,
        width: "98%",
      },
      ".swiper-container-vertical > .swiper-scrollbar": {
        position: "absolute",
        right: 3,
        top: "1%",
        zIndex: "50",
        width: 5,
        height: "98%",
      },
      ".swiper-scrollbar-drag": {
        height: "100%",
        width: "100%",
        position: "relative",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: 10,
        left: "0",
        top: "0",
      },
      ".swiper-scrollbar-cursor-drag": {
        cursor: "move",
      },
      ".swiper-scrollbar-lock": {
        display: "none",
      },
      ".swiper-zoom-container": {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
      ".swiper-zoom-container > img, .swiper-zoom-container > svg, .swiper-zoom-container > canvas": {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
      },
      ".swiper-slide-zoomed": {
        cursor: "move",
      },
      ".swiper-lazy-preloader": {
        width: 42,
        height: 42,
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: -21,
        marginTop: -21,
        zIndex: "10",
        transformOrigin: "50%",
        animation: "swiper-preloader-spin 1s infinite linear",
        boxSizing: "border-box",
        border: "4px solid var(--swiper-preloader-color, var(--swiper-theme-color))",
        borderRadius: "50%",
        borderTopColor: "transparent",
      },
      ".swiper-lazy-preloader-white": {
        swiperPreloaderColor: "#fff",
      },
      ".swiper-lazy-preloader-black": {
        swiperPreloaderColor: "#000",
      },
      "@keyframes swiper-preloader-spin": {
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      ".swiper-container .swiper-notification": {
        position: "absolute",
        left: "0",
        top: "0",
        pointerEvents: "none",
        opacity: "0",
        zIndex: "-1000",
      },
      ".swiper-container-fade.swiper-container-free-mode .swiper-slide": {
        transitionTimingFunction: "ease-out",
      },
      ".swiper-container-fade .swiper-slide": {
        pointerEvents: "none",
        transitionProperty: "opacity",
      },
      ".swiper-container-fade .swiper-slide .swiper-slide": {
        pointerEvents: "none",
      },
      ".swiper-container-fade .swiper-slide-active, .swiper-container-fade .swiper-slide-active .swiper-slide-active": {
        pointerEvents: "auto",
      },
      ".swiper-container-cube": {
        overflow: "visible",
      },
      ".swiper-container-cube .swiper-slide": {
        pointerEvents: "none",
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        zIndex: "1",
        visibility: "hidden",
        transformOrigin: "0 0",
        width: "100%",
        height: "100%",
      },
      ".swiper-container-cube .swiper-slide .swiper-slide": {
        pointerEvents: "none",
      },
      ".swiper-container-cube.swiper-container-rtl .swiper-slide": {
        transformOrigin: "100% 0",
      },
      ".swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-active .swiper-slide-active": {
        pointerEvents: "auto",
      },
      ".swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-next, .swiper-container-cube .swiper-slide-prev, .swiper-container-cube .swiper-slide-next + .swiper-slide": {
        pointerEvents: "auto",
        visibility: "visible",
      },
      ".swiper-container-cube .swiper-slide-shadow-top, .swiper-container-cube .swiper-slide-shadow-bottom, .swiper-container-cube .swiper-slide-shadow-left, .swiper-container-cube .swiper-slide-shadow-right": {
        zIndex: "0",
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      },
      ".swiper-container-cube .swiper-cube-shadow": {
        position: "absolute",
        left: "0",
        bottom: 0,
        width: "100%",
        height: "100%",
        opacity: "0.6",
        zIndex: "0",
      },
      ".swiper-container-cube .swiper-cube-shadow:before": {
        content: "''",
        background: "#000",
        position: "absolute",
        left: "0",
        top: "0",
        bottom: "0",
        right: "0",
        webkitFilter: "blur(50px)",
        filter: "blur(50px)",
      },
      ".swiper-container-flip": {
        overflow: "visible",
      },
      ".swiper-container-flip .swiper-slide": {
        pointerEvents: "none",
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        zIndex: "1",
      },
      ".swiper-container-flip .swiper-slide .swiper-slide": {
        pointerEvents: "none",
      },
      ".swiper-container-flip .swiper-slide-active, .swiper-container-flip .swiper-slide-active .swiper-slide-active": {
        pointerEvents: "auto",
      },
      ".swiper-container-flip .swiper-slide-shadow-top, .swiper-container-flip .swiper-slide-shadow-bottom, .swiper-container-flip .swiper-slide-shadow-left, .swiper-container-flip .swiper-slide-shadow-right": {
        zIndex: "0",
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      },
    },
  }),
  { name: "CSwiper" }
);

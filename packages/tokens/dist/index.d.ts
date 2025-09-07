declare const pagueSimples: {
    readonly brand: {
        readonly primary: "#00DB75";
        readonly primaryHover: "#00B860";
        readonly primaryDark: "#00753E";
        readonly primaryLight: "#E6FAF1";
    };
    readonly gradients: {
        readonly primary: "linear-gradient(135deg, #00DB75 0%, #00753E 100%)";
        readonly success: "linear-gradient(135deg, #00DB75 0%, #00F582 100%)";
        readonly subtle: "linear-gradient(135deg, #FAFAFA 0%, #F4F4F5 100%)";
    };
    readonly shadows: {
        readonly primary: "0 1px 3px 0 rgba(0, 219, 117, 0.1), 0 1px 2px 0 rgba(0, 219, 117, 0.06)";
        readonly primaryMd: "0 4px 6px -1px rgba(0, 219, 117, 0.1), 0 2px 4px -1px rgba(0, 219, 117, 0.06)";
        readonly primaryLg: "0 10px 15px -3px rgba(0, 219, 117, 0.1), 0 4px 6px -2px rgba(0, 219, 117, 0.05)";
    };
    readonly spacing: {
        readonly xs: "0.25rem";
        readonly sm: "0.5rem";
        readonly md: "1rem";
        readonly lg: "1.5rem";
        readonly xl: "2rem";
        readonly '2xl': "3rem";
        readonly '3xl': "4rem";
    };
    readonly radius: {
        readonly none: "0";
        readonly sm: "0.125rem";
        readonly default: "0.25rem";
        readonly md: "0.375rem";
        readonly lg: "0.5rem";
        readonly xl: "0.75rem";
        readonly '2xl': "1rem";
        readonly full: "9999px";
    };
    readonly fontSize: {
        readonly xs: readonly ["0.75rem", {
            readonly lineHeight: "1rem";
        }];
        readonly sm: readonly ["0.875rem", {
            readonly lineHeight: "1.25rem";
        }];
        readonly base: readonly ["1rem", {
            readonly lineHeight: "1.5rem";
        }];
        readonly lg: readonly ["1.125rem", {
            readonly lineHeight: "1.75rem";
        }];
        readonly xl: readonly ["1.25rem", {
            readonly lineHeight: "1.75rem";
        }];
        readonly '2xl': readonly ["1.5rem", {
            readonly lineHeight: "2rem";
        }];
        readonly '3xl': readonly ["1.875rem", {
            readonly lineHeight: "2.25rem";
        }];
        readonly '4xl': readonly ["2.25rem", {
            readonly lineHeight: "2.5rem";
        }];
        readonly '5xl': readonly ["3rem", {
            readonly lineHeight: "1";
        }];
        readonly '6xl': readonly ["3.75rem", {
            readonly lineHeight: "1";
        }];
    };
    readonly fontWeight: {
        readonly normal: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
    };
    readonly animation: {
        readonly 'fade-in': "fadeIn 0.2s ease-out";
        readonly 'slide-up': "slideUp 0.2s ease-out";
        readonly 'scale-in': "scaleIn 0.1s ease-out";
        readonly 'pulse-primary': "pulsePrimary 2s cubic-bezier(0.4, 0, 0.6, 1) infinite";
    };
    readonly keyframes: {
        readonly fadeIn: {
            readonly '0%': {
                readonly opacity: "0";
            };
            readonly '100%': {
                readonly opacity: "1";
            };
        };
        readonly slideUp: {
            readonly '0%': {
                readonly transform: "translateY(10px)";
                readonly opacity: "0";
            };
            readonly '100%': {
                readonly transform: "translateY(0)";
                readonly opacity: "1";
            };
        };
        readonly scaleIn: {
            readonly '0%': {
                readonly transform: "scale(0.95)";
                readonly opacity: "0";
            };
            readonly '100%': {
                readonly transform: "scale(1)";
                readonly opacity: "1";
            };
        };
        readonly pulsePrimary: {
            readonly '0%, 100%': {
                readonly opacity: "1";
            };
            readonly '50%': {
                readonly opacity: ".7";
            };
        };
    };
    readonly screens: {
        readonly sm: "640px";
        readonly md: "768px";
        readonly lg: "1024px";
        readonly xl: "1280px";
        readonly '2xl': "1536px";
    };
};
type PagueSimplesBrand = typeof pagueSimples.brand;
type PagueSimplesShadows = typeof pagueSimples.shadows;
type PagueSimplesSpacing = typeof pagueSimples.spacing;

export { type PagueSimplesBrand, type PagueSimplesShadows, type PagueSimplesSpacing, pagueSimples };

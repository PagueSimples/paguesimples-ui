"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  pagueSimples: () => pagueSimples
});
module.exports = __toCommonJS(index_exports);
var pagueSimples = {
  // Cores da marca - valores RGB para uso em JavaScript
  brand: {
    primary: "#00DB75",
    // Verde principal - CTAs, sucesso
    primaryHover: "#00B860",
    // Hover do principal  
    primaryDark: "#00753E",
    // Verde escuro - textos, headers
    primaryLight: "#E6FAF1"
    // Verde claro - backgrounds
  },
  // Gradientes exclusivos
  gradients: {
    primary: "linear-gradient(135deg, #00DB75 0%, #00753E 100%)",
    success: "linear-gradient(135deg, #00DB75 0%, #00F582 100%)",
    subtle: "linear-gradient(135deg, #FAFAFA 0%, #F4F4F5 100%)"
  },
  // Sombras com verde da marca
  shadows: {
    primary: "0 1px 3px 0 rgba(0, 219, 117, 0.1), 0 1px 2px 0 rgba(0, 219, 117, 0.06)",
    primaryMd: "0 4px 6px -1px rgba(0, 219, 117, 0.1), 0 2px 4px -1px rgba(0, 219, 117, 0.06)",
    primaryLg: "0 10px 15px -3px rgba(0, 219, 117, 0.1), 0 4px 6px -2px rgba(0, 219, 117, 0.05)"
  },
  // Espaçamentos padronizados
  spacing: {
    xs: "0.25rem",
    // 4px
    sm: "0.5rem",
    // 8px
    md: "1rem",
    // 16px
    lg: "1.5rem",
    // 24px
    xl: "2rem",
    // 32px
    "2xl": "3rem",
    // 48px
    "3xl": "4rem"
    // 64px
  },
  // Border radius customizados
  radius: {
    none: "0",
    sm: "0.125rem",
    // 2px
    default: "0.25rem",
    // 4px
    md: "0.375rem",
    // 6px
    lg: "0.5rem",
    // 8px
    xl: "0.75rem",
    // 12px
    "2xl": "1rem",
    // 16px
    full: "9999px"
  },
  // Typography scale - Ubuntu font
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    // 12px
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    // 14px
    base: ["1rem", { lineHeight: "1.5rem" }],
    // 16px
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    // 18px
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    // 20px
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    // 24px
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    // 30px
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    // 36px
    "5xl": ["3rem", { lineHeight: "1" }],
    // 48px
    "6xl": ["3.75rem", { lineHeight: "1" }]
    // 60px
  },
  // Font weights
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700"
  },
  // Animações customizadas
  animation: {
    "fade-in": "fadeIn 0.2s ease-out",
    "slide-up": "slideUp 0.2s ease-out",
    "scale-in": "scaleIn 0.1s ease-out",
    "pulse-primary": "pulsePrimary 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  },
  // Keyframes para as animações
  keyframes: {
    fadeIn: {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" }
    },
    slideUp: {
      "0%": { transform: "translateY(10px)", opacity: "0" },
      "100%": { transform: "translateY(0)", opacity: "1" }
    },
    scaleIn: {
      "0%": { transform: "scale(0.95)", opacity: "0" },
      "100%": { transform: "scale(1)", opacity: "1" }
    },
    pulsePrimary: {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: ".7" }
    }
  },
  // Breakpoints (mesmos do Tailwind)
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  pagueSimples
});
//# sourceMappingURL=index.js.map
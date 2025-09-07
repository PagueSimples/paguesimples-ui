"use client"
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  Input: () => Input,
  Large: () => Large,
  Lead: () => Lead,
  Muted: () => Muted,
  Small: () => Small,
  Text: () => Text,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  headingVariants: () => headingVariants,
  textVariants: () => textVariants
});
module.exports = __toCommonJS(index_exports);

// src/components/button/index.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary cursor-pointer text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive cursor-pointer text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-gray-500 bg-background cursor-pointer hover:bg-accent hover:border-circle hover:text-accent-foreground",
        secondary: "bg-secondary cursor-pointer text-secondary-foreground hover:bg-secondary/80",
        ghost: " cursor-pointer text-gray-400",
        link: "cursor-pointer text-primary underline-offset-4 hover:underline",
        success: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        gradient: "cursor-pointer bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/card/index.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border border-card-border bg-card text-card-foreground p-6 flex flex-col gap-6 justify-between",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("flex flex-col", className), ...props }));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("flex items-center", className), ...props }));
CardFooter.displayName = "CardFooter";

// src/components/badge/index.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
        warning: "border-transparent bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:hover:bg-orange-900/30",
        error: "border-transparent bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30",
        info: "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/components/input/index.tsx
var React3 = __toESM(require("react"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/typography/index.tsx
var React4 = __toESM(require("react"));
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var headingVariants = (0, import_class_variance_authority3.cva)("font-semibold tracking-tight", {
  variants: {
    level: {
      h1: "text-4xl lg:text-5xl",
      h2: "text-3xl lg:text-4xl",
      h3: "text-2xl lg:text-3xl",
      h4: "text-xl lg:text-2xl",
      h5: "text-lg lg:text-xl",
      h6: "text-base lg:text-lg"
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      success: "text-primary",
      warning: "text-orange-600",
      error: "text-red-600"
    }
  },
  defaultVariants: {
    level: "h1",
    color: "default"
  }
});
var textVariants = (0, import_class_variance_authority3.cva)("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      success: "text-primary",
      warning: "text-orange-600",
      error: "text-red-600"
    }
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    color: "default"
  }
});
var H1 = React4.forwardRef(
  ({ className, color, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "h1",
    {
      className: cn(headingVariants({ level: "h1", color, className })),
      ref,
      ...props
    }
  )
);
H1.displayName = "H1";
var H2 = React4.forwardRef(
  ({ className, color, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "h2",
    {
      className: cn(headingVariants({ level: "h2", color, className })),
      ref,
      ...props
    }
  )
);
H2.displayName = "H2";
var H3 = React4.forwardRef(
  ({ className, color, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "h3",
    {
      className: cn(headingVariants({ level: "h3", color, className })),
      ref,
      ...props
    }
  )
);
H3.displayName = "H3";
var H4 = React4.forwardRef(
  ({ className, color, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "h4",
    {
      className: cn(headingVariants({ level: "h4", color, className })),
      ref,
      ...props
    }
  )
);
H4.displayName = "H4";
var Text = React4.forwardRef(
  ({ className, size, weight, color, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "p",
    {
      className: cn(textVariants({ size, weight, color, className })),
      ref,
      ...props
    }
  )
);
Text.displayName = "Text";
var Lead = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "p",
    {
      ref,
      className: cn("text-xl text-muted-foreground", className),
      ...props
    }
  )
);
Lead.displayName = "Lead";
var Large = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { ref, className: cn("text-lg font-semibold", className), ...props })
);
Large.displayName = "Large";
var Small = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "small",
    {
      ref,
      className: cn("text-sm font-medium leading-none", className),
      ...props
    }
  )
);
Small.displayName = "Small";
var Muted = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "p",
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  )
);
Muted.displayName = "Muted";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  H1,
  H2,
  H3,
  H4,
  Input,
  Large,
  Lead,
  Muted,
  Small,
  Text,
  badgeVariants,
  buttonVariants,
  cn,
  headingVariants,
  textVariants
});
//# sourceMappingURL=index.js.map
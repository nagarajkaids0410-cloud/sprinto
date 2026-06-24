import React from "react";
import theme from "../../theme/theme";

function Button({
  children,
  onClick,
  type = "button",
  width = "auto",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: theme.colors.primary,
        color: "#121212",
        border: "none",
        padding: "12px 24px",
        borderRadius: theme.radius.md,
        cursor: "pointer",
        fontWeight: "600",
        width,
        transition: ".3s",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
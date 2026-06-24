import React from "react";
import theme from "../../theme/theme";

function Card({ children }) {
  return (
    <div
      style={{
        background: theme.colors.card,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.lg,
        padding: "22px",
        boxShadow: theme.shadow.card,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
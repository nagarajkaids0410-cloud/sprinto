import { styles as commonStyles } from "../Shipper/style";

// Mirror layout profiles directly while overriding the core accent colors to Admin Gold/Amber
export const styles = {
  ...commonStyles,
  brandText: {
    ...commonStyles.brandText,
    background: "linear-gradient(to right, #f59e0b, #d97706)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  activeNav: {
    backgroundColor: "#d97706",
    color: "#ffffff",
  },
  primaryBtn: {
    ...commonStyles.primaryBtn,
    backgroundColor: "#d97706",
  },
  badgeReview: {
    padding: "0.25rem 0.6rem",
    backgroundColor: "#fef3c7",
    color: "#d97706",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "0.8rem"
  },
  badgeReady: {
    padding: "0.25rem 0.6rem",
    backgroundColor: "#dcfce7",
    color: "#15803d",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "0.8rem"
  }
};
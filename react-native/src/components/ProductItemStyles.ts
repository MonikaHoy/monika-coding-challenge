import { TextStyle, ViewStyle } from "react-native";

export const colors = {
  primaryTextColor: "#1B2633",
  secondaryTextColor: "#5E646E",
  backgroundColor: "#F8F9FC",
  categoryBackgroundColor: "#D4E5FF",
  shadowColor: "#1B2633"
};

export const styles = {
  cardContent: {
    flexDirection: "row",
    padding: 8,
    gap: 16,
    backgroundColor: colors.backgroundColor
  } as ViewStyle,
  card: {
    shadowColor: colors.shadowColor,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  productName: {
    color: colors.primaryTextColor,
    fontFamily: "Roboto_900Black",
    fontSize: 20,
    paddingBottom: 2
  },
  productDate: {
    color: colors.primaryTextColor,
    fontFamily: "Roboto_400Regular",
    fontSize: 12,
    paddingBottom: 6
  },
  categoryChip: {
    textStyle: {
      fontSize: 12,
      textAlign: "center",
      color: colors.primaryTextColor,
      fontFamily: "Roboto_400Regular",
      marginLeft: 12,
      marginRight: 12,
      lineHeight: 22
    } as TextStyle,
    style: {
      backgroundColor: colors.categoryBackgroundColor,
      borderRadius: 48,
      minHeight: 26,
      marginTop: 6
    }
  },
  iconButton: {
    iconColor: colors.secondaryTextColor,
    size: 24
  }
};

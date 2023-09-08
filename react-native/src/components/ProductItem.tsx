import React, { useState } from "react";
import { Card, Chip, IconButton, Text } from "react-native-paper";
import { View } from "react-native";
import { NewBadge } from "./NewBadge";
import { styles, colors } from "./ProductItemStyles";

interface ProductItemProps {
  productImage?: string | null;
  date: string;
  productName: string;
  categories?: string[];
}

export const ProductItem = ({
  productImage = null,
  date,
  productName,
  categories = []
}: ProductItemProps) => {
  const [showCategories, setShowCategories] = useState(true);

  const postedDate = new Date(date);
  const currentDate = new Date();
  const daysDifference = Math.round(
    (currentDate.getTime() - postedDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const isNew = daysDifference <= 7;

  return (
    <Card contentStyle={styles.cardContent}>
      <Card.Cover
        style={{
          width: 83.5,
          height: 112,
          backgroundColor: colors.backgroundColor,
          borderRadius: 0
        }}
        source={
          productImage
            ? { uri: productImage }
            : require("../../assets/Placeholder.png")
        }
      />
      <Card.Content
        style={{
          flexDirection: "column",
          flex: 1,
          flexGrow: 1,
          paddingHorizontal: 0, // remove default padding
          paddingBottom: 0
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={styles.productName}>
              {productName}
            </Text>
            <Text style={styles.productDate}>
              {postedDate.toLocaleDateString()}
            </Text>
          </View>

          {isNew && <NewBadge />}
          <IconButton
            icon={showCategories ? "chevron-up" : "chevron-down"}
            iconColor={styles.iconButton.iconColor}
            onPress={() => setShowCategories(!showCategories)}
            size={styles.iconButton.size}
            style={{
              margin: 0,
              marginTop: -8
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            flexWrap: "wrap"
          }}
        >
          {showCategories &&
            categories?.map((category, index) => (
              <Chip
                key={index}
                textStyle={styles.categoryChip.textStyle}
                style={styles.categoryChip.style}
              >
                {category}
              </Chip>
            ))}
        </View>
      </Card.Content>
    </Card>
  );
};

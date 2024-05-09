import React, { useState } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../constants/colors";
import TText from "../../TText";
import styles from "./style";
import { SpecialProducts_QUERY } from "../../../Graphql/querys";
import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const AuctionCard = ({ searchQueryy, onPress }) => {
  const navigation = useNavigation();
  const { data, loading, error } = useQuery(SpecialProducts_QUERY, {
    pollInterval: 30000,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading special products: {error.message}</Text>
      </View>
    );
  }

  const filteredSpecialProducts = data?.getAllSpecialProducts.filter(
    (specialProduct) =>
      specialProduct.title.toLowerCase().includes(searchQueryy.toLowerCase())
  );

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const width = 367 + 20; // Ensure this width is accurate
    const currentIndex = Math.round(scrollX / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.indicatorsContainer}>
        {filteredSpecialProducts.slice(0, 3).map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor:
                  activeIndex === index ? colors.greyGreen : colors.white2,
              },
            ]}
          />
        ))}
      </View>
      <FlatList
        horizontal
        data={filteredSpecialProducts}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const isLastItem = index >= 3;

          return (
            <View key={item.id}>
              {isLastItem ? (
                <TouchableOpacity
                  style={styles.cardMore}
                  onPress={() => navigation.navigate("DetailsAuctionCard")}
                >
                  <TText T="18" F="semiBold" C="darkGrey" style={styles.More}>
                    See More
                  </TText>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("AuctionDetails", { item })
                  }
                >
                  <ImageBackground
                    source={{ uri: item.imageUrl }}
                    style={styles.cardContainer}
                    imageStyle={styles.backgroundImage}
                  >
                    <View style={styles.Infos}>
                      <View style={styles.cardInfoContainer}>
                        <TText
                          T="25"
                          F="bold"
                          C="darkGrey"
                          style={styles.cardInfoValue}
                        >
                          {item.endingIn}
                        </TText>
                        <TText
                          T="18"
                          F="semiBold"
                          C="darkGrey"
                          style={styles.cardInfoValuePrice}
                        >
                          {item.price}$
                        </TText>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default AuctionCard;

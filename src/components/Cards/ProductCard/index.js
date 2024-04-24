import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import styles from "./style";
import TText from "../../TText";
const ProductCard = ({ navigation, onPress }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "iPhone 12",
      Price: "1200",
      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",
      SellerName: "John Doe",
      ProductImage:
        "https://media.gqmagazine.fr/photos/655c823373c3872342ffcc8e/16:9/w_2560%2Cc_limit/iPhone16-Batterie.jpg",
    },

    {
      id: 2,
      title: "iPhone 12",
      Price: "1200",
      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",
      SellerName: "John Doe",
      ProductImage:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    },
    {
      id: 3,
      title: "iPhone 12",
      Price: "1200",
      description:
        "This is a brand new iPhone 12 with 128GB storage. It comes with a charger and a case.",

      SellerName: "John Doe",

      ProductImage:
        "https://www.datocms-assets.com/101859/1707248470-montage_bottle_pinkpurple_producttile_2680x3344.png?auto=format&fit=max&w=3840",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ImageBackground
            key={item.id}
            source={{ uri: item.ProductImage }}
            style={styles.cardContainer}
            imageStyle={styles.backgroundImage}
          >
            <View style={styles.Likes}>
              <Text style={styles.LikesText}>100</Text>
              <TouchableOpacity>
                <Image
                  style={styles.LikesImage}
                  source={require("../../../../assets/heart_8812101.png")}
                />
              </TouchableOpacity>
            </View>

            <View onPress={onPress} style={styles.Infos}>
              <TText T="12" F="bold" style={styles.TitleText}>
                {item.title}
              </TText>
              <TText T="12" F="regular" style={styles.TitleText}>
                {item.Price}$
              </TText>
            </View>
          </ImageBackground>
        )}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default ProductCard;

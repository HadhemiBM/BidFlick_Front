import React from "react";
import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "./style";

import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import TText from "../../../components/TText";

import { LinearGradient } from "expo-linear-gradient";

const ProductDetails = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.conttainer}>
      <View style={styles.header}>
        <View style={styles.Likess}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" color="#000" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.Likes}>
          <TText T="17" F="regular" style={styles.LikesText}>
            {item.nbrLike}
          </TText>
          <TouchableOpacity onPress={() => toggleLike(item.id)}>
            <Image
              style={styles.LikesImage}
              source={require("../../../../assets/heart_8812101.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.image}>
        <Image source={{ uri: item.imageUrl }} style={styles.iimg} />
      </View>

      <View style={styles.cont3}>
        <View style={styles.Infos}>
          <View style={styles.InfosTime}>
            <TText T="20" F="semiBold">
              {item.title}
            </TText>
            <LinearGradient
              colors={["#2EBC7C", "#C3FCF1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradientName}
            ></LinearGradient>
            <TText T="20" F="regular">
              {item.price}$
            </TText>
          </View>
          <View style={styles.InfosTime}>
            <View style={styles.InfosSeller}>
              <Image
                source={require("../../../../assets/people19.png")}
                style={styles.SellerImg}
              />

              <TText T="18" F="regular" style={styles.LikesText}>
                {item.user.fullName}
              </TText>
            </View>
            <LinearGradient
              colors={["#2EBC7C", "#C3FCF1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradientSeller}
            ></LinearGradient>
          </View>
        </View>
        <LinearGradient
          colors={["#C3FCF1", "#2EBC7C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        ></LinearGradient>
        <TText T="20" F="semiBold">
          Description
        </TText>
        <TText T="14" F="regular" style={styles.LikesText}>
          {item.description}
        </TText>
        <View style={styles.BtnDelete}>
          <TouchableOpacity>
            <TText
              T="18"
              F="semiBold"
              C="green"
              onPress={() => navigation.navigate("CategoriesScreen")}
            >
              Delete
            </TText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

import styles from "./style";

import { useUser } from "../../../Graphql/userContext";

import AdminMenu from "./adminMenu";
import UserMenu from "./userMenu.js";
function Menu({ navigation }) {
  const user = useUser();

  useEffect(() => {
    if (user.roles === "admin") {
      setIsAdmin(true);
    }
  }, [user.roles]);

  const [isAdmin, setIsAdmin] = useState(false);
  const navHome = () => {
    navigation.navigate("Home");
  };
  const navEdit = () => {
    navigation.navigate("ProfileEdit");
  };
  const navOrders = () => {
    navigation.navigate("Orders");
  };
  const navAuctions = () => {
    navigation.navigate("DetailsAuctionCard");
  };
  const navUsers = () => {
    navigation.navigate("AllUsers");
  };

  const navCategories = () => {
    navigation.navigate("CategoriesScreen");
  };
  return (
    <SafeAreaView style={styles.container}>
      {isAdmin ? (
        <AdminMenu
          onHomePress={navHome}
          onEditPress={navEdit}
          onAucPress={navAuctions}
          onOrdPress={navOrders}
          onUserPress={navUsers}
          onCatPress={navCategories}
        />
      ) : (
        <UserMenu
          onHomePress={navHome}
          onEditPress={navEdit}
          onAucPress={navAuctions}
      
        />
      )}
    </SafeAreaView>
  );
}

export default Menu;

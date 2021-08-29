import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Card(props) {
  const { cardPressed, item, index, value1, value2 } = props;

  return (
    <TouchableOpacity
      disabled={!item.visibility || value1 === index}
      style={[
        styles.container,
        {
          borderWidth: item.visibility ? 2 : 0,
        },
      ]}
      onPress={() => cardPressed(index)}
    >
      {(value1 != null && value1 === index && item.visibility) ||
      (value2 != null && value2 === index && item.visibility) ? (
        <Text style={styles.innerCardText}>{item.name}</Text>
      ) : null}
    </TouchableOpacity>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Card from "../../components/card";
import { shuffle } from "../../utils/commonMethods";
import styles from "./styles";

export default function Main() {
  const tempArray = [
    { name: "A", visibility: true },
    { name: "B", visibility: true },
    { name: "C", visibility: true },
    { name: "D", visibility: true },
    { name: "E", visibility: true },
    { name: "F", visibility: true },
    { name: "G", visibility: true },
    { name: "H", visibility: true },
    { name: "A", visibility: true },
    { name: "B", visibility: true },
    { name: "C", visibility: true },
    { name: "D", visibility: true },
    { name: "E", visibility: true },
    { name: "F", visibility: true },
    { name: "G", visibility: true },
    { name: "H", visibility: true },
  ];
  const [gameArray, setGameArray] = useState([]);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [matchesCount, setMatchesCount] = useState(0);
  const [turnsCount, setTurnsCount] = useState(0);

  const cardPressed = (index) => {
    if (value1 === null) {
      setValue1(index);
    } else if (value2 === null) {
      setValue2(index);
      setTurnsCount(turnsCount + 1);
    } else {
      setValue2(null);
      setValue1(null);
    }
  };

  useEffect(() => {
    if (value2 != null) {
      if (gameArray[value1].name === gameArray[value2].name) {
        let updatedArray = [...gameArray];
        updatedArray[value1].visibility = false;
        updatedArray[value2].visibility = false;
        setGameArray(updatedArray);
        setMatchesCount(matchesCount + 1);
        setValue1(null);
        setValue2(null);
        let pendingArray = gameArray.filter((x) => x.visibility === true);
        console.log("pendingArray ", pendingArray);
        if (!pendingArray || pendingArray.length == 0) {
          setGameArray([]);
          setMatchesCount(0);
          setTurnsCount(0);
        }
      }
    }
  }, [value2]);

  return (
    <View style={styles.container}>
      {gameArray.length > 0 ? (
        <>
          <View>
            <Text style={styles.countText}>Matches: {matchesCount}</Text>
            <Text style={styles.countText}>Turns: {turnsCount}</Text>
          </View>
          <View
            style={styles.mainView}
          >
            {gameArray.map((item, index) => {
              return (
                <Card
                  value1={value1}
                  value2={value2}
                  item={item}
                  index={index}
                  key={index}
                  cardPressed={cardPressed}
                ></Card>
              );
            })}
          </View>
        </>
      ) : (
        <Button
          title="start game"
          onPress={() => {
            let shuffledArray = shuffle(tempArray);
            setGameArray(shuffledArray);
          }}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

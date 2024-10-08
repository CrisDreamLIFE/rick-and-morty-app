import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedCharacterCard } from "./CharacterCard";
// import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  const getCharactersFromApi = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setCharacters(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getLatestGames().then((games) => {
    //   setGames(games);
    // });
    getCharactersFromApi();
  }, []);

  const char = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  };

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Text>LOGO</Text>
        {/* <Logo /> */}
      </View>
      {characters.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={characters}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard character={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      {/* {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image
            source={{ uri: game.image }}
            style={{
              width: 107,
              height: 147,
              borderRadius: 10,
            }}
          />
        </View>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { Text, Button, StyleSheet } from "react-native";

// import { Container } from './styles';

export default function TrackList({ navigation }) {
  return (
    <>
      <Text>TrackList</Text>
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
}

const styles = StyleSheet.create({});

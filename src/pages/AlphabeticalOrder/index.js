import React, { useState } from "react";
import { Clipboard, Keyboard } from "react-native";
import {
  Container,
  Header,
  ContainerButton,
  ButtonOption,
  TextButton,
  InputLabel,
  ContainerInput
} from "./styles";

export default function AlphabeticalOrder() {
  const [newText, setNewText] = useState("");

  convertTextTitleCase = () => {
    Keyboard.dismiss();
    const text = newText;
    const arraycase = text.split(" ").sort();
    const title = arraycase.toString().replace(/,/g, " ");
    setNewText(title);
  };

  readFromClipboard = async () => {
    const clipboardContent = await Clipboard.getString();
    setNewText(clipboardContent);
  };

  return (
    <Container>
      <Header>
        <ContainerButton>
          <ButtonOption
            style={{ width: "100%" }}
            onPress={() => {
              convertTextTitleCase();
            }}
          >
            <TextButton>ALPHABETICAL ORDER</TextButton>
          </ButtonOption>
        </ContainerButton>
      </Header>
      <ContainerInput>
        <InputLabel
          autoCapitalize="none"
          autoCorrect={false}
          multiline={true}
          value={newText}
          onChangeText={text => setNewText(text)}
        />
      </ContainerInput>
      <ContainerButton style={{ marginTop: 15 }}>
        <ButtonOption
          onPress={() => {
            readFromClipboard();
          }}
        >
          <TextButton>PASTE</TextButton>
        </ButtonOption>
        <ButtonOption
          onPress={() => {
            Clipboard.setString(newText);
          }}
        >
          <TextButton>COPY</TextButton>
        </ButtonOption>
      </ContainerButton>
    </Container>
  );
}

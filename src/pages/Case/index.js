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

export default function Case() {
  const [newText, setNewText] = useState("");

  convertTextToUpperCase = () => {
    Keyboard.dismiss();
    const text = newText;
    const uppercasetext = text.toUpperCase();
    setNewText(uppercasetext);
  };

  convertTextToLowerCase = () => {
    Keyboard.dismiss();
    const text = newText;
    const lowercasetext = text.toLowerCase();
    setNewText(lowercasetext);
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
            onPress={() => {
              convertTextToUpperCase();
            }}
          >
            <TextButton>UPPERCASE</TextButton>
          </ButtonOption>
          <ButtonOption
            onPress={() => {
              convertTextToLowerCase();
            }}
          >
            <TextButton>LOWERCASE</TextButton>
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

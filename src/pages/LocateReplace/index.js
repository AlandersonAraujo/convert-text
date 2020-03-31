import React, { useState } from "react";
import { Clipboard, Keyboard } from "react-native";
import {
  Container,
  Header,
  ContainerButton,
  ButtonOption,
  TextButton,
  InputLabel,
  ContainerInput,
  ContainerInputRow,
  InputLabelSearch
} from "./styles";

export default function LocateReplace() {
  const [newText, setNewText] = useState("");
  const [newTextLocate, setNewTextLocate] = useState("");
  const [newTextReplace, setNewTextReplace] = useState("");

  locateReplaceText = () => {
    Keyboard.dismiss();
    const text = newText;
    const locate = newTextLocate;
    const locateGobal = new RegExp(locate, "g");
    const replace = newTextReplace;
    const replaceText = text.replace(locateGobal, replace);
    setNewText(replaceText);
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
              locateReplaceText();
            }}
          >
            <TextButton>LOCATE AND REPLACE</TextButton>
          </ButtonOption>
        </ContainerButton>
      </Header>
      <ContainerInputRow>
        <InputLabelSearch
          autoCapitalize="none"
          autoCorrect={false}
          value={newTextLocate}
          onChangeText={text => setNewTextLocate(text)}
          placeholder={"LOCATE"}
        />
        <InputLabelSearch
          autoCapitalize="none"
          autoCorrect={false}
          value={newTextReplace}
          onChangeText={text => setNewTextReplace(text)}
          placeholder={"REPLACE"}
        />
      </ContainerInputRow>
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

import {
  Button,
  FormControl,
  Heading,
  InputGroup,
  Input,
  Stack,
  HStack,
  Textarea,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import CustomCard from "./CustomCard";

function InputForm() {
  
  const nameInputRef = useRef<HTMLInputElement>(null);

  const lastNameInputRef = useRef<HTMLInputElement>(null);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const suggestInputRef = useRef<HTMLTextAreaElement>(null);

  let nameIsInvalid = true;
  let lastNameIsInvalid = true;
  let emailIsInvalid = true;
  let textIsInvalid = true;

  let disableCheck = nameIsInvalid || lastNameIsInvalid || emailIsInvalid || textIsInvalid;
  
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if(!nameInputRef.current?.value) {

    }
    const suggestionInfo = {
      name: nameInputRef.current?.value,
      lastName: lastNameInputRef.current?.value,
      email: emailInputRef.current?.value,
      suggestion: suggestInputRef.current?.value,
    }
    nameIsInvalid = false;
    lastNameIsInvalid = false;
    emailIsInvalid = false;
    textIsInvalid = false;
    console.log(suggestionInfo)
  };

  const maxLength = 900;
  const [charsLeft, setCharsLeft] = useState(maxLength);

  const countHandler = (event: any) => {
    //???
    setCharsLeft(900 - event.target.value.length);
  };

  return (
    <CustomCard>
      <form onSubmit={formSubmitHandler} noValidate={true}>
        <FormControl pt="5" isRequired>
          <Heading as="h1" size="xl" m="6">
            Contact Us!
          </Heading>
          <InputGroup>
            <Stack spacing={4}>
              <HStack>
                <div>
                  <FormLabel mb="8px">Your Name</FormLabel>
                  <Input
                    isInvalid={nameIsInvalid}
                    ref={nameInputRef}
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div>
                  <FormLabel mb="8px">Your Last Name</FormLabel>
                  <Input
                    isInvalid={lastNameIsInvalid}
                    ref={lastNameInputRef}
                    type="text"
                    placeholder="last name"
                  />
                </div>
              </HStack>
              <FormLabel mb="8px">Your E-mail</FormLabel>
              <Input
                isInvalid={emailIsInvalid}
                ref={emailInputRef}
                type="email"
                placeholder="e-mail@xmpl.com"
              />
              <FormLabel>Ask us anything!</FormLabel>
              <Box>
                <Textarea
                  isInvalid={textIsInvalid}
                  ref={suggestInputRef}
                  maxLength={maxLength}
                  placeholder="Your Suggestions"
                  onChange={countHandler}
                />
                <div>{`${charsLeft} characters left`}</div>
              </Box>
            </Stack>
          </InputGroup>
          <Button isDisabled={disableCheck} m="4" type="submit" background="#10ABB4">
            Submit
          </Button>
        </FormControl>
      </form>
    </CustomCard>
  );
}

export default InputForm;

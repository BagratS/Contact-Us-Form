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
import { useState } from "react";
import CustomCard from "./CustomCard";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import styles from "./styles/Styles.module.css";

function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      suggestion: "",
    },
  });

  const handleSubmitCallback = (data: object) => {
    fetch("/api/hello", { body: JSON.stringify(data), method: "POST" })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => console.log(res));
  };

  const maxLength = 900;
  const [charsLeft, setCharsLeft] = useState(maxLength);

  const countHandler = (event: any) => {
    //???
    setCharsLeft(900 - event.target.value.length);
  };

  return (
    <CustomCard>
      <form
        // className={styles["form-style"]}
        noValidate={true}
        onSubmit={handleSubmit(handleSubmitCallback)}
      >
        <FormControl pt="3" isRequired>
          <Heading as="h1" size="xl" m="6">
            Contact Us!
          </Heading>
          <InputGroup>
            <Stack spacing={4}>
              <HStack>
                <div>
                  <FormLabel mb="8px">Your Name</FormLabel>
                  <Input
                    m="4 auto"
                    {...register("name", {
                      required: "The Field is Required",
                      minLength: {
                        value: 3,
                        message: "Min length is 3 characters",
                      },
                    })}
                    type="text"
                    placeholder="name"
                  />
                  <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>
                <div>
                  <FormLabel mb="8px">Your Last Name</FormLabel>
                  <Input
                    m="4 auto"
                    {...register("lastName", {
                      required: "The Field is Required",
                    })}
                    type="text"
                    placeholder="last name"
                  />
                  <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
                </div>
              </HStack>
              <div>
                <FormLabel mb="8px">Your E-mail</FormLabel>
                <Input
                  m="4 auto"
                  {...register("email", {
                    required: "The Field is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="email"
                  placeholder="e-mail@xmpl.com"
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </div>
              <Box>
                <FormLabel>Ask us anything!</FormLabel>
                <Textarea
                  m="4 auto"
                  {...register("suggestion", {
                    required: "The Field is Required",
                  })}
                  maxLength={maxLength}
                  placeholder="Your Suggestions"
                  onChange={countHandler}
                />
                <ErrorMessage>{errors.suggestion?.message}</ErrorMessage>
                <div>{`${charsLeft} characters left`}</div>
              </Box>
            </Stack>
          </InputGroup>
          <Button m="4" type="submit" background="#10ABB4">
            Submit
          </Button>
        </FormControl>
      </form>
    </CustomCard>
  );
}

export default InputForm;

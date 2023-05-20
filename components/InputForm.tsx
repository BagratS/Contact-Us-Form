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

function InputForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      suggestion: "",
    },
  });
  const email = watch("email");

  const maxLength = 900;
  const [charsLeft, setCharsLeft] = useState(maxLength);

  const countHandler = (event: any) => {
    //???
    setCharsLeft(900 - event.target.value.length);
  };

  return (
    <CustomCard>
      <form
        noValidate={true}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
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
                    {...register("lastName", {
                      required: "The Field is Required",
                    })}
                    type="text"
                    placeholder="last name"
                  />
                  <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
                </div>
              </HStack>
              <FormLabel mb="8px">Your E-mail</FormLabel>
              <Input
                {...register("email", { required: "The Field is Required" })}
                type="email"
                placeholder="e-mail@xmpl.com"
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
              <FormLabel>Ask us anything!</FormLabel>
              <Box>
                <Textarea
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

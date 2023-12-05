import {Container, Typography} from "ui";
import {TitleBoxSlice} from "../../../slices/titleBox";

const Page = async () => {

  return (
    <Container section gap={4}>
      <TitleBoxSlice
        description={{
          type: "literal",
          value: "Coming soon"
        }}
        title={{
          format: {
            // @ts-ignore
            typography: [
              {
                value: "Heading3",
                key: "size"
              }
            ],
            tag: "h2"
          },
          type: "literal",
          value: "Account Analyzer",
        }}
      />
    </Container>
  )
}

export default Page;
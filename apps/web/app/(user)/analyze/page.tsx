import {Container} from "ui";
import {TitleBoxSlice} from "../../../slices/titleBox";
import {AccountAnalyzer} from "../../../components/accountAnalyzer";


const Page = async () => {
  return (
    <Container section gap={4}>
      <TitleBoxSlice
        description={{
          type: "literal",
          value: ""
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
      <AccountAnalyzer />
    </Container>
  )
}

export default Page;
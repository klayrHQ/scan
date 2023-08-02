import {Container, Grid, Typography} from "ui";
import {Table} from "../../../components/data/table/table";
import {getValidatorsFromAPI} from "../../../controllers/validators";
import {ValidatorsHeader} from "../../../components/validators/validatorsHeader";
import {ValidatorsTable} from "../../../components/validators/validatorsTable";

const Page = async () => {
  const validators = await getValidatorsFromAPI()

  return (
    <Container section>
    <ValidatorsHeader kpis={[]} />
    <ValidatorsTable validators={validators} />
    </Container>
  )
}

export default Page
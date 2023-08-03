import {Container, Grid, Typography} from "ui";
import {getValidatorsFromAPI} from "../../../controllers/validators";
import {ValidatorsHeader} from "../../../components/validators/validatorsHeader";
import {ValidatorsTable} from "../../../components/validators/validatorsTable";

const Page = async () => {
  const validators = await getValidatorsFromAPI({limit: 100})

  return (
    <Container section>
      <ValidatorsHeader
        kpis={{
          validators: [
            {
              // @ts-ignore
              total: validators?.meta?.total,
              label: "Total validators",
            },
          ],
          generators: [
            {
              // @ts-ignore
              total: validators?.meta?.total
            }
          ]
        }}
      />
      <ValidatorsTable validators={validators} />
    </Container>
  )
}

export default Page
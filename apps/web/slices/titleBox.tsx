import { Container, Grid, Tooltip, Typography } from "ui";
import { InfoOutlineIcon } from "@sanity/icons";
import { ValueFormat, ValueFormatter } from "../components/valueFormatter";

export const TitleBoxSlice = ({
  title,
  description,
  info,
}: {
  title?: ValueFormat;
  description?: string;
  info?: string;
}) => {
  return (
    <Container section className={"max-w-app"}>
      <Grid columns={1}>
        <Grid flex columns={2} gap={0} className={"items-center"}>
          {title && title.value && (
            <ValueFormatter value={title.value} {...title.format} />
          )}

          {info && (
            <Tooltip label={info}>
              <InfoOutlineIcon className={"text-onInfobar mx-2 h-5 w-5"} />
            </Tooltip>
          )}
        </Grid>
        {description && (
          <Typography tag={"p"} size={"body"} color={"onBackground"}>
            {description}
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

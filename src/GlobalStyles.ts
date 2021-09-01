import { createUseStyles } from "react-jss";

type RuleNames = "myFieldset" | "myLabel";

interface FieldSetProps {
  children?: React.ReactNode;
  spacing?: number;
  fontWeight?: string;
  labelColor?: string;
}

export const useGlobalStyles = createUseStyles<RuleNames, FieldSetProps>({
  myFieldset: {
    margin: "2em 0",
    padding: "1em 2em",
    border: "1px solid black",
    borderRadius: "6px",
    minWidth: "200px",
  },
  myLabel: {
    display: "block",
    marginTop: "2em",
    "&:first-child": {
      marginTop: "0",
    },
  },
});

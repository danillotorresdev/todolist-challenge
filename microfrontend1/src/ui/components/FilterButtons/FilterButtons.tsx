import { ButtonGroup, Button } from "@chakra-ui/react";

type Filter = "All" | "Active" | "Completed";

type FilterButtonsProps = {
  currentFilter: Filter;
  setFilter: (filter: Filter) => void;
};

export const FilterButtons = ({
  currentFilter,
  setFilter,
}: FilterButtonsProps) => (
  <ButtonGroup marginTop="4" marginBottom="10">
    <Button onClick={() => setFilter("All")} isActive={currentFilter === "All"}>
      All
    </Button>
    <Button
      onClick={() => setFilter("Active")}
      isActive={currentFilter === "Active"}
    >
      Active
    </Button>
    <Button
      onClick={() => setFilter("Completed")}
      isActive={currentFilter === "Completed"}
    >
      Completed
    </Button>
  </ButtonGroup>
);

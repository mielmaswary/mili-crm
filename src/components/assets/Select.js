import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  title,
  value,
  options,
  onChange,
  variant,
}) {
  const optionsElemet = options?.map((option, i) => {
    return (
      <MenuItem key={i} value={option.value}>
        {option.title}
      </MenuItem>
    );
  });
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          defaultValue={0}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Group"
          onChange={onChange}
          variant={variant}
        >
          {optionsElemet}
        </Select>
      </FormControl>
    </Box>
  );
}

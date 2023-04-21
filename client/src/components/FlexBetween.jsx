import React from 'react'
import { Box, styled} from "@mui/material"

const FlexBetween = styled(Box)((theme)=> ({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
}));

export default FlexBetween
import { Box } from '@components/system'
import React from 'react'

export const Footer: React.FC<{}> = () => {
  return (
    <Box textAlign="center" as="footer" bg="black" color="white" py={10} px={30}>
      Footer
    </Box>
  )
}

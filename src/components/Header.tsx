import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, Box, useColorMode } from '@chakra-ui/react';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      py={4}
      px={8}
      borderBottom={"1px"}
    >
      <Box>
        <Heading as="h1" fontSize="xl" fontWeight="bold">
          Radosław Bułas
        </Heading>
      </Box>
      <Box>
        <IconButton
          aria-label="Menu"
          size="md"
          fontSize="xl"
          variant="ghost"
          display={{ base: "flex", md: "none" }}
        />
      </Box>
      <IconButton
        aria-label="Menu"
        icon={<HamburgerIcon />}
        size="md"
        fontSize="xl"
        variant="ghost"
        display={{ base: "flex", md: "none" }}
      />
      <IconButton onClick={toggleColorMode}
        aria-label={'Toggle Color Scheme'}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}>
      </IconButton>
    </Flex>
  );
}

export default Header;
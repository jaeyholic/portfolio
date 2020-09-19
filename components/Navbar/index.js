import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { Moon, Sun } from '../../theme/customicons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('gray.800', 'gray.200');
  return (
    <Flex
      align='center'
      justify='space-between'
      w='100%'
      h={{ md: 20 }}
      px={{ md: 20 }}
    >
      <Box>
        <NextLink href='/' passHref>
          <Link _hover={{ textDecor: 'none' }}>
            <Heading
              as='h3'
              fontWeight={900}
              fontSize={{ md: '3xl' }}
              fontFamily='heading'
            >
              FelixYeboah
            </Heading>
          </Link>
        </NextLink>
      </Box>

      <Flex align='center'>
        <Link
          isExternal
          href='mailto:gabsco208309@hotmail'
          fontWeight={900}
          fontSize={{ md: 'xl' }}
          mr={{ md: 32 }}
          _hover={{ textDecor: 'none' }}
          textTransform='uppercase'
        >
          send me an email
        </Link>
        <Box as='button'>
          <Text fontWeight={900} fontSize={{ md: 'xl' }}>
            Menu
          </Text>
        </Box>

        <Box color={color} as='button' onClick={toggleColorMode} ml={{ md: 6 }}>
          <Icon as={colorMode === 'dark' ? Sun : Moon} boxSize={8} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;

import { Flex, Link, Text } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <Flex
    as="footer"
    align="center"
    justify="space-between"
    py={4}
    px={8}
  >
    <Flex align={"center"} w={'full'} direction={'column'} >
      <Text>Created by:</Text>
      <Flex gap='1em' py={2}>
        <Link href='/' isExternal>
          <AiFillGithub size="2em" />
        </Link>
        <Link href='/' isExternal>
          <BsFacebook size="2em" />
        </Link>
        <Link href='/' isExternal>
          <FaLinkedin size="2em" />
        </Link>
      </Flex>
      <Text fontSize={"lg"}>Radosław Bułas © 2023</Text>
    </Flex>
  </Flex>
);
export default Footer;
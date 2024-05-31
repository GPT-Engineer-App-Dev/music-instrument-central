import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Index = () => {
  const { cartItems } = useCart();

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Music Store</Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/category/guitars">Guitars</Link>
          <Link as={RouterLink} to="/category/keyboards">Keyboards</Link>
          <Link as={RouterLink} to="/category/drums">Drums</Link>
          <Link href="#about">About Us</Link>
          <Link href="#contact">Contact</Link>
          <HStack spacing={2}>
            <IconButton as={RouterLink} to="/cart" icon={<FaShoppingCart />} aria-label="Cart" />
            <Text>{cartItems.length}</Text>
          </HStack>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex id="home" bg="gray.700" color="white" height="60vh" alignItems="center" justifyContent="center" textAlign="center" p={4}>
        <VStack spacing={4}>
          <Heading size="2xl">Welcome to the Best Online Music Store</Heading>
          <Text fontSize="lg">Find the best instruments and gear for all your musical needs.</Text>
          <Button colorScheme="teal" size="lg">Shop Now</Button>
        </VStack>
      </Flex>

      {/* Featured Products Section */}
      <Box id="shop" p={8}>
        <Heading size="xl" textAlign="center" mb={8}>Featured Products</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={8}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md">Product 1</Heading>
              <Text mt={4}>Description of Product 1</Text>
              <Button mt={4} colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md">Product 2</Heading>
              <Text mt={4}>Description of Product 2</Text>
              <Button mt={4} colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md">Product 3</Heading>
              <Text mt={4}>Description of Product 3</Text>
              <Button mt={4} colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={8} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us at: info@musicstore.com</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
          <Text>&copy; 2023 Music Store. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
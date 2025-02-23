import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart, FaEdit } from "react-icons/fa";
import RequestModal from "./Request";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Badge,
  VStack,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { useUser } from "./UserState";

const ItemPage = () => {
  const { itemId } = useParams();
  const [itemObject, setItemObject] = useState(null);
  const { user, loggedIn, fetchClubId } = useUser();
  const [liked, setLiked] = useState(false);

  const authenticated = loggedIn();

  const handleLike = (item) => {
    const like = async () => {
      await fetch(`http://localhost:8000/clubs/like/${item}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clubId: fetchClubId(),
          liked: liked,
        }),
      });
    };
    like();
    setLiked(!liked);
  };

  // 示例物品数据
  const itemData = {
    name: "Plates",
    description:
      "These are typical plates, we have like 100 of them, so come pick it up.",
    quantity: 100,
    clubName: "Debate Club",
    imageUrl:
      "https://www.ikea.com/us/en/images/products/ikea-365-plate-white__0712377_pe728796_s5.jpg?f=s",
    status: "Available",
  };

  // **示例申请列表**
  const requests = [
    {
      club: "WiCS",
      quantity: 20,
      message: "We would like to borrow plates to serve food for the HopperHacks X 2025 event. Thank you!",
    },
    {
      club: "Gourmet Club",
      quantity: 30,
      message: "We would like to borrow plates to host a food event on Friday. Thank you!",
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Box maxW="1200px" mx="auto" bg="white" p={6} borderRadius="md" boxShadow="md">
        <Divider mb={6} />

        {/* 主体布局：左侧图片 + 右侧详情 */}
        <Flex direction={["column", "column", "row"]} gap={6}>
          {/* 左侧图片 */}
          <Box flex="1" textAlign="center">
            <Image
              src={itemData.imageUrl}
              alt={itemData.name}
              borderRadius="md"
              boxShadow="sm"
              w="100%"
              maxH="400px"
              objectFit="cover"
              mb={[4, 4, 0]}
            />
          </Box>
          <IconButton
            aria-label="Edit"
            icon={<FaEdit />}
            colorScheme="blue"
            size="lg"
            position="absolute"
            top="150px"
            right="100px"
          />

          {/* 右侧商品详情 */}
          <Box flex="2">
            <VStack align="flex-start" spacing={4}>
              <Heading size="lg" color="black.700">
                {itemData.name}
              </Heading>
              <Text fontSize="md" color="black.600">
                {itemData.description}
              </Text>
              <Text color="black.500">Quantity: {itemData.quantity}</Text>
              <Text color="black.500">From: {itemData.clubName}</Text>

              {/* 物品状态 Badge */}
              <Badge colorScheme="green" fontSize="1.2em">
                {itemData.status}
              </Badge>

              {authenticated ? (
                <Flex gap={3}>
                  {/* 爱心按钮 */}
                  <IconButton
                    aria-label="Like"
                    icon={liked ? <FaHeart /> : <FaRegHeart />}
                    color={liked ? "red.500" : "gray.500"}
                    bg="transparent"
                    _hover={{ color: liked ? "red.600" : "gray.600" }}
                    fontSize="24px"
                    onClick={() => handleLike(itemId)}
                  />

                  {/* Request 按钮 */}
                  <Button colorScheme="blue">Request</Button>
                </Flex>
              ) : (
                <Text>Log in to request these items.</Text>
              )}
            </VStack>
          </Box>
        </Flex>
      </Box>

      {/* 申请列表 Box */}
      <Box maxW="1200px" mx="auto" mt={6} bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>
          Requests for this item
        </Heading>
        {requests.length > 0 ? (
          requests.map((req, index) => (
            <Box key={index} p={4} mb={3} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{req.club}</Text>
              <Text>Quantity: {req.quantity}</Text>
              <Text fontStyle="italic">"{req.message}"</Text>
            </Box>
          ))
        ) : (
          <Text>No requests yet.</Text>
        )}
      </Box>
    </Box>
  );
};

export default ItemPage;

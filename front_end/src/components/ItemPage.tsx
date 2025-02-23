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

  const handleLike = item => {
    const like = async () => {
      const response = await fetch(`http://localhost:8000/clubs/like/${item}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clubId: fetchClubId(),
          liked: liked
        }),
      });
    }
    like();
    setLiked(!liked);
  }

  // 示例物品数据
  const itemData = {
    name: "Plates",
    description:
      "These are typical plates, we have like 100 of them, so come pick it up.",
    quantity: 100,
    clubName: "Debate Club",
    imageUrl:
      "https://www.ikea.com/us/en/images/products/ikea-365-plate-white__0712377_pe728796_s5.jpg?f=s",
    status: "Available", // "Available", "Out of Stock"
  };

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      {/** 外层容器，限制最大宽度并居中 */}
      <Box
        maxW="1200px"
        mx="auto"
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="md"
      >
        <Divider mb={6} />

        {/** 主体布局：左侧图片 + 右侧详情 */}
        <Flex
          direction={["column", "column", "row"]} // 小屏幕时自动换行
          gap={6}
        >
          {/** 左侧图片 */}
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

          {/** 右侧商品详情 */}
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

              {/** 物品状态 Badge */}
              <Badge colorScheme="green" fontSize="1.2em">
                {itemData.status}
              </Badge>
              
              {authenticated ? (
                <Flex gap={3}>
                  {/* 爱心按钮 */}
                  <IconButton
                    aria-label="Like"
                    icon={liked ? <FaHeart /> : <FaRegHeart />} // 切换填充/空心图标
                    color={liked ? "red.500" : "gray.500"} // 填充时红色，未填充时灰色
                    bg="transparent" // 让按钮背景透明，没有方框
                    _hover={{ color: liked ? "red.600" : "gray.600" }} // 悬停时颜色加深
                    fontSize="24px" // 让图标更大
                    onClick={() => handleLike(itemId)} // 点击切换状态
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
    </Box>
  );
};

export default ItemPage;

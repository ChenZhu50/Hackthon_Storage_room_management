import { useEffect, useState } from "react";
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
  const { id } = useParams();
  const [itemObject, setItemObject] = useState(null);
  const [itemRequests, setItemRequests] = useState([]);
  const { user, loggedIn, fetchClubId } = useUser();
  const [liked, setLiked] = useState(false);

  const authenticated = loggedIn();
  const isAdmin = authenticated && itemObject?.club._id === fetchClubId();

  const fetchClubNameById = async clubId => {
    const res = await fetch(`http://localhost:8000/clubs/${clubId}/name`);
    if (!res.ok) return "None";
    const data = await res.json();
    return data.name || 'None';
  }

  useEffect(() => {
    const run = async () => {
      await fetch(`http://localhost:8000/items/${id}`).then(res => res.json()).then(data => setItemObject(data));
      await fetch(`http://localhost:8000/items/${id}/requests`).then(res => res.json()).then(data => setItemRequests(data));
    }
    run();
  }, [id])

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

  console.log(itemRequests);

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Box maxW="1200px" mx="auto" bg="white" p={6} borderRadius="md" boxShadow="md">
        <Divider mb={6} />

        {/* 主体布局：左侧图片 + 右侧详情 */}
        <Flex direction={["column", "column", "row"]} gap={6}>
          {/* 左侧图片 */}
          <Box flex="1" textAlign="center">
            <Image
              src={itemObject?.imageUrl}
              alt={itemObject?.title}
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
                {itemObject?.title}
              </Heading>
              <Text fontSize="md" color="black.600">
                {itemObject?.description}
              </Text>
              <Text color="black.500">Quantity: {itemObject?.quantity}</Text>
              <Text color="black.500">From: {itemObject?.club.name}</Text>

              {/* 物品状态 Badge */}
              <Badge colorScheme="green" fontSize="1.2em">
                AVAILABLE
              </Badge>

              {authenticated ? (
                <Flex gap={3}>
                  {!isAdmin && (
                    <>
                      <IconButton
                        aria-label="Like"
                        icon={liked ? <FaHeart /> : <FaRegHeart />} // 切换填充/空心图标
                        color={liked ? "red.500" : "gray.500"} // 填充时红色，未填充时灰色
                        bg="transparent" // 让按钮背景透明，没有方框
                        _hover={{ color: liked ? "red.600" : "gray.600" }} // 悬停时颜色加深
                        fontSize="24px" // 让图标更大
                        onClick={() => handleLike(id)} // 点击切换状态
                      />
                      <Flex>
                        <RequestModal id={id} quantity={itemObject?.quantity}/>
                      </Flex>
                    </>
                  )}
                </Flex>
              ) : (
                <Text>Log in to request these items.</Text>
              )}
            </VStack>
          </Box>
        </Flex>
      </Box>

      {/* 申请列表 Box */}
      {isAdmin && (
        <Box maxW="1200px" mx="auto" mt={6} bg="white" p={6} borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>
            Requests for this item
          </Heading>
          {itemRequests.length > 0 ? (
            itemRequests.map((req, index) => (
              <Box key={index} p={4} mb={3} borderWidth="1px" borderRadius="md">
                <Text fontWeight="bold">{req.by.name}</Text>
                <Text>Quantity: {req.quantity}</Text>
                <Text fontStyle="italic">"{req.message}"</Text>
              </Box>
            ))
          ) : (
            <Text>No requests yet.</Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ItemPage;

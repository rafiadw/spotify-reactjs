import { useEffect, useState } from "react";
import CardSong from "../../components/card-song/index";
import { useSelector } from "react-redux";
import CurrentPlaylist from "../../services/current-playlist";
import { Heading, Center, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UnfollowPlaylist from "../../services/unfollow-playlist";

const ListPlaylist = () => {
  const [lists, setLists] = useState([]);
  const tokenValue = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    CurrentPlaylist(tokenValue).then((res) => setLists(res.data.items));
  }, [lists]);

  const deleteList = async (id) => {
    await UnfollowPlaylist(tokenValue, id);
  };

  console.log(lists);
  const renderPlaylist = () => {
    return lists.map((item) => (
      <CardSong
        image={item.images[0]?.url}
        album={item.name}
        artist={item.owner.display_name}
        title={item.description}
        key={item.id}
        selectedHandle={() => deleteList(item.id)}
        buttonName="delete"
      />
    ));
  };

  return (
    <div>
      <Flex mt={5}>
        <Center w={1732} flexDirection="column">
          <Heading className="header-list">Playlist</Heading>
          <Button colorScheme="red" variant="solid">
            <Link to="/create-playlist">Create Playlists</Link>
          </Button>
        </Center>
      </Flex>
      {renderPlaylist()}
    </div>
  );
};

export default ListPlaylist;

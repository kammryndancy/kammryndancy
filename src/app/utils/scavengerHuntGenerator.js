// Database of nature items by category and season
const natureDatabase = {
  animals: {
    any: [
      { name: 'Squirrel', image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Bird', image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=300' },
      { name: 'Rabbit', image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Deer', image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=300' },
      { name: 'Fox', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=300' },
      { name: 'Raccoon', image: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&q=80&w=300' },
      { name: 'Chipmunk', image: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?auto=format&fit=crop&q=80&w=300' },
      { name: 'Mouse', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=300' },
      { name: 'Frog', image: 'https://images.unsplash.com/photo-1551189014-fe516aed0e9e?auto=format&fit=crop&q=80&w=300' },
      { name: 'Turtle', image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=300' }
    ],
    spring: [
      { name: 'Robin', image: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Rabbit', image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Deer with fawn', image: 'https://images.unsplash.com/photo-1545742656-11fd1a9e0fda?auto=format&fit=crop&q=80&w=300' },
      { name: 'Tadpole', image: 'https://images.unsplash.com/photo-1560982003-e847c7ef5ceb?auto=format&fit=crop&q=80&w=300' },
      { name: 'Duckling', image: 'https://images.unsplash.com/photo-1562315949-4e0d7ed051ad?auto=format&fit=crop&q=80&w=300' },
      { name: 'Baby squirrel', image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Woodpecker', image: 'https://images.unsplash.com/photo-1621846986293-dd0987a4e0db?auto=format&fit=crop&q=80&w=300' }
    ],
    summer: [
      { name: 'Butterfly', image: 'https://images.unsplash.com/photo-1559535332-db9971090158?auto=format&fit=crop&q=80&w=300' },
      { name: 'Hummingbird', image: 'https://images.unsplash.com/photo-1590167409974-4dbaa9a9e189?auto=format&fit=crop&q=80&w=300' },
      { name: 'Toad', image: 'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Snake', image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Lizard', image: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?auto=format&fit=crop&q=80&w=300' },
      { name: 'Dragonfly', image: 'https://images.unsplash.com/photo-1591105575839-1fb30d5ce4a5?auto=format&fit=crop&q=80&w=300' },
      { name: 'Fish', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=300' }
    ],
    fall: [
      { name: 'Migrating birds', image: 'https://images.unsplash.com/photo-1572495673508-31b3f2c95c3a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Squirrel gathering nuts', image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Deer', image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=300' },
      { name: 'Wild turkey', image: 'https://images.unsplash.com/photo-1574445309200-8c8a7a1b8f4e?auto=format&fit=crop&q=80&w=300' },
      { name: 'Hawk', image: 'https://images.unsplash.com/photo-1534695215921-52f8a19e7909?auto=format&fit=crop&q=80&w=300' },
      { name: 'Owl', image: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&q=80&w=300' }
    ],
    winter: [
      { name: 'Cardinal', image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&q=80&w=300' },
      { name: 'Blue jay', image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&q=80&w=300' },
      { name: 'Deer tracks', image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=300' },
      { name: 'Rabbit tracks', image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=300' },
      { name: 'Squirrel nest', image: 'https://images.unsplash.com/photo-1516046148261-6169ce3d0b04?auto=format&fit=crop&q=80&w=300' },
      { name: 'Woodpecker', image: 'https://images.unsplash.com/photo-1621846986293-dd0987a4e0db?auto=format&fit=crop&q=80&w=300' },
      { name: 'Crow', image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  plants: {
    any: [
      { name: 'Tree', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=300' },
      { name: 'Flower', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=300' },
      { name: 'Grass', image: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c?auto=format&fit=crop&q=80&w=300' },
      { name: 'Moss', image: 'https://images.unsplash.com/photo-1564958911469-30451510e8d3?auto=format&fit=crop&q=80&w=300' },
      { name: 'Fern', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=300' },
      { name: 'Mushroom', image: 'https://images.unsplash.com/photo-1542472977-8a3f6abe1d0a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Pine cone', image: 'https://images.unsplash.com/photo-1510189511704-57f96164f531?auto=format&fit=crop&q=80&w=300' },
      { name: 'Acorn', image: 'https://images.unsplash.com/photo-1508105859382-b487af436eff?auto=format&fit=crop&q=80&w=300' },
      { name: 'Leaf', image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=300' },
      { name: 'Berry', image: 'https://images.unsplash.com/photo-1596591868231-05e882e38a8f?auto=format&fit=crop&q=80&w=300' }
    ],
    spring: [
      { name: 'Dandelion', image: 'https://images.unsplash.com/photo-1588167056547-c183313da47c?auto=format&fit=crop&q=80&w=300' },
      { name: 'Tulip', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&q=80&w=300' },
      { name: 'Daffodil', image: 'https://images.unsplash.com/photo-1583294506578-38e3fb79b6de?auto=format&fit=crop&q=80&w=300' },
      { name: 'Cherry blossom', image: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&q=80&w=300' },
      { name: 'New leaf buds', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=300' },
      { name: 'Fiddlehead fern', image: 'https://images.unsplash.com/photo-1558694440-03ade9215d7b?auto=format&fit=crop&q=80&w=300' },
      { name: 'Crocus', image: 'https://images.unsplash.com/photo-1551893478-e8e10034d6d5?auto=format&fit=crop&q=80&w=300' }
    ],
    summer: [
      { name: 'Sunflower', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=300' },
      { name: 'Rose', image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=300' },
      { name: 'Daisy', image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Clover', image: 'https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?auto=format&fit=crop&q=80&w=300' },
      { name: 'Blackberry', image: 'https://images.unsplash.com/photo-1567870335471-1129836babcf?auto=format&fit=crop&q=80&w=300' },
      { name: 'Raspberry', image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=300' },
      { name: 'Oak leaf', image: 'https://images.unsplash.com/photo-1508885368104-a4871600f1e0?auto=format&fit=crop&q=80&w=300' },
      { name: 'Maple leaf', image: 'https://images.unsplash.com/photo-1541802645635-11f2286a7482?auto=format&fit=crop&q=80&w=300' }
    ],
    fall: [
      { name: 'Red leaf', image: 'https://images.unsplash.com/photo-1507897998764-42fd32ed790d?auto=format&fit=crop&q=80&w=300' },
      { name: 'Orange leaf', image: 'https://images.unsplash.com/photo-1510356900252-dfa6ba1d5a8c?auto=format&fit=crop&q=80&w=300' },
      { name: 'Yellow leaf', image: 'https://images.unsplash.com/photo-1507897998764-42fd32ed790d?auto=format&fit=crop&q=80&w=300' },
      { name: 'Acorn', image: 'https://images.unsplash.com/photo-1508105859382-b487af436eff?auto=format&fit=crop&q=80&w=300' },
      { name: 'Pine cone', image: 'https://images.unsplash.com/photo-1510189511704-57f96164f531?auto=format&fit=crop&q=80&w=300' },
      { name: 'Apple', image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Pumpkin', image: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Gourd', image: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?auto=format&fit=crop&q=80&w=300' }
    ],
    winter: [
      { name: 'Evergreen tree', image: 'https://images.unsplash.com/photo-1482932542078-015eaaf3c2e2?auto=format&fit=crop&q=80&w=300' },
      { name: 'Holly', image: 'https://images.unsplash.com/photo-1607490040458-3ebf142d2c1a?auto=format&fit=crop&q=80&w=300' },
      { name: 'Pine needle', image: 'https://images.unsplash.com/photo-1482932542078-015eaaf3c2e2?auto=format&fit=crop&q=80&w=300' },
      { name: 'Mistletoe', image: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&q=80&w=300' },
      { name: 'Dried seed pod', image: 'https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?auto=format&fit=crop&q=80&w=300' },
      { name: 'Pinecone', image: 'https://images.unsplash.com/photo-1510189511704-57f96164f531?auto=format&fit=crop&q=80&w=300' },
      { name: 'Bare tree', image: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  insects: {
    any: [
      { name: 'Ant', image: 'https://images.unsplash.com/photo-1566407528571-63a385d3e0f4?auto=format&fit=crop&q=80&w=300' },
      { name: 'Spider', image: 'https://images.unsplash.com/photo-1557816274-44aae298f6d1?auto=format&fit=crop&q=80&w=300' },
      { name: 'Beetle', image: 'https://images.unsplash.com/photo-1591108106055-b0b749dcc34f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Worm', image: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Centipede', image: 'https://images.unsplash.com/photo-1591108106055-b0b749dcc34f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Millipede', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Pill bug', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Cricket', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300' }
    ],
    spring: [
      { name: 'Ladybug', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Bee', image: 'https://images.unsplash.com/photo-1560806175-c6d80e8fa67d?auto=format&fit=crop&q=80&w=300' },
      { name: 'Earthworm', image: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&q=80&w=300' },
      { name: 'Caterpillar', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Aphid', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Ant', image: 'https://images.unsplash.com/photo-1566407528571-63a385d3e0f4?auto=format&fit=crop&q=80&w=300' },
      { name: 'Beetle', image: 'https://images.unsplash.com/photo-1597390520598-8e33c0fe1c08?auto=format&fit=crop&q=80&w=300' }
    ],
    summer: [
      { name: 'Butterfly', image: 'https://images.unsplash.com/photo-1559535332-db9971090158?auto=format&fit=crop&q=80&w=300' },
      { name: 'Dragonfly', image: 'https://images.unsplash.com/photo-1591105575839-1fb30d5ce4a5?auto=format&fit=crop&q=80&w=300' },
      { name: 'Grasshopper', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300' },
      { name: 'Cicada', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300' },
      { name: 'Firefly', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300' },
      { name: 'Bee', image: 'https://images.unsplash.com/photo-1560806175-c6d80e8fa67d?auto=format&fit=crop&q=80&w=300' },
      { name: 'Wasp', image: 'https://images.unsplash.com/photo-1560806175-c6d80e8fa67d?auto=format&fit=crop&q=80&w=300' },
      { name: 'Mosquito', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300' }
    ],
    fall: [
      { name: 'Spider', image: 'https://images.unsplash.com/photo-1557816274-44aae298f6d1?auto=format&fit=crop&q=80&w=300' },
      { name: 'Cricket', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300' },
      { name: 'Woolly bear caterpillar', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Ladybug', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Stink bug', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300' },
      { name: 'Praying mantis', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300' }
    ],
    winter: [
      { name: 'Spider web', image: 'https://images.unsplash.com/photo-1557816274-44aae298f6d1?auto=format&fit=crop&q=80&w=300' },
      { name: 'Hibernating ladybug', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Insect cocoon', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Insect eggs', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300' },
      { name: 'Dormant beehive', image: 'https://images.unsplash.com/photo-1560806175-c6d80e8fa67d?auto=format&fit=crop&q=80&w=300' }
    ]
  }
};

// Function to randomly select items based on criteria
export const generateScavengerHuntItems = ({ count, season, includeAnimals, includePlants, includeInsects }) => {
  // Create a pool of available items based on selected criteria
  let itemPool = [];

  if (includeAnimals) {
    itemPool = [...itemPool, ...natureDatabase.animals[season].map(item => ({
      name: item.name,
      image: item.image,
      category: 'animal'
    }))];
    if (season !== 'any') {
      itemPool = [...itemPool, ...natureDatabase.animals.any.map(item => ({
        name: item.name,
        image: item.image,
        category: 'animal'
      }))];
    }
  }

  if (includePlants) {
    itemPool = [...itemPool, ...natureDatabase.plants[season].map(item => ({
      name: item.name,
      image: item.image,
      category: 'plant'
    }))];
    if (season !== 'any') {
      itemPool = [...itemPool, ...natureDatabase.plants.any.map(item => ({
        name: item.name,
        image: item.image,
        category: 'plant'
      }))];
    }
  }

  if (includeInsects) {
    itemPool = [...itemPool, ...natureDatabase.insects[season].map(item => ({
      name: item.name,
      image: item.image,
      category: 'insect'
    }))];
    if (season !== 'any') {
      itemPool = [...itemPool, ...natureDatabase.insects.any.map(item => ({
        name: item.name,
        image: item.image,
        category: 'insect'
      }))];
    }
  }
  
  // Remove duplicates (in case items appear in both season-specific and 'any' arrays)
  const uniqueItemPool = Array.from(new Map(itemPool.map(item => [item.name, item])).values());
  
  // Shuffle the array
  const shuffledItems = [...uniqueItemPool].sort(() => Math.random() - 0.5);
  
  // Take the requested number of items, or all if there aren't enough
  return shuffledItems.slice(0, Math.min(count, shuffledItems.length));
};
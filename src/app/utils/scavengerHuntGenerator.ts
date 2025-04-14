interface NatureItem {
  name: string;
  image: string;
  description: string;
}

export interface ScavengerHuntItem {
  id: number;
  name: string;
  image: string;
  description: string;
  category: 'animal' | 'plant' | 'insect';
  completed: boolean;
}

interface NatureDatabase {
  animals: {
    any: NatureItem[];
    spring: NatureItem[];
    summer: NatureItem[];
    fall: NatureItem[];
    winter: NatureItem[];
  };
  plants: {
    any: NatureItem[];
    spring: NatureItem[];
    summer: NatureItem[];
    fall: NatureItem[];
    winter: NatureItem[];
  };
  insects: {
    any: NatureItem[];
    spring: NatureItem[];
    summer: NatureItem[];
    fall: NatureItem[];
    winter: NatureItem[];
  };
}

export interface ScavengerHuntGeneratorConfig {
  count: number;
  season: string;
  includeAnimals: boolean;
  includePlants: boolean;
  includeInsects: boolean;
}

// Database of nature items by category and season
const natureDatabase: NatureDatabase = {
  animals: {
    any: [
      { name: 'Squirrel', image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&q=80&w=300', description: 'A small, furry rodent with a bushy tail.' },
      { name: 'Bird', image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=300', description: 'A feathered, egg-laying, warm-blooded vertebrate.' },
      { name: 'Rabbit', image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&q=80&w=300', description: 'A small, furry mammal with long ears and hind legs.' },
      { name: 'Deer', image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=300', description: 'A large, hoofed, herbivorous mammal.' },
      { name: 'Fox', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=300', description: 'A small, carnivorous mammal with a bushy tail.' },
      { name: 'Raccoon', image: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&q=80&w=300', description: 'A medium-sized, carnivorous mammal with a distinctive black and white mask.' },
      { name: 'Chipmunk', image: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?auto=format&fit=crop&q=80&w=300', description: 'A small, striped rodent that burrows in the ground.' },
      { name: 'Mouse', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=300', description: 'A small, rodent mammal that is commonly found in homes.' },
      { name: 'Frog', image: 'https://images.unsplash.com/photo-1551189014-fe516aed0e9e?auto=format&fit=crop&q=80&w=300', description: 'A small, amphibious animal with a smooth, moist skin.' },
      { name: 'Turtle', image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=300', description: 'A slow-moving, reptilian animal with a shell.' }
    ],
    spring: [
      { name: 'Robin', image: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&q=80&w=300', description: 'A small, migratory bird with a distinctive red breast.' },
      { name: 'Rabbit', image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&q=80&w=300', description: 'A small, furry mammal with long ears and hind legs.' },
      { name: 'Deer with fawn', image: 'https://images.unsplash.com/photo-1545742656-11fd1a9e0fda?auto=format&fit=crop&q=80&w=300', description: 'A large, hoofed, herbivorous mammal with a young fawn.' },
      { name: 'Tadpole', image: 'https://images.unsplash.com/photo-1560982003-e847c7ef5ceb?auto=format&fit=crop&q=80&w=300', description: 'The larval stage of a frog or toad.' },
      { name: 'Duckling', image: 'https://images.unsplash.com/photo-1562315949-4e0d7ed051ad?auto=format&fit=crop&q=80&w=300', description: 'A young duck, typically covered in down feathers.' },
      { name: 'Baby squirrel', image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&q=80&w=300', description: 'A small, furry rodent with a bushy tail, in its early stages of development.' },
      { name: 'Woodpecker', image: 'https://images.unsplash.com/photo-1621846986293-dd0987a4e0db?auto=format&fit=crop&q=80&w=300', description: 'A medium-sized, wood-boring bird with a distinctive pecking call.' }
    ],
    summer: [
      { name: 'Butterfly', image: 'https://images.unsplash.com/photo-1559535332-db9971090158?auto=format&fit=crop&q=80&w=300', description: 'A colorful, flying insect with large wings.' },
      { name: 'Hummingbird', image: 'https://images.unsplash.com/photo-1590167409974-4dbaa9a9e189?auto=format&fit=crop&q=80&w=300', description: 'A small, iridescent bird that feeds on nectar.' },
      { name: 'Toad', image: 'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?auto=format&fit=crop&q=80&w=300', description: 'A small, amphibious animal with a dry, bumpy skin.' },
      { name: 'Snake', image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&q=80&w=300', description: 'A long, slender, carnivorous reptile.' },
      { name: 'Lizard', image: 'https://images.unsplash.com/photo-1504450874802-0b844b597180?auto=format&fit=crop&q=80&w=300', description: 'A small to medium-sized, reptilian animal with a scaly skin.' },
      { name: 'Dragonfly', image: 'https://images.unsplash.com/photo-1591105575839-1fb30d5ce4a5?auto=format&fit=crop&q=80&w=300', description: 'A large, flying insect with a long, slender body.' },
      { name: 'Fish', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=300', description: 'A cold-blooded, aquatic animal with gills.' }
    ],
    fall: [
      { name: 'Migrating birds', image: 'https://images.unsplash.com/photo-1572495673508-31b3f2c95c3a?auto=format&fit=crop&q=80&w=300', description: 'Birds that travel to warmer climates during the winter months.' },
      { name: 'Squirrel gathering nuts', image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&q=80&w=300', description: 'A small, furry rodent collecting nuts for the winter.' },
      { name: 'Deer', image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=300', description: 'A large, hoofed, herbivorous mammal.' },
      { name: 'Wild turkey', image: 'https://images.unsplash.com/photo-1574445309200-8c8a7a1b8f4e?auto=format&fit=crop&q=80&w=300', description: 'A large, ground-dwelling bird with a distinctive gobble.' },
      { name: 'Hawk', image: 'https://images.unsplash.com/photo-1534695215921-52f8a19e7909?auto=format&fit=crop&q=80&w=300', description: 'A medium-sized, carnivorous bird of prey.' },
      { name: 'Owl', image: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&q=80&w=300', description: 'A nocturnal, carnivorous bird of prey with large eyes.' }
    ],
    winter: [
      { name: 'Cardinal', image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&q=80&w=300', description: 'A small, songbird with bright red plumage.' },
      { name: 'Blue jay', image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&q=80&w=300', description: 'A medium-sized, brightly colored bird with a distinctive crest.' },
      { name: 'Deer tracks', image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=300', description: 'The tracks left behind by a deer in the snow.' },
      { name: 'Rabbit tracks', image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=300', description: 'The tracks left behind by a rabbit in the snow.' },
      { name: 'Squirrel nest', image: 'https://images.unsplash.com/photo-1516046148261-6169ce3d0b04?auto=format&fit=crop&q=80&w=300', description: 'A nest built by a squirrel, typically in a tree.' },
      { name: 'Woodpecker', image: 'https://images.unsplash.com/photo-1621846986293-dd0987a4e0db?auto=format&fit=crop&q=80&w=300', description: 'A medium-sized, wood-boring bird with a distinctive pecking call.' },
      { name: 'Crow', image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=300', description: 'A large, black bird with a distinctive call.' }
    ]
  },
  plants: {
    any: [
      { name: 'Tree', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=300', description: 'A perennial plant with a single stem, typically growing from the ground up.' },
      { name: 'Flower', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=300', description: 'The reproductive structure of a plant, typically colorful and fragrant.' },
      { name: 'Grass', image: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c?auto=format&fit=crop&q=80&w=300', description: 'A type of monocotyledonous green plant with narrow leaves.' },
      { name: 'Moss', image: 'https://images.unsplash.com/photo-1564958911469-30451510e8d3?auto=format&fit=crop&q=80&w=300', description: 'A small, non-vascular plant that grows in dense green clumps.' },
      { name: 'Fern', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=300', description: 'A type of vascular plant with leafy fronds.' },
      { name: 'Mushroom', image: 'https://images.unsplash.com/photo-1542472977-8a3f6abe1d0a?auto=format&fit=crop&q=80&w=300', description: 'The fruiting body of a fungus, typically growing underground.' },
      { name: 'Pine cone', image: 'https://images.unsplash.com/photo-1510189511704-57f96164f531?auto=format&fit=crop&q=80&w=300', description: 'The reproductive structure of a coniferous tree.' },
      { name: 'Acorn', image: 'https://images.unsplash.com/photo-1508105859382-b487af436eff?auto=format&fit=crop&q=80&w=300', description: 'The nut of an oak tree, typically brown and rounded.' },
      { name: 'Leaf', image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=300', description: 'A flat, green structure that grows on a plant stem.' },
      { name: 'Berry', image: 'https://images.unsplash.com/photo-1596591868231-05e882e38a8f?auto=format&fit=crop&q=80&w=300', description: 'A small, fleshy fruit that grows on a plant.' }
    ],
    spring: [
      { name: 'Dandelion', image: 'https://images.unsplash.com/photo-1588167056547-c183313da47c?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with a yellow head and feathery seeds.' },
      { name: 'Tulip', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with a cup-shaped bloom.' },
      { name: 'Daffodil', image: 'https://images.unsplash.com/photo-1583294506578-38e3fb79b6de?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with a bright yellow trumpet-shaped bloom.' },
      { name: 'Cherry blossom', image: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&q=80&w=300', description: 'The flower of a cherry tree, typically pink or white.' },
      { name: 'New leaf buds', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=300', description: 'The early stages of a leaf growing on a plant.' },
      { name: 'Fiddlehead fern', image: 'https://images.unsplash.com/photo-1558694440-03ade9215d7b?auto=format&fit=crop&q=80&w=300', description: 'The curled-up, young fronds of a fern plant.' },
      { name: 'Crocus', image: 'https://images.unsplash.com/photo-1551893478-e8e10034d6d5?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with a cup-shaped bloom.' }
    ],
    summer: [
      { name: 'Sunflower', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with a large, bright yellow bloom.' },
      { name: 'Rose', image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with a fragrant, showy bloom.' },
      { name: 'Daisy', image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with a white or yellow bloom.' },
      { name: 'Clover', image: 'https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with a pink or white bloom.' },
      { name: 'Blackberry', image: 'https://images.unsplash.com/photo-1567870335471-1129836babcf?auto=format&fit=crop&q=80&w=300', description: 'A type of fruit that grows on a thorny bush.' },
      { name: 'Raspberry', image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=300', description: 'A type of fruit that grows on a bush.' },
      { name: 'Oak leaf', image: 'https://images.unsplash.com/photo-1508885368104-a4871600f1e0?auto=format&fit=crop&q=80&w=300', description: 'The leaf of an oak tree, typically lobed or deeply toothed.' },
      { name: 'Maple leaf', image: 'https://images.unsplash.com/photo-1541802645635-11f2286a7482?auto=format&fit=crop&q=80&w=300', description: 'The leaf of a maple tree, typically palmate or deeply toothed.' }
    ],
    fall: [
      { name: 'Red leaf', image: 'https://images.unsplash.com/photo-1507897998764-42fd32ed790d?auto=format&fit=crop&q=80&w=300', description: 'A leaf that has turned red during the fall season.' },
      { name: 'Orange leaf', image: 'https://images.unsplash.com/photo-1510356900252-dfa6ba1d5a8c?auto=format&fit=crop&q=80&w=300', description: 'A leaf that has turned orange during the fall season.' },
      { name: 'Yellow leaf', image: 'https://images.unsplash.com/photo-1507897998764-42fd32ed790d?auto=format&fit=crop&q=80&w=300', description: 'A leaf that has turned yellow during the fall season.' },
      { name: 'Acorn', image: 'https://images.unsplash.com/photo-1508105859382-b487af436eff?auto=format&fit=crop&q=80&w=300', description: 'The nut of an oak tree, typically brown and rounded.' },
      { name: 'Pine cone', image: 'https://images.unsplash.com/photo-1510189511704-57f96164f531?auto=format&fit=crop&q=80&w=300', description: 'The reproductive structure of a coniferous tree.' },
      { name: 'Apple', image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&q=80&w=300', description: 'A type of fruit that grows on a tree.' },
      { name: 'Pumpkin', image: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?auto=format&fit=crop&q=80&w=300', description: 'A type of fruit that grows on a vine.' },
      { name: 'Gourd', image: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?auto=format&fit=crop&q=80&w=300', description: 'A type of fruit that grows on a vine.' }
    ],
    winter: [
      { name: 'Evergreen tree', image: 'https://images.unsplash.com/photo-1482932542078-015eaaf3c2e2?auto=format&fit=crop&q=80&w=300', description: 'A type of tree that keeps its leaves year-round.' },
      { name: 'Holly', image: 'https://images.unsplash.com/photo-1607490040458-3ebf142d2c1a?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant with bright red berries.' },
      { name: 'Pine needle', image: 'https://images.unsplash.com/photo-1482932542078-015eaaf3c2e2?auto=format&fit=crop&q=80&w=300', description: 'A long, thin leaf that grows on a coniferous tree.' },
      { name: 'Mistletoe', image: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&q=80&w=300', description: 'A type of flowering plant that grows on other plants.' },
      { name: 'Dried seed pod', image: 'https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?auto=format&fit=crop&q=80&w=300', description: 'A seed pod that has dried and opened.' },
      { name: 'Pinecone', image: 'https://images.unsplash.com/photo-1510189511704-57f96164f531?auto=format&fit=crop&q=80&w=300', description: 'The reproductive structure of a coniferous tree.' },
      { name: 'Bare tree', image: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?auto=format&fit=crop&q=80&w=300', description: 'A tree that has lost its leaves.' }
    ]
  },
  insects: {
    any: [
      { name: 'Ant', image: 'https://images.unsplash.com/photo-1566407528571-63a385d3e0f4?auto=format&fit=crop&q=80&w=300', description: 'A small, social insect that lives in colonies.' },
      { name: 'Spider', image: 'https://images.unsplash.com/photo-1557816274-44aae298f6d1?auto=format&fit=crop&q=80&w=300', description: 'A small, eight-legged arachnid that spins webs.' },
      { name: 'Beetle', image: 'https://images.unsplash.com/photo-1591108106055-b0b749dcc34f?auto=format&fit=crop&q=80&w=300', description: 'A small, hard-shelled insect with a rounded body.' },
      { name: 'Worm', image: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&q=80&w=300', description: 'A long, slender invertebrate animal.' },
      { name: 'Centipede', image: 'https://images.unsplash.com/photo-1591108106055-b0b749dcc34f?auto=format&fit=crop&q=80&w=300', description: 'A long, flat arthropod with many legs.' },
      { name: 'Millipede', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'A long, flat arthropod with many legs.' },
      { name: 'Pill bug', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'A small, armored crustacean that rolls into a ball.' },
      { name: 'Cricket', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300', description: 'A small, jumping insect with a distinctive chirping call.' }
    ],
    spring: [
      { name: 'Ladybug', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'A small, beetles with a red and black body.' },
      { name: 'Bee', image: 'https://images.unsplash.com/photo-1560806175-c6d80e8fa67d?auto=format&fit=crop&q=80&w=300', description: 'A small, flying insect that collects nectar.' },
      { name: 'Earthworm', image: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&q=80&w=300', description: 'A long, slender invertebrate animal that burrows in soil.' },
      { name: 'Caterpillar', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'The larval stage of a butterfly or moth.' },
      { name: 'Aphid', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'A small, soft-bodied insect that feeds on plant sap.' },
      { name: 'Ant', image: 'https://images.unsplash.com/photo-1566407528571-63a385d3e0f4?auto=format&fit=crop&q=80&w=300', description: 'A small, social insect that lives in colonies.' },
      { name: 'Beetle', image: 'https://images.unsplash.com/photo-1597390520598-8e33c0fe1c08?auto=format&fit=crop&q=80&w=300', description: 'A small, hard-shelled insect with a rounded body.' }
    ],
    summer: [
      { name: 'Butterfly', image: 'https://images.unsplash.com/photo-1559535332-db9971090158?auto=format&fit=crop&q=80&w=300', description: 'A colorful, flying insect with large wings.' },
      { name: 'Dragonfly', image: 'https://images.unsplash.com/photo-1591105575839-1fb30d5ce4a5?auto=format&fit=crop&q=80&w=300', description: 'A large, flying insect with a long, slender body.' },
      { name: 'Grasshopper', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300', description: 'A large, jumping insect with a distinctive chirping call.' },
      { name: 'Cicada', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300', description: 'A large, flying insect with a distinctive buzzing call.' },
      { name: 'Firefly', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300', description: 'A small, flying insect that glows in the dark.' },
      { name: 'Bee', image: 'https://images.unsplash.com/photo-1560806175-c6d80e8fa67d?auto=format&fit=crop&q=80&w=300', description: 'A small, flying insect that collects nectar.' },
      { name: 'Wasp', image: 'https://images.unsplash.com/photo-1560806175-c6d80e8fa67d?auto=format&fit=crop&q=80&w=300', description: 'A small, flying insect that is similar to a bee.' },
      { name: 'Mosquito', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300', description: 'A small, flying insect that feeds on blood.' }
    ],
    fall: [
      { name: 'Spider', image: 'https://images.unsplash.com/photo-1557816274-44aae298f6d1?auto=format&fit=crop&q=80&w=300', description: 'A small, eight-legged arachnid that spins webs.' },
      { name: 'Cricket', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300', description: 'A small, jumping insect with a distinctive chirping call.' },
      { name: 'Woolly bear caterpillar', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'The larval stage of a moth, typically covered in hair.' },
      { name: 'Ladybug', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'A small, beetles with a red and black body.' },
      { name: 'Stink bug', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300', description: 'A small, shield-shaped insect with a distinctive odor.' },
      { name: 'Praying mantis', image: 'https://images.unsplash.com/photo-1584551882459-38ae4d46b679?auto=format&fit=crop&q=80&w=300', description: 'A large, predatory insect with a distinctive prayer-like stance.' }
    ],
    winter: [
      { name: 'Spider web', image: 'https://images.unsplash.com/photo-1557816274-44aae298f6d1?auto=format&fit=crop&q=80&w=300', description: 'A web spun by a spider, typically used for catching prey.' },
      { name: 'Hibernating ladybug', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'A ladybug that is in a state of dormancy during the winter months.' },
      { name: 'Insect cocoon', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'A protective casing that surrounds an insect during its transformation into a pupa.' },
      { name: 'Insect eggs', image: 'https://images.unsplash.com/photo-1567844536664-5741cb5a5f82?auto=format&fit=crop&q=80&w=300', description: 'The eggs of an insect, typically laid in a protected location.' },
      { name: 'Dormant beehive', image: 'https://images.unsplash.com/photo-1560806175-c6d80e8fa67d?auto=format&fit=crop&q=80&w=300', description: 'A beehive that is in a state of dormancy during the winter months.' }
    ]
  }
};

// Function to randomly select items based on criteria
export const generateScavengerHuntItems = ({ count, season, includeAnimals, includePlants, includeInsects }: ScavengerHuntGeneratorConfig): ScavengerHuntItem[] => {
  // Create a pool of available items based on selected criteria
  let itemPool: ScavengerHuntItem[] = [];

  // Helper function to safely get items from a season
  const getSeasonItems = (category: keyof NatureDatabase, season: string) => {
    if (season === 'any') return natureDatabase[category][season];
    return natureDatabase[category][season as keyof typeof natureDatabase.animals] || [];
  };

  if (includeAnimals) {
    itemPool = [...itemPool, ...getSeasonItems('animals', season).map((item, index) => ({
      id: index + 1,
      name: item.name,
      image: item.image,
      description: item.description,
      category: 'animal' as const,
      completed: false
    }))];
    if (season !== 'any') {
      itemPool = [...itemPool, ...natureDatabase.animals.any.map((item, index) => ({
        id: index + 1,
        name: item.name,
        image: item.image,
        description: item.description,
        category: 'animal' as const,
        completed: false
      }))];
    }
  }

  if (includePlants) {
    itemPool = [...itemPool, ...getSeasonItems('plants', season).map((item, index) => ({
      id: index + 1,
      name: item.name,
      image: item.image,
      description: item.description,
      category: 'plant' as const,
      completed: false
    }))];
    if (season !== 'any') {
      itemPool = [...itemPool, ...natureDatabase.plants.any.map((item, index) => ({
        id: index + 1,
        name: item.name,
        image: item.image,
        description: item.description,
        category: 'plant' as const,
        completed: false
      }))];
    }
  }

  if (includeInsects) {
    itemPool = [...itemPool, ...getSeasonItems('insects', season).map((item, index) => ({
      id: index + 1,
      name: item.name,
      image: item.image,
      description: item.description,
      category: 'insect' as const,
      completed: false
    }))];
    if (season !== 'any') {
      itemPool = [...itemPool, ...natureDatabase.insects.any.map((item, index) => ({
        id: index + 1,
        name: item.name,
        image: item.image,
        description: item.description,
        category: 'insect' as const,
        completed: false
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
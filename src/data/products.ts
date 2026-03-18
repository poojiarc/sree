import microPulveriser from "@/assets/products/micro-pulveriser.jpg";
import superFinePulveriser from "@/assets/products/super-fine-pulveriser.jpg";
import airjetMill from "@/assets/products/airjet-mill.jpg";
import multimill from "@/assets/products/multimill.jpg";
import pinMill from "@/assets/products/pin-mill.jpg";
import turboMill from "@/assets/products/turbo-mill.jpg";
import flexiMill from "@/assets/products/flexi-mill.jpg";
import coneMill from "@/assets/products/cone-mill.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  specs?: { model: string; capacity: string; motor: string }[];
  finenessRange?: string;
  category: "mills" | "pulverisers" | "process";
}

export const products: Product[] = [
  {
    id: "micro-pulveriser",
    name: "Micro Pulveriser",
    slug: "micro-pulveriser",
    shortDescription: "Precise grinding and homogenization of a wide range of materials.",
    description: "Experience exceptional pulverization performance with our Micro Pulveriser, delivering precise grinding and homogenization of a wide range of materials. The MICRO PULVERIZER features both front and top-opening designs, ensuring effortless cleaning and maintenance. We recognize the importance of efficient operations, and these designs provide easy access, saving both time and effort. Available with an optional Screw Feeder for smooth flow and Water-Jacketed systems for temperature control.",
    image: microPulveriser,
    specs: [
      { model: "SSMP 52 (LAB)", capacity: "20 Kg/Hr", motor: "2 HP" },
      { model: "SMP 83", capacity: "100 Kg/Hr", motor: "3 HP" },
      { model: "SMP 126", capacity: "250 Kg/Hr", motor: "7.5 HP" },
      { model: "SMP 129", capacity: "400 Kg/Hr", motor: "10 HP" },
    ],
    finenessRange: "40 - 150 Microns or finer",
    category: "pulverisers",
  },
  {
    id: "super-fine-pulveriser",
    name: "Super Fine Pulveriser",
    slug: "super-fine-pulveriser",
    shortDescription: "Ultra-fine particle size reduction for challenging materials.",
    description: 'Enhance your operations with our Super Fine Pulverizer, designed to achieve ultra-fine particle size reduction for even the most challenging materials. The "SREENEX" Super Fine Pulverizer (without screen) utilizes internal material circulation to deliver exceptionally fine grinds at high capacities. With the adjustable inverter drive, operators can easily modify the particle size without the need to shut down the mill, depending on the material and required fineness. Crafted to the highest precision standards, our pulveriser ensures consistent, high-efficiency performance at all times.',
    image: superFinePulveriser,
    specs: [
      { model: "SSFP 300", capacity: "11 Kg/Hr", motor: "50-150 HP" },
      { model: "SSFP 400", capacity: "16 Kg/Hr", motor: "75-250 HP" },
    ],
    finenessRange: "25 - 75 Microns or finer",
    category: "pulverisers",
  },
  {
    id: "airjet-mill",
    name: "Airjet Mill",
    slug: "airjet-mill",
    shortDescription: "High-speed compressed air jets for unmatched precision.",
    description: 'Unlock the full potential of dry material size reduction with our AirJet Mill, utilizing high-speed compressed air jets for unmatched precision and consistency. "SREENEX" AirJet Mills are extensively used in the production of pharmaceuticals, organic and inorganic chemicals, pigments, food colors, synthetic dyes, minerals, pesticides, and other heat-sensitive materials. With no moving parts, these mills eliminate contamination risks from external grinding media. The grinding process generates no additional heat, making it ideal for processing heat-sensitive and delicate materials.',
    image: airjetMill,
    specs: [
      { model: "SAJM 50", capacity: "0.05 - 1 Kg/Hr", motor: "30 CFM" },
      { model: "SAJM 100", capacity: "1 - 5 Kg/Hr", motor: "55 CFM" },
      { model: "SAJM 200", capacity: "5 - 50 Kg/Hr", motor: "11 CFM" },
      { model: "SAJM 300", capacity: "10 - 200 Kg/Hr", motor: "250 CFM" },
      { model: "SAJM 400", capacity: "20 - 350 Kg/Hr", motor: "400 CFM" },
    ],
    finenessRange: "Below 10 Microns or finer",
    category: "mills",
  },
  {
    id: "multimill",
    name: "Multi Mill",
    slug: "multimill",
    shortDescription: "Highly effective for processing chemicals, pharmaceuticals, and more.",
    description: "The SREENEX Multi Mill is highly effective for processing a wide range of materials, including chemicals, pharmaceuticals, plastics, ceramics, powders, metals, pigments, and food products. Multimill operates on the principle of variable-force swing beaters with both knife and impact edges, rotating within a selected screen to achieve the desired size reduction. Featuring an exclusive 360° screen and the ability to easily adjust the number of blades, the SREENEX Multi Mill ensures that product particles are expelled once they reach the desired size, preventing overworking and ensuring consistent quality. Its high-efficiency design often processes materials at twice the rate of comparable size reduction equipment, delivering superior performance with similar horsepower. Available with an optional Screw Feeder for Streamline Feeding Process.",
    image: multimill,
    specs: [
      { model: "SMM 250", capacity: "50 - 250 Kg/Hr", motor: "3 HP" },
      { model: "SMM 300", capacity: "50 - 300 Kg/Hr", motor: "5 HP" },
      { model: "SMM 400", capacity: "100 - 500 Kg/Hr", motor: "7.5 HP" },
    ],
    finenessRange: "Variable based on screen selection",
    category: "mills",
  },
  {
    id: "pin-mill",
    name: "Pin Mill",
    slug: "pin-mill",
    shortDescription: "Versatile capabilities for precise particle sizes with exceptional efficiency.",
    description: 'Dominate dry material grinding with our Pin Mill, delivering versatile capabilities to achieve precise particle sizes with exceptional efficiency. The "SREENEX" Pin Mill utilizes internal material circulation to produce fine grinds at high capacities. With an inverter drive, operators can adjust particle size without the need to shut down the mill, ensuring seamless operation and consistent results. Centrifugal force propels the material to the periphery of the rotor plate, where it is subjected to multiple impacts by the pins. This process results in size reduction or high-intensity mixing as the material passes through the maze of pins. The rotor speed can be precisely controlled through to ensure optimal performance.',
    image: pinMill,
    specs: [
      { model: "SPM 350", capacity: "100 - 400 Kg/Hr", motor: "10 HP" },
      { model: "SPM 500", capacity: "100 - 400 Kg/Hr", motor: "25 HP" },
    ],
    finenessRange: "100 - 500 Microns or finer",
    category: "mills",
  },
  {
    id: "turbo-mill",
    name: "Turbo Mill",
    slug: "turbo-mill",
    shortDescription: "Rapid and efficient grinding with high-speed rotating blades.",
    description: 'Unleash rapid and efficient grinding with our Turbo Mill, leveraging high-speed rotating blades to deliver consistent particle size reduction. The "SREENEX" Turbo Mill utilizes internal material circulation to produce fine grinds at high capacities. Centrifugal force drives the material to the periphery of the turbo rotor, where it is acted upon by serrated fixed pads. In this zone, the material undergoes multiple impacts as it passes through the maze of the turbo rotor, resulting in effective size reduction and high intensity mixing. With an inverter drive, operators can adjust particle size without the need to shut down the mill, ensuring seamless operation and consistent results.',
    image: turboMill,
    specs: [
      { model: "SPM 350", capacity: "100 - 350 Kg/Hr", motor: "15 HP" },
      { model: "SPM 500", capacity: "500 - 1000 Kg/Hr", motor: "30 HP" },
    ],
    finenessRange: "50 - 100 Microns or finer",
    category: "mills",
  },
  {
    id: "flexi-mill",
    name: "Flexi Mill",
    slug: "flexi-mill",
    shortDescription: "Cutting-edge innovation designed for optimal performance.",
    description: 'The "SREENEX" Flexi Mill is a cutting-edge innovation designed for optimal performance. Its key advantage is minimizing product exposure to both the operator and the environment. The machine is designed for easy disassembly into seven parts, including the grinding chamber, throat, and rotor, allowing for thorough cleaning and preventing contamination. The Flexi Mill\'s versatility is further enhanced by its one-piece, reversible knife/impact rotor. The impact edge is ideal for pulverizing and emulsifying, while the knife edge is perfect for granulating, chopping, and sizing. Switching between knife and impact modes is simple and efficient, achieved by simply reversing the rotor.',
    image: flexiMill,
    specs: [
      { model: "SFM 38", capacity: "50 - 200 Kg/Hr", motor: "3 HP" },
      { model: "SFM 612", capacity: "100 - 500 Kg/Hr", motor: "7.5 HP" },
      { model: "SFM 912", capacity: "300 - 800 Kg/Hr", motor: "10 HP" },
    ],
    finenessRange: "150 - 500 Microns or finer",
    category: "mills",
  },
  {
    id: "cone-mill",
    name: "Cone Mill",
    slug: "cone-mill",
    shortDescription: "Efficient size reduction and homogenization for diverse applications.",
    description: "Achieve the perfect blend by ensuring efficient size reduction and homogenization for a variety of applications with our Cone Mill. In the Cone Mill, a rotating impeller forces the unprocessed material through a cone-shaped stationary screen via vortex action which instantly reduces the size as it passes through the screen. By adjusting the combination of screen, impeller shape, and speed, the final particle size can be precisely controlled. Importantly, for applications with stringent hygienic requirements, such as pharmaceutical and food production, there is no metal-to-metal contact between the impeller and the screen, ensuring optimal cleanliness and safety.",
    image: coneMill,
    specs: [
      { model: "SCM 276", capacity: "100 - 250 Kg/Hr", motor: "5 HP" },
    ],
    finenessRange: "Variable based on screen",
    category: "mills",
  },
  {
    id: "lump-breaker",
    name: "Lump Breaker",
    slug: "lump-breaker",
    shortDescription: "Efficient breaking of lumps and agglomerates in pharmaceutical processing.",
    description: "The Sreenex Lump Breaker is designed for efficient breaking of lumps and agglomerates in pharmaceutical, chemical, and food processing industries. It ensures uniform particle size distribution while maintaining the integrity of the material. The machine features robust construction with stainless steel contact parts, easy cleaning access, and cGMP-compliant design for pharmaceutical manufacturing environments.",
    image: multimill,
    category: "process",
  },
  {
    id: "vibro-sifter",
    name: "Vibro Sifter",
    slug: "vibro-sifter",
    shortDescription: "High-efficiency screening and separation of pharmaceutical powders.",
    description: "The Sreenex Vibro Sifter provides high-efficiency screening and separation of pharmaceutical powders and granules. Utilizing vibratory motion to separate particles by size, it ensures consistent product quality and removes oversized particles and foreign contaminants. The machine is built with GMP standards in mind, featuring stainless steel construction, easy-to-clean design, and multiple screen options for versatile applications.",
    image: flexiMill,
    category: "process",
  },
  {
    id: "octagonal-blender",
    name: "Octagonal Blender",
    slug: "octagonal-blender",
    shortDescription: "Uniform blending of dry powders and granules with octagonal design.",
    description: "The Sreenex Octagonal Blender provides uniform blending of dry powders and granules through its unique octagonal shape, which creates a tumbling and folding motion for thorough mixing. Widely used in pharmaceutical, chemical, and food industries, it ensures homogeneous blending without degrading particle structure. Features include GMP-compliant stainless steel construction, safety interlocks, and variable speed drives for precise control.",
    image: coneMill,
    category: "process",
  },
  {
    id: "polygon-blender",
    name: "Polygon Blender",
    slug: "polygon-blender",
    shortDescription: "Advanced blending technology with polygon container design.",
    description: "The Sreenex Polygon Blender features an advanced polygon-shaped container that provides superior blending efficiency for pharmaceutical powders and granules. The multi-faceted design creates complex tumbling patterns that ensure thorough and homogeneous mixing. Built to cGMP standards with stainless steel construction, it delivers consistent batch-to-batch quality with easy loading, unloading, and cleaning capabilities.",
    image: pinMill,
    category: "process",
  },
  {
    id: "extruder",
    name: "Extruder",
    slug: "extruder",
    shortDescription: "Precision extrusion for pharmaceutical granulation and processing.",
    description: "The Sreenex Extruder is designed for precision extrusion in pharmaceutical granulation and wet processing applications. It produces uniform cylindrical extrudates that are essential for spheronization and pelletization processes. The machine features variable speed control, interchangeable screens for different pellet sizes, and cGMP-compliant stainless steel construction for pharmaceutical manufacturing.",
    image: turboMill,
    category: "process",
  },
];

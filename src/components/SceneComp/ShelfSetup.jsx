import Prop from "../Prop";
import InteractiveModal from "../Interactive/InteractiveModal";
import InteractiveAnimatedModal from "../Interactive/InteractiveAnimatedModal";

export default function ShelfSetup({ setModalContent }) {
  return (
    <group position={[-3, 0, -6]} scale={1}>
      {/* Bottom side */}
      <Prop
        url="/models/FloatingShelf.glb"
        position={[-0.5, 5.5, -3.6]}
        rotation={[0, 0, 0]}
        scale={[1, 3, 2]}
        color={"#000"}
      />
      <Prop
        url="/models/FloatingShelf.glb"
        position={[5.2, 5.5, -3.6]}
        rotation={[0, 0, 0]}
        scale={[1, 3, 2]}
        color={"#000"}
      />
      <InteractiveModal
        url="/models/LegoMoonBuggy.glb"
        position={[-0.5, 5.5, -3.6]}
        rotation={[0, 193, 0]}
        scale={1}
        hitboxPosition={[0.05, 0.5, -0.06]}
        hitboxScale={[1.1, 0.9, 0.6]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
              <h2 className="text-3xl font-bold">Brickify</h2>

              <img
                src="/images/Brickify.webp"
                alt="Screenshot of the project"
                loading="lazy"
                className="w-full rounded shadow-md"
              />

              <p className="text-lg text-left text-gray-700 leading-relaxed">
                Brickify is a vibrant blog platform built during my time at
                Noroff, created for fellow LEGO enthusiasts. It features dynamic
                content loading, search filtering, pagination, and a responsive
                carousel for showcasing the latest builds. With full user
                authentication and blog management tools, it’s designed to be
                both playful and practical — a digital space to celebrate bricks
                and creativity.
              </p>

              <div className="flex gap-3 mt-2">
                <a
                  href="https://khh-bloggie.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/KjetilHHauger/FED1-EXAME-KJETIL-H-H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          )
        }
      />
      <InteractiveModal
        url="/models/Rocketship.glb"
        position={[5.2, 5.9, -3.6]}
        rotation={[0, 193, 0]}
        scale={1}
        hitboxPosition={[-0.02, 0.3, 0]}
        hitboxScale={[0.5, 1.34, 0.6]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
              <h2 className="text-3xl font-bold">Science Museum</h2>

              <img
                src="/images/ScienceMuseum.webp"
                alt="Screenshot of the project"
                loading="lazy"
                className="w-full rounded shadow-md"
              />

              <p className="text-lg text-left text-gray-700 leading-relaxed">
                Created as part of my Front-end development studies at Noroff,
                this project is designed to engage children aged 7 - 14 through
                a fun and interactive digital experience. The goal was to
                combine playful visuals with educational content, making
                learning both accessible and exciting for young users.
              </p>

              <div className="flex gap-3 mt-2">
                <a
                  href="https://kjetilhhauger.github.io/science_museum//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/KjetilHHauger/science_museum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          )
        }
      />
      {/* Middle */}
      <Prop
        url="/models/FloatingShelf.glb"
        position={[2.3, 6.7, -3.6]}
        rotation={[0, 0, 0]}
        scale={[3, 3, 2]}
        color={"#000"}
      />

      <InteractiveAnimatedModal
        url="/models/HoodedAdventurer.glb"
        position={[3.7, 6.744, -3.4]}
        rotation={[0, -40, 0]}
        scale={0.65}
        hitboxPosition={[0.05, 1, 0.1]}
        hitboxScale={[0.8, 2, 0.5]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
              <h2 className="text-3xl font-bold">Anemic Heroes</h2>

              <img
                src="/images/AnemicHeroes.webp"
                alt="Screenshot of the project"
                loading="lazy"
                className="w-full rounded shadow-md"
              />

              <p className="text-lg text-left text-gray-700 leading-relaxed">
                Anemic Heroes is a browser-based dungeon crawler developed as a
                team project at Noroff. Built with React and JavaScript, the
                game lets players create their own hero and embark on branching
                adventures filled with traders, encounters, and turn-based
                battles.
              </p>

              <p className="text-lg text-left text-gray-700 leading-relaxed">
                Players can choose from distinct classes like mage, warrior, or
                rogue — each with unique stats and playstyles. The map system
                generates random encounter paths ending in boss fights, while
                progression is tracked through battles and equipment upgrades.
              </p>

              <p className="text-lg text-left text-gray-700 leading-relaxed">
                Featuring a shop, character sheet, item system, and a scalable
                combat engine, Anemic Heroes emphasizes tactical planning and
                replayability. Defeat the boss to continue — or start over and
                try again.
              </p>

              <div className="flex gap-3 mt-2">
                <a
                  href="https://anemic-heroes.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/AnemicGames/AnemicHeroes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          )
        }
      />
      {/* Middle side */}
      <Prop
        url="/models/FloatingShelf.glb"
        position={[-2, 7.5, -3.6]}
        rotation={[0, 0, 0]}
        scale={[1, 3, 2]}
        color={"#000"}
      />
      <Prop
        url="/models/FloatingShelf.glb"
        position={[6.5, 7.5, -3.6]}
        rotation={[0, 0, 0]}
        scale={[1, 3, 2]}
        color={"#000"}
      />
      <InteractiveModal
        url="/models/SeaSideVilla.glb"
        position={[-2, 7.73, -3.55]}
        rotation={[0, 60, 0]}
        scale={0.35}
        hitboxPosition={[0, 0, 0]}
        hitboxScale={[2, 1, 2]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
              <h2 className="text-3xl font-bold">Holidaze</h2>

              <img
                src="/images/Holidaze.webp"
                alt="Screenshot of the project"
                loading="lazy"
                className="w-full rounded shadow-md"
              />

              <p className="text-lg text-left text-gray-700 leading-relaxed">
                Holidaze is a responsive React-based booking platform built for
                my Noroff final project. It features venue filtering, user
                authentication, and a hero video landing page — all styled with
                Tailwind and built for performance.
              </p>

              <span className=" text-xl text-gray-600">
                Stay curious, stay cozy, stay Holidaze.
              </span>

              <div className="flex gap-3 mt-2">
                <a
                  href="https://khh-daze.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/KjetilHHauger/kjetil_h_hauger_booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          )
        }
      />
      <InteractiveModal
        url="/models/Gavel.glb"
        position={[6.5, 7.73, -3.55]}
        rotation={[0, 134, 0]}
        scale={0.8}
        hitboxPosition={[-0.02, 0.06, 0.1]}
        hitboxScale={[0.8, 0.6, 1.1]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
              <h2 className="text-3xl font-bold">Hammer Time</h2>

              <img
                src="/images/HammerTime.webp"
                alt="Screenshot of the project"
                loading="lazy"
                className="w-full rounded shadow-md"
              />

              <p className="text-lg text-left text-gray-700 leading-relaxed">
                Welcome to Hammer Time — an interactive auction platform built
                as part of my studies at Noroff. This project allows users to
                explore live auctions, place bids, and create their own
                listings. Featuring user authentication, listing management, and
                real-time bidding functionality, it’s powered by the Noroff
                Auction API and designed for smooth, intuitive interaction.
                Think of it as eBay with more personality (and fewer fees).
              </p>

              <div className="flex gap-3 mt-2">
                <a
                  href="https://khh-ht.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/KjetilHHauger/KHH-AUCTION-24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          )
        }
      />

      <Prop
        url="/models/KHH.glb"
        position={[2.3, 7.7, -3.94]}
        rotation={[70, 0, 0]}
        scale={10}
      />
    </group>
  );
}

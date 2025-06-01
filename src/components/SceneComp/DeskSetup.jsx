import Prop from "../Prop";
import InteractiveModal from "../Interactive/InteractiveModal";

export default function DeskSetup({ setModalContent }) {
  return (
    <group position={[-3, 0, -6]} scale={1}>
      <Prop
        url="/models/OfficeChair.glb"
        position={[1, 0.1, 0]}
        rotation={[0, 150, 0]}
        scale={1}
      />
      <Prop
        url="/models/AdjustableDesk.glb"
        position={[2.5, 0, -2.6]}
        rotation={[0, -90, 0]}
        scale={3}
      />

      <InteractiveModal
        url="/models/ComputerMonitor.glb"
        position={[0.5, 2.83, -3.4]}
        rotation={[0, 20, 0]}
        scale={1}
        hitboxPosition={[0, 0.85, 0]}
        hitboxScale={[1.9, 1.1, 0.15]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="flex flex-col items-stretch w-full  text-black p-4 gap-4">
              <h1 className="text-center text-xl font-bold">Contact</h1>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="flex flex-col gap-2"
              >
                <input type="hidden" name="form-name" value="contact" />
                <label className="flex flex-col text-sm">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="border p-1 rounded"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="border p-1 rounded"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="border p-1 rounded"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 text-black py-1 px-3 rounded hover:text-gray-600 cursor-pointer bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          )
        }
      />
      <InteractiveModal
        url="/models/ComputerMonitor.glb"
        position={[2.5, 2.83, -3.4]}
        rotation={[0, -20, 0]}
        scale={1}
        hitboxPosition={[0, 0.85, 0]}
        hitboxScale={[1.9, 1.1, 0.15]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="w-full max-w-3xl bg-white text-black p-6 md:p-10 overflow-auto space-y-6">
              <header className="text-center space-y-1">
                <h1 className="text-3xl font-bold">Kjetil Harneshaug Hauger</h1>
                <p className="text-sm text-gray-600">
                  Frontend Developer | React • Three.js
                </p>
                <div className="text-sm text-gray-500">
                  kjetil.h.hauger@gmail.com •
                  <a
                    href="https://www.linkedin.com/in/kjetil-harneshaug-hauger-00851084/"
                    className="underline hover:text-gray-700 ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </header>

              <section>
                <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                  Summary
                </h2>
                <p className="text-sm leading-relaxed text-gray-700">
                  Creative and dedicated frontend developer with over 1 year of
                  experience building dynamic, responsive websites and immersive
                  3D user interfaces. Strong understanding of modern JavaScript
                  frameworks, performance optimization, and user-centered design
                  principles.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                  Experience
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">Web Editor - Lyreco</div>
                    <div className="text-xs text-gray-500 mb-1">
                      2024 - Present
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>
                        Managing content in a CMS to support e-commerce
                        operations.
                      </li>
                      <li>
                        Collaborating with design teams using Figma for visual
                        updates.
                      </li>
                      <li>
                        Implementing HTML, CSS, and JavaScript updates for site
                        components.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-semibold">Kindergarten Assistant</div>
                    <div className="text-xs text-gray-500 mb-1">
                      2012 - 2023
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold">SFO/AKS Assistant</div>
                    <div className="text-xs text-gray-500 mb-1">
                      2009 - 2012
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                  Skills
                </h2>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>
                    <strong>Languages:</strong> JavaScript, TypeScript, HTML/CSS
                  </div>
                  <div>
                    <strong>Frameworks:</strong> React, Node.js, Express
                  </div>
                  <div>
                    <strong>Tools:</strong> Git, Vite, Webpack, Figma, Three.js
                  </div>
                  <div>
                    <strong>Other:</strong> Responsive Design, Accessibility,
                    Agile Development
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                  Education
                </h2>
                <div className="text-sm text-gray-700">
                  Noroff School of Technology and Digital Media <br />
                  <span className="text-xs text-gray-500">2023 - 2025</span>
                </div>
              </section>
            </div>
          )
        }
      />
      <Prop
        url="/models/ComputerDesktop.glb"
        position={[4.4, 2.83, -3.6]}
        rotation={[0, 90, 0]}
        scale={1}
      />
      <Prop
        url="/models/ComputerMousepad.glb"
        position={[1.6, 2.83, -2.1]}
        rotation={[0, 90, 0]}
        scale={1}
      />
      <Prop
        url="/models/ComputerKeyboard.glb"
        position={[1.1, 2.83, -2.3]}
        rotation={[0, 3, 0]}
        scale={0.7}
      />
      <Prop
        url="/models/ComputerMouse.glb"
        position={[2.5, 2.83, -2.2]}
        rotation={[0, 23, 0]}
        scale={1}
      />
      <Prop
        url="/models/SodaCan.glb"
        position={[3.5, 2.83, -2.2]}
        rotation={[0, -250, 0]}
        scale={0.05}
      />
      <Prop
        url="/models/CrushedSodaCan.glb"
        position={[4.2, 2.98, -2.5]}
        rotation={[0, 23, 0]}
        scale={5}
      />
    </group>
  );
}

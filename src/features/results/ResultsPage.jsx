import React from "react";
import "../../index.css";

export default function ResultsPage() {
  return (
    <main>
      <section>
        <div
          className="relative flex flex-col justify-center items-center min-h-screen 
        w-full bg-[url(/public/home-page-image-1.png)] bg-center bg-repeat"
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="flex flex-col justify-center items-center gap-5 relative z-10 text-white">
            <div className="flex flex-col justify-center items-center">
              <p className="text-5xl">You are</p>
              <h1 className="text-9xl">KALAMANSI</h1>
              <p className="text-5xl">flavor</p>
            </div>
            <button
              className="bg-white text-[#1ea913] rounded-full px-5 py-3 font-bold tracking-wider
              hover:cursor-pointer hover:text-white hover:bg-[#1ea913]"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-15 py-10 px-80">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-[#1ea913] text-5xl">
            What&apos;s up with Kalamansi?
          </h1>
          <div className="bg-[#1ea913] h-1 w-20"></div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae.
          </p>
          <button
            className="border-2 border-outline-[#1ea913] rounded-full border-solid 
                text-[#1ea913] py-2 px-5 tracking-wider hover:cursor-pointer hover:bg-[#1ea913]
                hover:text-white"
          >
            Read More
          </button>
        </div>
      </section>
    </main>
  );
}

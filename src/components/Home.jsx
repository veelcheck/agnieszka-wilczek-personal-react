function Home() {

  return ( 
    <section className="mx-auto px-4 py-2 flex flex-col justify-center items-center md:items-start md:flex-row md:gap-4 lg:gap-10 md:mt-4">
      <div className="mx-auto flex flex-col items-center">
      <h1 className="font-amatic text-3xl text-transform: uppercase font-bold md:mb-20">Welcome to my react page!</h1>
      <div className="w-[300px] h-[220px] flex justify-center items-center relative my-10 md:my-0 animate-wiggle">
        <div className="absolute rounded-[50%] h-[230px] w-[90px] bg-transparent rotate-90 border-[9px] border-[#FBFAE2]"></div>
        <div className="absolute rounded-[50%] h-[230px] w-[90px] bg-transparent rotate-[30deg] border-[9px] border-[#4FA07B]"></div>
        <div className="absolute rounded-[50%] h-[230px] w-[90px] bg-transparent rotate-[-30deg] border-[9px] border-[#DC6638]"></div>
        <div className="size-[40px] rounded-full bg-white"></div>
      </div>
      </div>
      <article className="md:w-4/6 space-y-4">
        <p className="px-2">I'm Agnieszka Wilczek, an enthusiastic junior developer on a journey into the fascinating world of web development. My adventure began with HTML and CSS, where I cultivated my skills in crafting visually appealing and user-friendly interfaces.</p>

        <p className="px-2 bg-[rgba(255,255,255,0.1)] rounded-md">As I embarked on the frontend path, I discovered the power of JavaScript and React, adding dynamic elements to my creations. While I'm still in the early stages of my coding expedition, each line of code I write is fueled by a genuine passion for learning and building.</p>

        <p className="px-2">My current toolkit includes HTML, CSS, JavaScript and React, and I'm eagerly absorbing new concepts like a sponge. My goal is to transition from frontend to full-stack development, embracing the challenges and opportunities that lie ahead.</p>

        <p className="italic px-2 bg-[rgba(255,255,255,0.1)] rounded-md">And if you chance upon a moment where the binary hum of the computer subsides, rest assured I'm lost in the cityscape of Ankh-Morpork, walking in the muddy boots of Sam Vimes, and reveling in the whimsy of Terry Pratchett's storytelling magic.</p>
      </article>
    </section>
    
   );
}

export default Home;

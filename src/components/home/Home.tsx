function Home() {
   return (
      <>
         <main style={grayBg} className="min-h-screen max-h-fit">
            <header style={yellowBase} className="w-screen h-32 rounded-b-3xl">
               <section className="h-full flex justify-evenly items-center">

                  <section className="-ml-7">
                     <img className=" w-10" src="../assets/img/user.png" alt="" />
                  </section>

                  <section className="-mb-10">
                     <p className="mb-2 font-light text-2xl text-center">Hello, user!</p>
                     <p className="font-light text-lg">ag: xxxxx cc: xxxx-xx</p>
                  </section>

                  <section className=" -mr-7">
                     <img src="../assets/img/cardapio.png" alt="" />
                  </section>
               </section>
            </header>

            <section className="flex justify-center items-center w-screen h-24 mt-1">
               <section className="flex justify-evenly items-center w-10/12 h-4/6 rounded-xl bg-white">
                  <p className="text-4xl">R$ *****,**</p>
                  <img className="w-8 h-8" src="../assets/img/olho-vermelho.png" alt="" />
               </section>
            </section>

            <section className="flex justify-center items-center w-screen h-96">
               <section className="flex justify-evenly items-center w-10/12 h-5/6 rounded-xl bg-white">

               </section>
            </section>

            <section className="flex justify-center items-center w-screen h-24 mt-1">
               <section className="flex justify-evenly items-center w-10/12 h-4/6 rounded-xl bg-white">
               </section>
            </section>

            <footer className="flex items-center fixed bottom-0 h-24 w-screen rounded-t-3xl bg-white">
               <section className="flex justify-around items-center w-screen">

                  <img src="../assets/img/icon-home.png" alt="" />

                  <img src="../assets/img/icon-wallet.png" alt="" />

                  <img src="../assets/img/icon-invest.png" alt="" />

               </section>
            </footer>
         </main>
      </>
   );
}
 
export default Home;

const yellowBase: object = {
   backgroundColor: "#FFD84C"
};

const grayBg: object = {
   backgroundColor: "#EEEEEE"
}

 
 
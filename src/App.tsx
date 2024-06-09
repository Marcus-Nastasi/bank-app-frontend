function App() {
  return (
      <>
         <main className="">
            <header className=" w-screen h-32 bg-yellow-300 rounded-b-3xl">
               <section className=" h-full flex justify-evenly items-center">

                  <section className=" -ml-7">
                     <img className=" w-10" src="../public/assets/img/user.png" alt="" />
                  </section>

                  <section className=" -mb-11">
                     <p className="mb-1 text-2xl text-center">Hello, user!</p>
                     <p className=" text-lg">ag: xxxxx cc: xxxx-xx</p>
                  </section>

                  <section className=" -mr-7">
                     <img src="../public/assets/img/cardapio.png" alt="" />
                  </section>
               </section>
            </header>
         </main>
      </>
  )
}

export default App;



export default function Login() {
   return(
      <>
         <main style={grayBg} className="min-h-screen max-h-fit">
            <header style={yellowBase} className="w-screen h-32 rounded-b-3xl">
               <section className="h-full flex justify-evenly items-center">

                  <section className="-ml-16 mt-2">
                     <img className=" w-7" src="../assets/img/icon-back.png" alt="" />
                  </section>

                  <section className="-mb-5">
                     <p className="mb-2 font-medium text-3xl text-center">Login</p>
                  </section>

                  <section className="-mr-16">
                     <img src="../assets/img/cardapio.png" alt="" />
                  </section>
               </section>
            </header>

            <section className="flex justify-center items-center w-screen h-56 mt-16">
               <section className="flex flex-col justify-evenly items-center w-10/12 min-h-56 max-h-fit rounded-xl bg-white">
                  
                  <form className="w-11/12" action="">

                     <section className="flex flex-col p-5">
                        <label className="font-medium mb-3 text-2xl" htmlFor="">cpf</label>
                        <input className="mb-5 border rounded-md p-1 border-slate-900" type="text" name="" id="" />

                        <label className="font-medium mb-3 text-2xl" htmlFor="">password</label>
                        <input className="mb-5 border rounded-md p-1 border-slate-900" type="password" name="" id="" />

                        <button className="font-semibold border w-28 p-1 rounded-lg self-center border-slate-700 bg-slate-800 text-slate-50" type="submit">send</button>
                     </section>

                  </form>

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
};

const yellowBase: object = {
   backgroundColor: "#FFD84C"
};

const grayBg: object = {
   backgroundColor: "#EEEEEE"
}






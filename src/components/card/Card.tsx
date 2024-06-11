import InvoiceCard from "./InvoiceCard";

export default function Card() {
   return(
      <>
         <main style={grayBg} className="min-h-screen max-h-fit">
            <header style={yellowBase} className="w-screen h-32 rounded-b-3xl fixed top-0">
               <section className="h-full flex justify-evenly items-center">

                  <section className="-ml-16 mt-2">
                     <img className=" w-7" src="../assets/img/icon-back.png" alt="" />
                  </section>

                  <section className="-mb-5">
                     <p className="mb-2 font-medium text-3xl text-center">Cards</p>
                  </section>

                  <section className="-mr-16">
                     <img src="../assets/img/cardapio.png" alt="" />
                  </section>
               </section>
            </header>

            <section className="py-40">
               <InvoiceCard invoice={"1.234,50"} number={"0000.1234.4567.0000"} />

               <InvoiceCard invoice={"22.548,56"} number={"0000.1234.4567.0000"} />

               <InvoiceCard invoice={"348,17"} number={"0000.1234.4567.0000"} />

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






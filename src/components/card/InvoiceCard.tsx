export default function InvoiceCard({ invoice, number }) {
   return(
      <>
         <section className="flex justify-center items-center w-screen h-56 mt-4">
            <section className="flex flex-col justify-between p-4 w-10/12 h-5/6 rounded-xl bg-white">
               <div className="flex justify-between">
                  <p className="font-semibold">INVOICE</p>
                  <p className="font-light">more...</p>
               </div>

               <div className=" -mt-6 text-3xl">
                  <p>$ {invoice}</p> 
               </div>

               <div className="">
                  <p>{number}</p>
               </div>
            </section>
         </section>
      </>
   );
}





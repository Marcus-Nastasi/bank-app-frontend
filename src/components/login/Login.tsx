import { useState } from "react";

export default function Login() {
   const [ fetchError, setFetchError ] = useState<boolean>(false);
   const [ errorMessage, setErrorMessage ] = useState<string>();

   async function handleSubmit(e: any): Promise<void> {
      e.preventDefault();

      const cpf: any = document.getElementById('inp_cpf');
      const pass: any = document.getElementById('inp_pass');

      const url: string = `http://localhost:8080/auth/login`;
      const options: object = {
         method: 'POST',
         body: JSON.stringify({ cpf: cpf.value, password: pass.value }),
         headers: new Headers({ 'content-type': 'application/json' })
      };

      try {
         const req: Response = await fetch(url, options);
         const token: string = await req.text();

         localStorage.setItem('token', token);
         
         return;
      } catch(e) {
         console.log(e);
         handleError(e);
      }
   };

   function handleError(e): void {
      setErrorMessage(e);
      setFetchError(true);

      setTimeout(() => setFetchError(false), 2000);
      return;
   }

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

            {/* to-do: create html and css for error */}
            {fetchError ? <> <p>error</p> </> : ''}

            <section className="flex justify-center items-center w-screen h-56 mt-16">
               <section className="flex flex-col justify-evenly items-center w-10/12 min-h-56 max-h-fit rounded-xl bg-white">
                  
                  <form className="w-11/12">

                     <section className="flex flex-col p-5">
                        <label className="font-medium mb-3 text-2xl" htmlFor="">cpf</label>
                        <input className="mb-5 border rounded-md p-1 border-slate-900 bg-slate-100" type="text" name="" id="inp_cpf" />

                        <label className="font-medium mb-3 text-2xl" htmlFor="">password</label>
                        <input className="mb-5 border rounded-md p-1 border-slate-900 bg-slate-100" type="password" name="" id="inp_pass" />

                        <button
                           onClick={handleSubmit}
                           className="font-semibold border w-28 p-1 rounded-lg self-center border-slate-700 bg-slate-800 text-slate-50" 
                           type="submit">
                              send
                        </button>
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






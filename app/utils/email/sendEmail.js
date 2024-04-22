import axios from "axios";

export async function sendEmail(data) {
   console.log(data);
   const url = `/api/send?data=${data}`;
   try {
        const res = await fetch(url, {
            method: "POST",
        });

        const responseData = res.data;
        console.log(responseData);

   } catch (error) {
    console.log(error);
   }
}

export default function SubmitForm({ formData }) {
  const url = process.env.SECRET_GAS;

  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Manejar la respuesta exitosa
    })
    .catch((error) => {
      console.log(error);
      // Manejar el error
    });

  return <></>;
}
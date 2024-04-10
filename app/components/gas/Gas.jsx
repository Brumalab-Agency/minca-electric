import SubmitForm from './SubmitForm';

const Gas = ({ formEl }) => {
  const formData = new FormData(formEl);

  return <SubmitForm formData={formData} />;
};

export default Gas;
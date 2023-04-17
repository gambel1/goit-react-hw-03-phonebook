import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormWrapper, FormLabel } from './ContactForm.styled';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
export default ContactForm;

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const shema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: yup.number().min(4).required(),
});

function ContactForm(props) {
  const { onSubmit } = props;
  function handleSubmit(values, { resetForm }) {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={shema}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Field type="text" name="name" id="name" required />
          <ErrorMessage name="name" />
        </FormWrapper>

        <FormWrapper>
          <label htmlFor="number">Number</label>
          <Field type="tel" name="number" id="number" required />
          <ErrorMessage name="number" />
        </FormWrapper>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

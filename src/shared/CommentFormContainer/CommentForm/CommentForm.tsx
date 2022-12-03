import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.css';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field, FieldInputProps } from 'formik';
import { useDispatch, useStore } from 'react-redux';
import { updateComment } from '../../../store/actions';
import { RootState } from '../../../store/reducer';


interface FormValues {
  comment: string
}


const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, handleChange} = props;
  const store = useStore<RootState>();

  return (
    <Form className={styles.form} >
      <Field
        as="textarea"
        name="comment"
        className={styles.input}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          handleChange(event);
          store.dispatch(updateComment(event.target.value))
        }}
        aria-invalid={errors.comment ? 'true' : undefined} 
      />
      {touched.comment && errors.comment && <div className={styles.error}>{errors.comment}</div>}
      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.button}
      >
        Комментировать
      </button>
    </Form>
  );
};

interface CommentFormProps {
  initialComment?: string;
}

const CommentFormFormik = withFormik<CommentFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      comment: props.initialComment || '',
    };
  },

  validationSchema: Yup.object().shape({
    comment: Yup.string()
      .min(3, 'Введите более 3-х символов')
      .max(100, 'Слишком много символов')
      .required('Обязательно для заполнения'),
  }),

  handleSubmit: values => {
    const comment = values.comment;
    alert(`Ваш комментарий "${comment}" был отправлен.`);
  },

  displayName: "CommentForm",
})(InnerForm);


export function CommentForm() {
  const store = useStore<RootState>();
  const initialComment = store.getState().commentText;

  return (
    <CommentFormFormik initialComment={initialComment} />
  );
}
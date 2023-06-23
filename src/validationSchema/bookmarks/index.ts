import * as yup from 'yup';

export const bookmarkValidationSchema = yup.object().shape({
  casual_reader_id: yup.string().nullable().required(),
  content_id: yup.string().nullable().required(),
});

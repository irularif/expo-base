import {
  Textarea,
  TextareaInput,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from '@pkgs/ui';

export const examples = [
  {
    name: 'FormControl',
    Code: function Example() {
      return (
        <FormControl size="sm" className="max-w-[200px] w-full">
          <FormControlLabel>
            <FormControlLabelText>Write with me</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder="Once upon a time..." />
          </Textarea>
          <FormControlHelper>
            <FormControlHelperText>Start your story</FormControlHelperText>
          </FormControlHelper>
        </FormControl>
      );
    },
  },
];

import Button from './Button';

export default function SubmitButton() {
  return (
    <Button
      type="submit"
      className="color-white bg-primary w-full flex-shrink-0 rounded-lg p-3 text-lg text-white hover:opacity-90 md:w-[200px] md:p-4 md:text-[20px]"
      level="primary"
    >
      Send
    </Button>
  );
}

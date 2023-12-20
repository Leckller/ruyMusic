function DivLoading({ size = 'border-[20px]' }: { size?: string }) {
  return (
    <div
      className={ `rounded-full border-violet-500 h-28 w-28
    ${size} border-b-transparent animate-spin` }
    />
  );
}

export default DivLoading;

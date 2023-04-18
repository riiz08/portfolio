const Heading = ({ children }) => {
  return (
    <h2 class="text-4xl underline underline-offset-8 text-center mb-6 dark:bg-gray-900 font-bold dark:text-white">
      {children}
    </h2>
  );
};

export default Heading;
